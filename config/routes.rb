Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create]
    resources :events, only: [:show, :new, :create, :index, :edit, :update, :delete]
    resource :session, only: [:create, :destroy]
  end


  root "static_pages#root"
end
