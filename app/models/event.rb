class Event < ApplicationRecord
    validates :title, :description, :location, :start_date, :end_date, :category, :start_time, :end_time, presence: true 


    belongs_to :host,
        class_name: :User,
        foreign_key: :host_id

    has_one_attached :photo

    has_many :registrations, 
        dependent: :destroy
    
    has_many :attendants, 
        through: :registrations,
        source: :user

    
    
end
