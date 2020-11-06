class Api::V1::OrdersController < ApplicationController
  def index
    orders = Order.all
    render json: orders, only: [:user_id, :pproduct_ids, :shipped, :paid]
  end

  def show
    order = Order.find(params[:id])
    render json: order, only: [:user_id, :product_ids, :shipped, :paid]
  end
end
