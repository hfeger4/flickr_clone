class CreatePhotos < ActiveRecord::Migration[5.0]
  def change
    create_table :photos do |t|
      t.string :title
      t.text :body
      t.string :image_url, null: false
      t.integer :user_id, null: false
      t.integer :album_id

      t.timestamps
    end
    add_index :photos, :user_id
    add_index :photos, :album_id
  end
end
