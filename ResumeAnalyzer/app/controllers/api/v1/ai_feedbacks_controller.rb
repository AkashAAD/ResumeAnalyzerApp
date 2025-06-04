module Api
  module V1
    class AiFeedbacksController < ApplicationController
      def show
        resume = @current_user.resumes.find_by(id: params[:id])
        return render json: { message: 'Resume not found' }, status: :not_found unless resume

        ai_feedback = resume.ai_feedback

        if ai_feedback
          render json: ai_feedback
        else
          render json: { message: 'AI feedback not available!' }
        end
      end
    end
  end
end
