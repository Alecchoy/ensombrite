class Event < ApplicationRecord
    validates :title, :description, :location, :start_date, :end_date, :start_time, :end_time, presence: true 


    belongs_to :host,
        class_name: :User,
        foreign_key: :host_id

    belongs_to :category 

    
    
end
