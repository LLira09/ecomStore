class Product < ApplicationRecord
  has_many :ordereditems
  has_many :products, through: :ordereditems
  has_many :reviews
  has_many :users, through: :orders
end
