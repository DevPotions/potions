
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('effects', function (table) {
    table.increments('E_id');
    table.string('bonus_effects');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('effects')
};
