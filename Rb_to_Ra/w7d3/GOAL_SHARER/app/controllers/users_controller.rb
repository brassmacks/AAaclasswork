class UsersController < ApplicationController
    before_action :require_no_user!

    def create
        @user = User.new(user_params)
        if @user.save
            login_user!(@user)
            redirect_to goals_url
        else
            flash.now[:errors] = @user.errors.full_messages
            render :new
        end
    end

    def new
        @user = User.new
        render :new
    end

    def user_params
        params.require(:user).permit(:password, :username)
    end
end
