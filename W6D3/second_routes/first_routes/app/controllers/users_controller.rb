class UsersController < ApplicationController
    
    def index 
        render json: User.all 
    end

    def create
        user = User.new(params.require(:user).permit(:id, :name, :email))
        #debugger
        
        user.save!
        render json: user
    end
end