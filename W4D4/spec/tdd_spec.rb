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

#check if method removes duplicates