class Skill < ApplicationRecord
  belongs_to :resume

  validates :skill_name, presence: true
  validates :proficiency, numericality: { only_integer: true, in: 1..10 }
end
