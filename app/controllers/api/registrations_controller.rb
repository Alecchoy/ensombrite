class Api::RegistrationsController < ApplicationController

    def index 
        @registrations = Registration.where({user_id: params[:user_id]})
        render :index
    end

    def create 
        @event = Event.find_by(id: params[:event_id])
        if @event.attendants.include?(current_user)
            render "api/events/show"
        else
            @registration = Registration.create(user_id: current_user.id, event_id: (@event.id))
            render "api/events/show"
        end
    end

    def destroy 

    end
end
