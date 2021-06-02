require_relative 'piece'

class Board
    attr_reader :grid
    def initialize
        @grid = Array.new(8) { Array.new(8,nil) }
        @grid[0..1].map! do |row|
            row.map! { |ele| ele = Piece.new(nil, [row, ele], self, :black) }
        end
        @grid[6..7].map! do |row|
            row.map! { |ele| ele = Piece.new(nil, [row, ele], sel, :white) }
        end
    end
    def [](pos)
        row, column = pos
        @grid[row][column]
    end

    def []=(pos, value)
        row, column = pos
        @grid[row][column] = value
    end

    def move_piece(start_pos, end_pos)
        # raise err end_pos contains same color 
        raise "error" unless self[start_pos].is_a?(Piece) && self[end_pos] == nil
        self[start_pos], self[end_pos] = self[end_pos], self[start_pos]
    end

    
end

