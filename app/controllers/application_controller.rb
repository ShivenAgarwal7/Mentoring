class ApplicationController < ActionController::API
  include Knock::Authenticable
  protect_from_forgery unless: -> { request.format.json? }
  
  protected
  
  
  def authorize_as_admin
    return_unauthorized unless !current_user.nil? && current_user.is_admin?
  end
end
