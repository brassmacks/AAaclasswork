class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, index: true, null: false, unique: true
      t.string :password_digest
      t.string :session_token, index: true, unique: true 

      t.timestamps
    end
  end
end
