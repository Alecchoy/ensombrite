class Api::EventsController < ApplicationController
    before_action :require_logged_in, only: [:create, :edit, :delete]
    
    
    def show
        @event = Event.find_by(id: params[:id])
    end

    def create
    
        @event = Event.create(event_params)
        if @event.save 
            render "api/events/show"
        else
            render json: @events.errors.full_message, status: 422
        end
    end
    
    def index
        @events = Event.all
        render :index 
    end

  

    private

    def event_params
        params.require(:event).permit(:title, :description, :location, :host_id, :category_id, :start_date, :end_date, :start_time, :end_time)
    end
end
