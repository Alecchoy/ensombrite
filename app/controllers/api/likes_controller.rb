class Api::LikesController < ApplicationController

    def index
        @likes = Like.where({user_id: params[:user_id]})
        render :index
    end

    def create
        @event = Event.find_by(id: params[:event_id])
        @host = @event.host
        if @event.likers.include?(current_user)
            render "api/events/show"
        else
            @like = Like.create(user_id: current_user.id, event_id: (@event.id))
            # redirect_to `api/events/#{current_user.id}/show`
            render "api/events/show"
        end
    end

    def destroy
        @like = Like.find_by(id: params[:id])
        if @like.destroy
            render json: @like
        else
            render json: @like.errors.full_messages, status: 422
        end

    end

end
