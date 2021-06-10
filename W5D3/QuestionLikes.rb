gem "sqlite3"
gem "singleton"

require 'Qclass.rb'
class QuestionLikes

    def self.find_likes(questID)
        data = QuestionsDatabase.instance.execute("SELECT * FROM question_likes WHERE questID = #{questID}")
    end
    
    def initialize(options)
        @userID = options['userID']
        @questID = options['questID']
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