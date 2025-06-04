class CreateJobs < ActiveRecord::Migration[8.0]
  def change
    create_table :jobs, id: :uuid do |t|
      t.string :title, null: false
      t.string :company_name, null: false
      t.string :location
      t.text :description
      t.string :job_type
      t.integer :experience_required, default: 0

      t.timestamps
    end
  end
end
