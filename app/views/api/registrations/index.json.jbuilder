@registrations.each do |registration|
    event = registration.event 
    json.set! registration.id do 
        json.extract! registration, :id, :user_id, :event_id, :event_start_date, :event_start_time, :event_photo
        json.event_title event.title
        json.event_description event.description
        json.event_start_date event.start_date
        json.event_start_time event.start_time
        json.event_photo event.photo
    end

end

