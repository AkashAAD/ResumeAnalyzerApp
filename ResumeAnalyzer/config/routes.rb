Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check
  root "home#index"

  namespace :api do
    namespace :v1 do
      post 'user/signup', to: 'users#create'
      post 'user/login', to: 'auth#login'
      get 'user/profile', to: 'users#profile'

      resources :resumes, only: [:index, :show, :destroy] do
        collection do
          post :upload
        end
      end

      resources :jobs, only: [:create, :update, :show, :index, :destroy]
      resources :job_matches, only: [] do
        collection do
          get 'resume/:id/match_jobs', to: 'match_jobs'
        end
      end

      resource :ai_feedbacks, only: [] do
        post 'resume/ai_feedback', to: 'show'
      end
    end
  end
end
