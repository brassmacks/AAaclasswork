def my_uniq(arr)
    raise "arg is not an array" unless arr.is_a?(Array)
    res = []
    arr.each { |ele| res << ele if !res.include?(ele) }
    res
end

class Array

    def two_sum
        return [] if self.length <= 1
        pairs = []
        (0...self.length).each do |ind1|
            (ind1+1...self.length).each do |ind2|
                pairs << [ind1, ind2] if self[ind1] + self[ind2] == 0
            end
        end
        pairs
    end

    def my_transpose
        unless self.all? { |arr| arr.length == self.length}
            raise "rows and columns aren't the same length"
        end

        transposed = []
        (0...self.length).each do |ind1|
            temp = []
            (0...self.length).each do |ind2|
                temp << self[ind2][ind1]
            end
            transposed << temp
        end
        transposed
    end

    def stock_picker
        # [6,5,15,2,9,4]
    end
    
end