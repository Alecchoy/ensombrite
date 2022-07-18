Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create] do 
      resources :events, only: [:create]
      get :events, on: :member
    end
    resources :events, only: [:show, :create, :index, :update, :destroy]
    resource :session, only: [:create, :destroy]
  end


  root "static_pages#root"
end
