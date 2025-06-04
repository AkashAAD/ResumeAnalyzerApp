class User < ApplicationRecord
  has_secure_password

  has_many :resumes, dependent: :destroy

  validates :name, :username, presence: true
  validates :email, presence: true, uniqueness: true
end
