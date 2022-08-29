@registrations.each do |registration|
    event = registration.event 
    json.set! registration.id do 
        json.extract! event, :start_date, :start_time
        json.extract! registration, :id, :user_id, :event_id
        json.event_title event.title
        json.event_description event.description
        json.event_start_date event.start_date
        json.event_start_time event.start_time
        if event.photo.attached?
            json.event_photo url_for(event.photo)
        end
    end

end

