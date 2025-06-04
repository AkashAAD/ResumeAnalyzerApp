class CreateSkills < ActiveRecord::Migration[8.0]
  def change
    create_table :skills, id: :uuid do |t|
      t.references :resume, null: false, foreign_key: true, type: :uuid
      t.string :skill_name, null: false
      t.integer :proficiency, default: 3

      t.timestamps
    end
  end
end
