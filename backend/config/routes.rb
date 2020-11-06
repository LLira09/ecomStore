Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :products
      get("/products", to: "products#index")
      get("products/:id", to: "products#show")

      get("/orders", to: "orders#index")
      get("orders/:id", to: "orders#show")

      # get("/users", to: "users#index")
      # get("users/:id", to: "users#show")
      resources :users
    end
  end
end
