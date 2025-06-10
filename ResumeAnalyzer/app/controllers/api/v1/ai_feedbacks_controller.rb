module Api
  module V1
    class AiFeedbacksController < ApplicationController
      def show
        # resume = @current_user.resumes.find_by(id: params[:id])
        # return render json: { message: 'Resume not found' }, status: :not_found unless resume
        ai_feedback = ResumeAiService.analyse_resume(analysis_params)

        if ai_feedback
          render json: ai_feedback
        else
          render json: { message: 'AI feedback not available!' }
        end
      end

      private
      def analysis_params
        params.require(:analysis_data).permit(:resume, :job_description)
      end
    end
  end
end
