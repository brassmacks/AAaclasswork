require 'action_view'
class Cat < ApplicationRecord
    include ActionView::Helpers::DateHelper
    COLORS = ["red", "brown", "yellow", "orange", "spotty", "persian", "blonde"]

end
