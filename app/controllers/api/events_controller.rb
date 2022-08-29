class Api::EventsController < ApplicationController
    before_action :require_logged_in, only: [:create, :update, :delete]
    
    
    def show
        @event = Event.find_by(id: params[:id])
        @host = @event.host
        
   
        render :show
    end

    def create
    
        @event = Event.create(event_params)
        @host = @event.host

        if @event.save! 
            render :show
        else
            render json: @event.errors.full_messages, status: 422
        end
    end

    
    def index

        if params[:user_id]
            @events = Event.where(host_id: params[:user_id])
  
        else
            @events = Event.all 
        end 

        render :index
    end


    def update 
        @event = Event.find(params[:id])

        @host = @event.host
        if @event.update(event_params)
            render :show
        else
            render json: @event.errors.full_messages, status: 406
        end
    end

    def destroy 
        @event = Event.find(params[:id])
        @host = @event.host
        if @event.destroy
            render :show
        else
            render json: @event.errors.full_messages, status: 422
        end
    end

  

    private

    def event_params
        params.require(:event).permit(:title, :description, :user_id, :location, :host_id, :category, :start_date, :end_date, :start_time, :end_time, :photo)
    end
end
