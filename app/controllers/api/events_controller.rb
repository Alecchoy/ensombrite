class Api::EventsController < ApplicationController
    before_action :require_logged_in, only: [:create, :update, :delete]
    
    
    def show
        @event = Event.find_by(id: params[:id])
        @host = @event.host
        
   
        render :show
    end

    def create
    
        @event = Event.create(event_params)
        @event.host_id = current_user.id

        if @event.save! 
            redirect_to api_events_url
        else
            render json: @event.errors.full_messages, status: 422
        end
    end

    
    def index

        # if params[:user_id]
        #     @events = Event.where(host_id: params[:user_id])
        # # elsif params[:category]
        # #     @events = Event.where(category)
        # else
        #     @events = Event.all 
        # end 
        @events = Event.all
        render :index
    end


    def update 
        @event = Event.find(params[:id])
        @host = @event.host
        if @event.update(event_params)
            redirect_to api_events_url
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
        params.require(:event).permit(:title, :description, :location, :host_id, :category, :start_date, :end_date, :start_time, :end_time, :photo)
    end
end
