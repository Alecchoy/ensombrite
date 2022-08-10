class Api::LikesController < ApplicationController

    def index
        @likes = Like.where({user_id: params[:user_id]})
    end

    def create
    end

    def destroy
    end

end
