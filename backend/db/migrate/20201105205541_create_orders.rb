class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.integer :user_id
      t.boolean :shipped, default: false
      t.boolean :paid, default: false

      t.timestamps
    end
  end
end
