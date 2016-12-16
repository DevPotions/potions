

exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('healPotions', function (table) {
    table.increments('h_id');
    table.string('h_potion');
    table.string('h_ability');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('healPotions')
};
