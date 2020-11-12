class Api::V1::ReviewsController < ApplicationController
  skip_before_action :authorized, only: [:create, :show, :index, :update]

  def index
    reviews = Review.all
    render json: reviews
  end

  def show
    review = Review.find(params[:id])
    render json: review, include: { user: { only: [:username] } }
  end

  def create
    review = Review.create(user_id: params[:user_id], rating: params[:rating], product_id: params[:product_id])
    render json: review
  end
end
