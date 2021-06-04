class Towers
    require "byebug"
    
    attr_accessor :arr, :game_over
    def initialize
        @arr = [
            [4,3,2,1],
            [],
            []
        ]
        @game_over = false
    end



    def get_move
        until game_over
            self.print
            puts "Choose a start and ending tower ex: 1 2 "
            input = gets.chomp.split(" ")
            res = [input[0].to_i, input[1].to_i]
            make_move(res)
        end
    end
    
    def make_move(pos)
        
        if arr[pos[0]].empty? 
            raise "no disc on that tower" 
            return
        end

        disc = arr[pos[0]].last
        
        if arr[pos[1]].last != nil && arr[pos[1]].last < disc 
            raise "current disk is too big for this tower" 
        else
            arr[pos[0]].pop 
            arr[pos[1]] << disc
        end

    end

    def print
        arr.each do |sub|
            p sub
        end

    end
    # def game_over 
        # @game_over = true
    # end

end

# game = Towers.new
# game.get_move
