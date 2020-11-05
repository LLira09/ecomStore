class Product < ApplicationRecord
  has_many :orders
  has_many :reviews
  has many :users, through: :orders
end
