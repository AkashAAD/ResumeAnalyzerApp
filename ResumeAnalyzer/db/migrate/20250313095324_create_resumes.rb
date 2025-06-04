class CreateResumes < ActiveRecord::Migration[8.0]
  def change
    create_table :resumes, id: :uuid do |t|
      t.references :user, null: false, foreign_key: true, type: :uuid
      t.text :extracted_text
      t.integer :experience, default: 0
      t.integer :score, default: 0

      t.timestamps
    end
  end
end
