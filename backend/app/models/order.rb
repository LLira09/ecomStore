class Order < ApplicationRecord
  belongs_to :user
  has_many :ordereditems
  has_many :products, through: :ordereditems
end
