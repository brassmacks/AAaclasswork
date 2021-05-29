
require_relative '00_tree_node.rb'

class KnightPathFinder

    def KnightPathFinder::valid_moves(pos)
      # 
    end

    def initialize(position)
      @position = position
      @root_node = PolyTreeNode.new(@position)
      @move_tree = build_move_tree(@root_node)
      @considered_positions = position
    end
    def new_move_postion(position)
      poss_moves = KnightPathFinder::valid_moves(position)
      poss_moves.delete(considered_positions)
    end
    def build_move_tree(starting_pos)

    end

    
   

end