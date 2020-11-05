class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :category
      t.string :name
      t.string :image_url
      t.string :brand
      t.string :description
      t.integer :price
      t.integer :num_in_stock

      t.timestamps
    end
  end
end
