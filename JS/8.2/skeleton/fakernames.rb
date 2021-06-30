require 'faker'
names = []
first_names = []
100.times {names << Faker::Name.name}
100.times {first_names << Faker::Name.first_name.downcase}

p first_names

heights = []

100.times do
    inch = Faker::Number.between(from:0, to: 11)
    heights << [ Faker::Number.between(from:8, to: 13).to_s + "ft " + inch.to_s ]
end

tricks = []

100.times do
    trick_list = []
    10.times { trick_list << Faker::Verb.ing_form }
    tricks << trick_list
end

elephants = []

# names.each_with_index { |name, i| elephants << [name, heights[i], tricks[i]] }

# p elephants