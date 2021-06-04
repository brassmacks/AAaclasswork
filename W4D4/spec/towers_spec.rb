require 'rspec'
require 'towers_of_hanoi.rb'

# first test check initialize creates new instance of tower
describe "initialize" do 
    let(:towers) { Towers.new }
    it "initialize creates new instance of tower" do 
        expect(towers.arr).to be([
            [4,3,2,1],
            [],
            []
        ])
        expect(towers.game_over).to be(false)
    end
end

it "instantiates a piece correctly" do
    # board = Board.new
    # piece = Piece.new(:white, [0,0], board)
    expect(piece.color).to be(:black)
    expect(piece.pos).to eq([0,0])
end
# second test checks initialize creates an arr of arrays

# third test checks initialize checks game_over = false



# first test checks if get_move prints arr

# 2nd test checks if get_move receives input




# first check checks if make_move to not throw error if passed a valid array

# 2nd test checks if make_move won't move disk to mismatch towers

# 3rd test checks if make_move raises error if there's no disk on starting tower

# 4th test when given valid array, moves disk to correct tower


# 1st test checks if print works correctly


