class ApplicationController < ActionController::Base
  before_action :authenticate_request
  skip_before_action :verify_authenticity_token

  private

  def authenticate_request
    header = request.headers['Authorization']
    return unless header
    token = header.split(' ').last if header

    decoded = JsonWebToken.decode(token) if token

    @current_user = User.find_by(id: decoded[:user_id])

    render json: { error: 'Unauthorized' }, status: :unauthorized unless @current_user
  end
end
