
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('boostPotions').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('boostPotions').insert({b_id: 1, b_potion: 'speed_potion',b_ability:'increases speed of abilities'}),
        knex('boostPotions').insert({b_id: 2, b_potion: 'strength_potion',b_ability:'increases strenght of character'}),
        knex('boostPotions').insert({b_id: 3, b_potion: 'increase_potion',b_ability:'boosts abilities'})
      ]);
    });
};
