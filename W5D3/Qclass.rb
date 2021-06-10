require "sqlite3"
require "singleton"

#require_relative 'import_db.sql'

class QuestionsDatabase < SQLite3::Database
    include Singleton
    def initialize
        super('questions.db')
        self.type_translation = true
        # returns the same data type
        self.results_as_hash = true
        # returns value as a hash
         
    end

end






