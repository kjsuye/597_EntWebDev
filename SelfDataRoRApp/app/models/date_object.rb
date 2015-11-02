class DateObject < ActiveRecord::Base
  belongs_to :user
  has_many :records
  validates :day, presence: true, uniqueness: true
end
