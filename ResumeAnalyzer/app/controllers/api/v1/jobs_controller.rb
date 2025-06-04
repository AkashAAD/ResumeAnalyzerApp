module Api
  module V1
    class JobsController < ApplicationController
      def index
        jobs = Job.all

        render json: jobs
      end

      def create
        job = Job.new(job_params)

        if job.save
          render json: job, status: :created
        else
          render json: { error: job.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def update
        job = Job.find_by(id: params[:id])

        if job.update(job_params)
          render json: job, status: :created
        else
          render json: { error: job.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def show
        job = Job.find_by(id: params[:id])

        if job
          render json: job
        else
          render json: { message: 'Job not found' }, status: :not_found
        end
      end

      def destroy
        job = Job.find_by(id: params[:id])

        if job
          jon.destroy

          render json: { message: 'Job deleted successfully!' }
        else
          render json: { message: 'Job not found' }, status: :not_found
        end
      end

      private
      
      def job_params
        params.require(:job).permit(:title, :company_name, :description, :location, :job_type, :experience_required)
      end
    end
  end
end
