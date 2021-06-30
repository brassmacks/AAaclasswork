class CreateCat < ActiveRecord::Migration[5.2]
  def change
    create_table :cats do |t|
      t.string :name, null: false
      t.date :birth_date, null: false
      t.string :color, null: false
      t.string :sex, null: false, length: { is: 1 }, inclusion: {in: ["M","F"]}
      t.text :description
      t.timestamps

    end
  end
end
