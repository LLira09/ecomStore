class Api::V1::OrdereditemsController < ApplicationController
  skip_before_action :authorized, only: [:create, :show, :index, :update]

  def index
    oi = Ordereditem.all
    render json: oi
  end

  def create
    oi = Ordereditem.create!(order_id: params[:order_id], product_id: params[:product_id])
  end
end
