class ApplicationController < ActionController::Base
    
    helper_method :current_user, :logged_in?

    def login(user)
        session[:session_token] = User.reset_session_token!
    end
