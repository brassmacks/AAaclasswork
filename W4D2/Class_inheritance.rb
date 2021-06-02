class Employee 
    attr_accessor :name, :title, :salary, :boss
    def initialize(name)
        @name = name
        @title = nil
        @salary = nil
        @boss = nil
    end
    def bonus(multiplier)
        salary * multiplier
    end

end

class Manager < Employee
    attr_reader :title 
    attr_accessor :employees
    def initialize(name)
        @name = name
        @employees = []
   end
   def bonus(multiplier)
    total = 0
    employees.each { |employee| total += employee.salary }
    total * multiplier
   end
end

