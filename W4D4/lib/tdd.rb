def my_uniq(arr)
    raise "arg is not an array" unless arr.is_a?(Array)
    res = []
    arr.each { |ele| res << ele if !res.include?(ele) }
    res
end