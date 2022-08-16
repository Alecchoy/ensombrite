class Api::RegistrationsController < ApplicationController



    def index 
        @registrations = Registration.where({user_id: params[:user_id]})
        render :index
    end

    def create 
        @event = Event.find_by(id: params[:event_id])
        @host = @event.host
        if @event.attendants.include?(current_user)
            render json: @registration.errors.full_messages, status: 422
        else
            @registration = Registration.create(user_id: current_user.id, event_id: (@event.id))
            # redirect_to `api/events/#{current_user.id}/show`
            render "api/events/show"
        end
    end

    def destroy 
        @registration = Registration.find_by(id: params[:id])
        if @registration.destroy
            render json: @registration
        else
            render json: @registration.errors.full_messages, status: 422
        end

    end
end
