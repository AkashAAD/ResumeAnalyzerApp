class AiFeedback < ApplicationRecord
  belongs_to :resume

  validates :feedback, presence: true
end
