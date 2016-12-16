
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('boostPotions', function (table) {
    table.increments('b_id');
    table.string('b_potion');
    table.string('b_ability');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('boostPotions')
};
