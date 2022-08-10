class User < ApplicationRecord
    validates :email, :password_digest, :session_token, presence: true 
    validates :fname, :lname, presence: true 
    validates :email, uniqueness: true 
    validates :password, length: { minimum: 6 }, allow_nil: true 

    attr_reader :password 

    after_initialize :ensure_session_token

    has_many :events,
        class_name: :Event,
        foreign_key: :host_id 

    has_many :registrations, 
        dependent: :destroy 

    has_many :likes,
        dependent: :destroy 

    has_many :attending_events,
        through: :registrations,
        source: :event 

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user 
            if user.is_password?(password)
                return user
            end
        end

        return nil 
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token 
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end


end
