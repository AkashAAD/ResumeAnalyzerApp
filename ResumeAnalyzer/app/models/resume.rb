class Resume < ApplicationRecord
  belongs_to :user
  has_many :skills, dependent: :destroy
  has_many :job_matches, dependent: :destroy
  has_many :jobs, through: :job_matches
  has_one :ai_feedback, dependent: :destroy

  has_one_attached :file

  validates :file, presence: true
end
