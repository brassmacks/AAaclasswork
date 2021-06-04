# list = [ 0, 3, 5, 4, 5, 1, 1, 2 ]

def my_min1(list)
    min = list[0]
    list.each_with_index do |ele1,idx1|
        list.each_with_index do |ele2,idx2|
            if idx2 > idx1 && ele2 < min
                min = ele2
            end
        end
    end  
    min
end



def my_min_2(list)
    min = list[0]
    list.each_with_index do |ele, idx|
        # n   
        if idx < list.length && ele < min
            
            min = ele
        end
    end
    min
end

# p my_min1(list)

list = [5, 3, -7]

# [2, 3, -6, 7, -6, 7]
# [-5, -1, -3]

# def largest_continuous_sub_sum(list)
#     arr = []

#     (0...list.length-2).each do |idx1|
#         (idx1+1...list.length-1).each do |idx2|
#            arr << [list[idx1] + list[idx2],list[idx2+1]]
#         end
#     end
#     p arr
#     arr.map {|sub| sub.sum}.max
# end

# p largest_continuous_sub_sum(list)

# def largest_continuous_sub_sum(list)
#     count = 1
#     cur_max = list[0] + list[1] + list[2]
#     cur_sum = 0
#     limit = list.length-1

#     while count < limit
#         cur_sum = list[count-1] + list[count] + list[count+1]
#         cur_max = cur_sum if cur_max < cur_sum
#         count += 1
#     end

#     cur_max
# end
list = [2, 3, -6, 7, -6, 7]

def largest_continuous_sub_sum(list)
    sums = []
    sum = list[0] #-1
    counter = 1 
    while counter < list.length
        if (sum + list[counter]) > sum && !(list[counter] > sum + list[counter])
            sum += list[counter]
        else
            sums << sum
            sum = list[counter]
        end

        counter+=1
    end
    sums << sum 
    sums.max

end




p largest_continuous_sub_sum(list)