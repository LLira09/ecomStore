class Api::V1::OrdersController < ApplicationController
  def index
    orders = Order.all
    render json: orders, include: { products: { only: [:name, :brand, :price] } }
  end

  def show
    order = Order.find(params[:id])
    render json: order, only: [:user_id, :shipped, :paid], include: { products: { only: [:name, :brand, :price] } }
  end

  def create
    newOrder = Order.create!(user_id: params[:user_id], paid: false, shipped: false)
    render json: newOrder
  end
end
