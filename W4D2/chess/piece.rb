require_relative 'board'

module Slideable # pieces whos movements are only limited by available spaces
    # current position for a diagonal
    # [+1 , +1 ], [-1, +1]  [-1 -1] [+1 -1]
    
end

module Stepable #pieces that can move a fixed num of positions
    #k # [-1 0 1, -1 0 1]
    
end

class Piece
    def initialize(type, start_pos = nil, board)
        @board = board
        @type = type
        @current_pos = starting_pos
    end
end