
exports.up = function(knex, Promise) {
  return knex.schema.createTable('favorites', (table) => {
    table.increments();
    table.integer('user_id').references('users.id').notNullable().onDelete('CASCADE').index();
    table.integer('book_id').references('books.id').notNullable().onDelete('CASCADE').index();
    table.timestamps(true, true);
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('favorites');
};
