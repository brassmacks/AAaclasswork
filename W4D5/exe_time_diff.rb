list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]

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

p my_min1(list)