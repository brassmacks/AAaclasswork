# == Schema Information
#
# Table name: nobels
#
#  yr          :integer
#  subject     :string
#  winner      :string

require_relative './sqlzoo.rb'

def physics_no_chemistry
  # In which years was the Physics prize awarded, but no Chemistry prize?
  execute(<<-SQL)
  SELECT DISTINCT nobels.yr, no_chemistry.yr
  FROM nobels
  INNER JOIN nobels AS no_physics
    ON nobels.yr = no_chemistry.yr
  WHERE nobels.subject = 'Physics' 
    AND no_chemistry.subject != 'Chemistry'
  SQL
end
