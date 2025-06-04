class Job < ApplicationRecord
  has_many :job_matches, dependent: :destroy
  has_many :resumes, through: :job_matches

  validates :title, :company_name, :description, presence: true
end
