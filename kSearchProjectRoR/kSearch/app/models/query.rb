class Query < ActiveRecord::Base
  belongs_to :student_user
  validates :queryString, presence: true
end
