
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('characters', function (table) {
    table.increments('C_id');
    table.string('name');
    table.string('description');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('characters')
};
