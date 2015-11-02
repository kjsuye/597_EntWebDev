class Task < ActiveRecord::Base
  belongs_to :user
  belongs_to :record
  validates :name, presence: true, length: { maximum: 50 }
  validates :category, presence: true, length: { maximum: 50 }
end
