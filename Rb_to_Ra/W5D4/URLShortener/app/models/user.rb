class User < ApplicationRecord
    validates :email, presence: true
    validates :index, uniqueness: true
end