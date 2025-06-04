module Api
  module V1
    class JobMatchesController < ApplicationController
      def match_jobs
        resume = @current_user.resumes.find_by(id: params[:id])
        return render json: { message: 'Resume not found' }, status: :not_found unless resume

        skills = resume&.skills.pluck(:skill_name)
        matched_jobs = Job
          .joins(:job_matches)
          .where('jobs.description ILIKE ANY (array[?])', skills.map{|s| "%#{s}%" })
          .select('jobs.*, job_matches.match_score')
          .order('job_matches.match_score DESC')

        render json: matched_jobs
      end
    end
  end
end
