class Api::V1::ProductsController < ApplicationController
  def index
    products = Product.all
    render json: products, only: [:id, :cateogry, :name, :image_url, :brand, :description, :price, :num_in_stock]
  end

  def show
    product = Product.find(params[:id])
    render json: product, only: [:id, :cateogry, :name, :image_url, :brand, :description, :price, :num_in_stock]
  end

  def create
    product = Product.create(name: params[:name], category: params[:cateogry], price: params[:price], description: params[:description], num_in_stock: params[:num_in_stock], image_url: params[:image_url], brand: params[:brand])
    render json: product, only: [:id, :cateogry, :name, :image_url, :brand, :description, :price, :num_in_stock]
  end
end
