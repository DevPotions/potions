
exports.up = function(knex, Promise) {
  return knex.schema.table('characters', function (table) {
    table.string('fightPotions_id');
    table.string('healPotions_id');
    table.string('boostPotions_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('characters', function (table) {
    table.dropColumn('fightPotions_id');
    table.dropColumn('healPotions_id');
    table.dropColumn('boostPotions_id');
  })
};
