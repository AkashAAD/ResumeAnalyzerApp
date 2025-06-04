class JobMatch < ApplicationRecord
  belongs_to :job
  belongs_to :resume

  validates :match_score, numericality: { only_integer: true, in: 1..10 }
end
