class CreateRecords < ActiveRecord::Migration
  def change
    create_table :records do |t|
      t.integer :hours
      t.integer :minutes
      t.integer :task_id
      t.references :date_object, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
