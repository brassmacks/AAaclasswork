
require_relative 'Qclass.rb'
require_relative 'user.rb'
require_relative 'Reply.rb'

class Question

    def self.find_by_author_id(author_id)
        data = QuestionsDatabase.instance.execute("SELECT * FROM questions WHERE userID = #{author_id}") 
        data.map { |datum| Question.new(datum) }
    end

    def self.find_by_questID(questID)
        data = QuestionsDatabase.instance.execute("SELECT * FROM questions WHERE questID = #{questID}") 
        data.map { |datum| Question.new(datum) }
    end
    
    def initialize(options)
        @questID = options['questID']
        @title = options['title']
        @body = options['body']
        @userID = options['userID']
    # defines contents based on schema
    end

    def author
        User.find_by_id(@userID)[0].full_name
    end
    def replies
        Reply.find_by_questID(@questID)
    end
    # def create 
    #     raise "#{self} already in database" if @questID
    # # here doc
    # # changes existing value
    # end
    # def update
    # # here doc 
    # # changes existing value
    # end

end