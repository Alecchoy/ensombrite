Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create] do 
      resources :events, only: [:index, :update]
      resources :registrations, only: [:index]
    end
    resources :events, only: [:show, :create, :index, :destroy] do 
      resources :registrations, only: [:create]
    end
    resources :registrations, only: [:destroy]
    resource :session, only: [:create, :destroy]
  end


  root "static_pages#root"
end
