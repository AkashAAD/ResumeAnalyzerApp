class CreateJobMatches < ActiveRecord::Migration[8.0]
  def change
    create_table :job_matches, id: :uuid do |t|
      t.references :resume, null: false, foreign_key: true, type: :uuid
      t.references :job, null: false, foreign_key: true, type: :uuid
      t.integer :match_score, default: 0

      t.timestamps
    end
  end
end
