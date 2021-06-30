class CreateSubs < ActiveRecord::Migration[5.2]
  def change
    create_table :subs do |t|
      t.string :title, null: false, unique: true, index: true
      t.string :description, null: false
      t.integer :mod_id, null:false 
      t.timestamps
    end
    # add_index :subs, [:title, :mod_id], unique: true
  end
end
