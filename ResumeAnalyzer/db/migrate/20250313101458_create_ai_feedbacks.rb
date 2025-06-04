class CreateAiFeedbacks < ActiveRecord::Migration[8.0]
  def change
    create_table :ai_feedbacks, id: :uuid do |t|
      t.references :resume, null: false, foreign_key: true, type: :uuid
      t.text :feedback, null: false

      t.timestamps
    end
  end
end
