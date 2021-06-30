require "byebug"
class PolyTreeNode
    attr_reader :parent, :value, :children


    def initialize(value)
        @children = []
        @value = value
        @parent = nil
    end 

    def parent=(new_par)
        if @parent != nil # if @parent is a parent
            # ensure there are no extra @parent assignments 
            @parent.children.delete(self) 
            # @parent.children.dnodete(self)   
            # remove self instance from old parent l
        end

        @parent = new_par
        # reassign @parent to par
      if new_par != nil
        # Check that par is not nil 
        new_par.children << self
      end
    end

    def add_child(child_node)
        child_node.parent=(self)
    end

    def remove_child(child_node)
        raise "Not a child" if !self.children.include?(child_node)
        child_node.parent=(nil)
    end

    def inspect
        @value.inspect
    end

    def dfs(target)
        return self if value == target
        
        children.each do |child|
            # return child.value if child.value == target
            # child.dfs(target)
            cur_node = child.dfs(target)
            return cur_node unless cur_node == nil
        end
        nil
    end

    def bfs(target)
      queue = []
     
      queue.push(self)
      until queue.empty?
        # debugger
        first_node = queue.shift
        return first_node if first_node.value == target
        first_node.children.each do |child|
            queue.push(child)
        end
      end
      nil
    end
    
    
    

end