class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false, unique: true, index: true
      t.string :session_token, null: false, index: true, unique: true
      t.string :password_digest, null: false
    end
  end
end
