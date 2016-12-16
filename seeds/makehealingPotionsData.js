
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('healPotions').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('healPotions').insert({h_id: 1, h_potion: 'flower_potion',h_ability:'Heals friendly target' }),
        knex('healPotions').insert({h_id: 2, h_potion: 'rain_potion',h_ability:'restores health in an area' }),
        knex('healPotions').insert({h_id: 3, h_potion: 'shield_potion',h_ability:'shields a friendly target' })
      ]);
    });
};
