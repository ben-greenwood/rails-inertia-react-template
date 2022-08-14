Rails.application.routes.draw do
  devise_for :accounts, controllers: {
    sessions: 'accounts/sessions',
    registrations: 'accounts/registrations',
  }

  devise_scope :account do
    authenticated :account do
      root to: 'home#index', as: :authenticated_account_root
    end
  end

  unauthenticated do
    root 'accounts/sessions#new', as: :root
  end
end
