module Api
  module V1
    class ResumesController < ApplicationController
      def index
        resumes = @current_user.resumes

        render json: resumes
      end

      def show
        resume = @current_user.resumes.find_by(id: params[:id])

        if resume
          render json: resume.as_json.merge!({url: url_for(resume.file)})
        else
          render json: { message: 'Resume not found' }, status: :not_found
        end
      end

      def upload
        resume = @current_user.resumes.new
        resume.file.attach(resume_params[:file])

        if resume.save
          render json: { message: 'Resume uploaded successfully!', url: url_for(resume.file) }, status: :ok
        else
          render json: { error: resume.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def destroy
        resume = @current_user.resumes.find_by(id: params[:id])

        if resume
          resume.destroy

          render json: { message: 'Resume deleted successfully!' }
        else
          render json: { message: 'Resume not found' }, status: :not_found
        end
      end

      private

      def resume_params
        params.require(:resume).permit(:file)
      end
    end
  end
end
