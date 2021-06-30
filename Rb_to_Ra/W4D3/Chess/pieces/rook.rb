require_relative 'piece.rb'
require_relative 'slideable.rb'

class Rook < Piece
    attr_reader :symbol, :color, :current_pos
    include Slideable
    def initialize(start_pos=nil, board, color)
        @current_pos = start_pos
        @board = board
        @color = color
        @symbol = :R 
    end

    
    private 
    
    def move_dirs
        horizontal_dirs
    end
    
end