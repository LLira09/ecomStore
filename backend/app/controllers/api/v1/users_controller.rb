class Api::V1::UsersController < ApplicationController
  def index
    users = User.all
    render json: users, only: [:id, :username, :password, :address, :email], include: { orders: { only: [:paid, :shipped] } }
  end

  def show
    user = User.find(params[:id])
    render json: user, only: [:id, :username, :password, :address, :email]
  end

  def create
    user = User.create(username: params[:username], password: params[:password], address: params[:address], email: params[:email])
    render json: user, only: [:id, :username, :password, :address, :email]
  end
end
