json.extract! @event, :id, :host_id, :title, :description, :location, :category, :start_date, :end_date, :start_time, :end_time, :attendants, :registrations 
json.extract! @host,  :fname, :lname

json.photo url_for(@event.photo)


