require_relative 'board'

module Slideable # pieces whos movements are only limited by available spaces
    # current position for a diagonal
    # [+1 , +1 ], [-1, +1]  [-1 -1] [+1 -1]
    # define move values based off of slide pattern 
    # piece specific
end

module Stepable #pieces that can move a fixed num of positions
    #k # [-1 0 1, -1 0 1]
    # Define move values based of of step pattern
    # piece specific
end



class Piece
    def initialize(type, start_pos = nil, board, color)
        @board = board
        @type = type
        @current_pos = starting_pos
        @color = nil
    end
    def move_dirs
        # find directions of possible moves based on piece type
    end
    def moves(directions)
        # compare move_dirs to current board layout
        # move piece or return not possible 
    end

end

class NullPiece
    @color = nil
    @symbol = nil
    # singleton method 

end

class Pawn
    
end