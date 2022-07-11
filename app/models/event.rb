class Event < ApplicationRecord
    validates :host_id, :title, :description, :location, :category, :start_date, :end_date, :start_time, :end_time, presence: true 


    belongs_to :host,
        class_name: :User,
        foreign_key: :host_id

    
    
end
