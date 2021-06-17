class User < ApplicationRecord
    validates :username, presence: true
    
    has_many :artworks,
        foreign_key: :artist_id,
        class_name: :Artwork
    
    has_many :shares,
        foreign_key: :viewer_id,
        class_name: :ArtworkShares
    
    has_many :shared_artworks,
        through: :artworks,
        source: :shares

end 