module Slideable # pieces whos movements are only limited by available spaces
    # QUESTION LIST 
    HORIZONTAL_DIRS = [ [1,0], [-1,0], [0,1], [0,-1] ]
    DIAGONAL_DIRS = [ [+1, +1], [+1, -1], [-1, +1], [-1,-1] ]
    # current position for a diagonal
    
    # define move values based off of slide pattern 
    # piece specific
    def horizontal_dirs
        HORIZONTAL_DIRS
    end

    def diagonal_dirs
        DIAGONAL_DIRS
    end

    def moves
        dirs = move_dirs
        pos_moves = []
        dirs.each do |dir|
            moves = grow_unblocked_moves_in_dir(dir[0], dir[1])
            pos_moves << moves
        end
        pos_moves
    end

    private

    def move_dirs
        raise "Not yet defined in #{self}"
    end

    def grow_unblocked_moves_in_dir(dx,dy)
        pos = [ (current_pos[0].dup + dx), (current_pos[1].dup + dy) ]
        moves = []
        while @board.valid_pos?(pos)
            moves << pos
            pos[0], pos[1] = (pos[0] + dx), (pos[1] + dy)
        end
        if board[pos].is_a?(Piece) && board[pos].color != self.color
            moves << pos 
        end
        moves
    end

end