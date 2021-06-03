require_relative './pieces/piece.rb'
require_relative './pieces/rook.rb'
    # require classes 
    # back row constant 
    # (black pos + val)
    # brow_pieces each#with_index# do |class, i| [Rook, Knight Bishop... ]

class Board
    attr_reader :grid
    def initialize
        @grid = Array.new(8) { Array.new(8,nil) }
    end

    def [](pos)
        row, column = pos
        @grid[row][column]
    end
    
    def inspect
        @value.inspect
    end

    def []=(pos, value)
        row, column = pos
        @grid[row][column] = value
    end
    
    def add_piece(piece, pos)
        @grid[pos] = piece
    end

    def populate
        @grid[0] = Array.new(8) { Rook.new(nil, nil, "black") }
        (1...@grid.length).each { |ind| @grid[ind] = Array.new(8, NullPiece.instance) }
        print @grid
    end

    def valid_pos?(pos)
        @grid[pos].empty?
    end
    
    # def pop board
    # pawn row
    # back row 
    
    def move_piece(start_pos, end_pos)
        # raise err end_pos contains same color 

        #**** revisttt
        raise "error" unless self[start_pos].is_a?(Piece) && self[end_pos] == nil
        self[start_pos], self[end_pos] = self[end_pos], self[start_pos]
    end

    
end

