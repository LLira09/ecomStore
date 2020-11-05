class Product < ApplicationRecord
  has_many :orders
  has_many :reviews
  has_many :users, through: :orders
end
