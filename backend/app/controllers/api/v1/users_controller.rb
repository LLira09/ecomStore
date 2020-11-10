class Api::V1::UsersController < ApplicationController
  skip_before_action :authorized, only: [:create, :show, :index]
  def index
    users = User.all
    render json: users, only: [:id, :username, :password, :address, :email], include: { orders: { only: [:paid, :shipped] } }
  end

  def show
    user = User.find(params[:id])
    render json: user, only: [:id, :username, :password, :address, :email]
  end

  def create
    @user = User.create(username: params[:username], password: params[:password], address: params[:address], email: params[:email])
    if @user.valid?
      @token = encode_token(user_id: @user.id)
      render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
    else
      render json: { error: 'failed to create user' }, status: :not_acceptable
    # render json: user, only: [:id, :username, :password, :address, :email]
    end
  end

  def account
    render json: { user: UserSerializer.new(current_user) }, status: :accepted
  end

  
end
