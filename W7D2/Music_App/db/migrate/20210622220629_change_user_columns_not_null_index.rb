class ChangeUserColumnsNotNullIndex < ActiveRecord::Migration[5.2]
  def change
    add_index :users, [:email, :session_token], unique: true
  end
end
