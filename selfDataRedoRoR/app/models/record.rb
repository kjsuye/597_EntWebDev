class Record < ActiveRecord::Base
  belongs_to :date_object
  validates_inclusion_of :hours, :in => 0..24, presence: true
  validates_inclusion_of :minutes, :in => 0..60, presence: true
  validates :task_id, presence: true
end
