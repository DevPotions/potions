
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('potions', function (table) {
    table.increments('P_id');
    table.string('fight');
    table.string('heal');
    table.string('boost');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('potions')
};
