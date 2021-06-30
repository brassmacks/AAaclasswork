class AddUsernameColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :username, :string, presence:true, uniqueness:true, index:true
  end
end
