@user.events.each do |event|
    json.set! event.id do
        json.extract! event, :id, :host_id, :title, :description, :location, :category_id, :start_date, :end_date, :start_time, :end_time 
    end
end