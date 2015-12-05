class StudentUser < ActiveRecord::Base
  validates :logInCode, presence: true
  has_many :queries
end
