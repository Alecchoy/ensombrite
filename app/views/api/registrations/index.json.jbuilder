@registrations.each do |registration|
    event = registration.event 
    json.set! registration.id do 
        json.extract! registration, :id, :user_id, :event_id
        json.event_title event.title
        json.event_description event.description
    end

end

