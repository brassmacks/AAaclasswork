
require_relative 'Qclass.rb'
require_relative 'Question.rb'
require_relative 'User.rb'

class Reply

    def self.find_by_author_id(author_id)
        data = QuestionsDatabase.instance.execute("SELECT * FROM replies WHERE replID = #{replID}")
        data.map { |datum| Reply.new(datum) }
    end

    def self.find_by_user_id(user_id)
        data = QuestionsDatabase.instance.execute("SELECT * FROM replies WHERE userID = #{user_id}")
        data.map { |datum| Reply.new(datum) }
    end

    def self.find_by_questID(questID)
        data = QuestionsDatabase.instance.execute("SELECT * FROM replies WHERE questID = #{questID}")
        data.map { |datum| Reply.new(datum) }
    end

    def self.find_by_replID(replID)
        data = QuestionsDatabase.instance.execute("SELECT * FROM replies WHERE replID = #{replID}")
        data.map { |datum| Reply.new(datum) }
    end
    
    def initialize(options)
        @questID = options['questID']
        @userID = options['userID']
        @parentID = options['parentID']
        @body = options['body']
        @replID = options['replID']
        # defines contents based on schema
    end

    def author
        User.find_by_id(@user_id).full_name
    end

    def question
        Question.find_by_questID(@questID)[0]
    end

    def parent_reply
        Reply.find_by_replID(@parentID)[0]
    end

    def children_reply
        QuestionsDatabase.instance.execute("SELECT replID, body FROM replies WHERE parentID = #{@replID}")

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