
require_relative 'Qclass.rb'
require_relative 'Question.rb'
require_relative 'Reply.rb'
class User

    def self.find_by_id(id)
        data = QuestionsDatabase.instance.execute("SELECT * FROM users WHERE id = #{id}")
        data.map { |datum| User.new(datum) }
    end
    
    def self.find_by_name(first, last)
        data = QuestionsDatabase.instance.execute("SELECT * FROM users WHERE fname = '#{first.to_s}' AND lname = '#{last}' ")
        data.map { |datum| User.new(datum) }
    end
    
    def initialize(options)
        @id = options["id"]
        @first = options["fname"]
        @last = options["lname"]
    # defines contents based on schema
    end

    def full_name
        "#{@first} #{@last}"
    end
    
    def authored_questions
        Question.find_by_author_id(@id)
    end

    def authored_replies
        Reply.find_by_user_id(@id)
    end

    # def create 
    # # here doc
    # # changes existing value
    # end
    # def update
    # # here doc 
    # # changes existing value
    # end

end
