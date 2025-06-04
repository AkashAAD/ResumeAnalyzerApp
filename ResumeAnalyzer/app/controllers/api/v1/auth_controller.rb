module Api
  module V1
    class AuthController < ApplicationController
      skip_before_action :authenticate_request

      def login
        user = User.find_by(email: params[:user][:email])

        if user&.authenticate(params[:user][:password])
          token = JsonWebToken.encode(user_id: user.id)

          render json: { token: token, user: user }, status: :ok
        else
          render json: { error: 'Invalid Credentials' }, status: :unauthorized
        end          
      end
    end
  end
end
