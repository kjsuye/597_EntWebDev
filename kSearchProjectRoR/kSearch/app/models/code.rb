class Code < ActiveRecord::Base
  before_save :default_values
  def default_values
    self.timesUsed ||= 0
  end
end
