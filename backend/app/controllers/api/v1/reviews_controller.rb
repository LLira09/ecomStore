class Api::V1::ReviewsController < ApplicationController
  def index
    reviews = Review.all
    render json: reviews
  end

  def show
    review = Review.find(params[:id])
    render json: review, include: { user: { only: [:username] } }
  end
end
