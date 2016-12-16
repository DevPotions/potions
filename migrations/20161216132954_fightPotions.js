
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('fightPotions', function (table) {
    table.increments('f_id');
    table.string('f_potion');
    table.string('f_ability');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('fightPotions')
};
