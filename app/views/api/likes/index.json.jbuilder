@likes.each do |like|
    event = like.event
    json.set! like.id do
        json.extract! event, :start_date, :start_time, :photo
        json.extract! like, :id, :user_id, :event_id
        json.event_title event.title
        json.event_description event.description
        json.event_start_date event.start_date
        json.event_start_time event.start_time
        json.event_photo event.photo
    end
end