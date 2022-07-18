class Api::UsersController < ApplicationController

    def create 
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422 
        end
    end

    def events
        @user = User.find(params[:id])

        if @user
            render :events, locals: {user: @user}
        else
            render json: @user.errors.full_messages, status: 422
        end

    end

    private

    def user_params
        params.require(:user).permit(:email, :fname, :lname, :password)
    end

end
