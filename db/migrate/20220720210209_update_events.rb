class UpdateEvents < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :category_id
    add_column :events, :category, :string, null: false
    add_index :events, :category
  end
end
