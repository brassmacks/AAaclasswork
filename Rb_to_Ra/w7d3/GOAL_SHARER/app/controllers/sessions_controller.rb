class SessionsController < ApplicationController
    def create
        user = User.find_by_credentials(
            params[:user][:username]
            params[:user][:password]
        )
        if user.nil?
            flash.now[:errors] = ['Incorrect username and/or password']
            render :new
        else
            login_user!(user)
            redirect_to goals_url
        end

    end

    
    def destroy
        logout_user!
        reirect_to new_session_url
    end

    def new
        render :new
    end
end
