gem "sqlite3"
gem "singleton"

require_relative 'Qclass.rb'

class QuestionFollow
    
    def self.find_by_quest_or_userID(id)
        data = QuestionsDatabase.instance.execute("SELECT * FROM question_follows WHERE questID = #{id} OR userID = #{id}")
        data.map { |datum| QuestionFollow.new(datum) }
    end
    
    def self.followers_for_question_id(question_id)
        QuestionsDatabase.instance.execute(<<-SQL
            SELECT *  FROM question_follows
            INNER JOIN users 
            ON users.id = question_follows.userID; 
            
            SQL
    end

    def initialize(options)
        @questID = options['questID']
        @userID = options['userID']
    # defines contents based on schema
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