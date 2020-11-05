class Api::V1::ProductsController < ApplicationController
    
    def index 
        products = Product.all 
        render json: products, only: [:cateogry, :name, :image_url, :brand, :description, :price, :num_in_stock]
    end

    def show
        product Product.find(params[:id])
        render json: products, only: [:cateogry, :name, :image_url, :brand, :description, :price, :num_in_stock]
    end

end
