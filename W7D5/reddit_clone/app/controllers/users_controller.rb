class UsersController < ApplicationController
    
    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.new(user_params)

        if @user.save
            redirect_to user_url(@user)
        else
            flash.now(:errors) = @user.errors.full_messages 
            render :new
        end
    end

    def index
        @users = User.all
        render :index
    end

    def show
        @user = User.find(param[:id])
    end

    def edit
        render :edit
    end 

    def update 
        @user = User.find(params[:id])
        if @user.update(params[:username]) 
            redirect_to user_url(@user)
        else
            render :index
        end
    end

    def destroy
        @user = User.find(params[:id])
        @user.destroy
        render :index
    end

    def user_params
        params.require(:user).permit(:username, :password)
    end
end
