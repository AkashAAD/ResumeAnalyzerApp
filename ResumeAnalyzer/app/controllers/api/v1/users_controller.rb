module Api
  module V1
    class UsersController < ApplicationController
      before_action :authenticate_request, only: [:profile]

      def create
        user = User.new(user_params)

        if user.save
          render json: { message: 'User created successfully!' }, status: :created
        else
          render json: { error: user.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def profile
        render json: { user: @current_user }, status: :ok
      end

      private

      def user_params
        params.require(:user).permit(:name, :username, :email, :password, :password_confirmation)
      end
    end
  end
end
