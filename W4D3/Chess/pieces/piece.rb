# require_relative '../board.rb'
require "singleton"

class Piece


    def initialize(start_pos = nil, board, color)
        @board = board
        @current_pos = starting_pos
        @color = color
    end
    
    def to_s
        @symbol.to_s
    end

    def [](pos)
        row, col = pos
        @board.grid[row][col]
    end

    # def []=(pos, val)
    #     row, col = pos
    #     @board.grid[row][col] = val
    # end
    
    def valid_moves?(pos)
        
    end


    def empty?
        self == NullPiece         
    end

    private
    def move_into_check(end_pos)
        # if end_pos threatens king
        # king.is_check == true
    end
end

class NullPiece < Piece
    include Singleton
    attr_reader :color, :symbol
    def initialize
        @color = nil
        @symbol = nil
    end 
    
    def empty? 
        true
    end

end

