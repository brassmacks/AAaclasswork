require 'rspec'
require 'tdd.rb'

describe "my_uniq" do
    it "returns false if doesn't remove duplicates" do
        arr = [1, 2, 3, 2, 3]
        expect(my_uniq(arr)).to eq(arr.uniq)
    end

    it "raises error if argument is not an array" do 
        expect{my_uniq("")}.to raise_error("arg is not an array")
    
    end

end

describe "two_sum" do
    it "returns array of pairs of indices that sum to 0" do
        expect([-1, 0 , 2 , -2, 1].two_sum).to eq([[0, 4], [2, 3]])
    end

    it "returns empty array if no elements pair" do
        expect([5, 4 , 3 , 2, 1].two_sum).to eq([])
    end

end

describe "my_transpose" do 
    #let(:board) { double(:board, :valid_pos? => true) }
    let(:rows) { [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
      ] } 
    let(:cols) { [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ] }
    let(:non_square) { [
        [0, 1],
        [3, 4, 5, 0],
        [6, 7, 8]
      ] } 
    it "returns the result of switching indices of a 2D array" do
        expect(rows.my_transpose).to eq(cols)
    end

    it "raise error if not a square 2D array" do
        expect{non_square.my_transpose}.to raise_error("rows and columns aren't the same length") 
    end

end

describe "stock_picker" do
    let(:arr) { [6,5,15,2,9,4] }
    let(:str) { ["ham sandwich"]}
    it "returns most profitable buy and sell days" do
        expect(arr.stock_picker).to eq([1, 2])
    end
    it "raises error if arg is not an array" do
        expect{str.stock_picker}.to raise_error("arg is not an array") 
    end
end