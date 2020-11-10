class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :address, :email
  has_many :orders, only: [:paid, :shipped], include_nested_associations: true
end
