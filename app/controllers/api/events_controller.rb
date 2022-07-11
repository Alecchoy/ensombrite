class Api::EventsController < ApplicationController
    before_action :require_logged_in, only: [:create, :edit, :delete]
    
    def new
        
    end
    
    def show
        @event = Event.find_by(id: params[:id])
    end
    def create
        @event = Event.create!(event_params)
        render :show
    end
    
    def index
        @events = Event.all
        render :index 
    end

    def edit 
    end

    def update

    end

    def delete
    end 

    private

    def event_params
        params.require(:event).permit(:title, :description, :location, :category, :start_date, :end_date, :start_time, :end_time)
    end
end
