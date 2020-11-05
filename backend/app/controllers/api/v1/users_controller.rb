class Api::V1::UsersController < ApplicationController
  def index
    users = User.all
    render json: users, only: [:id, :username, :password, :address, :email]
  end

  def show
    user = User.find(params[:id])
    render json: user, only: [:id, :username, :password, :address, :email]
  end
end
