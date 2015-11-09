class CreateDateObjects < ActiveRecord::Migration
  def change
    create_table :date_objects do |t|
      t.date :day
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
