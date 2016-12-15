
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('potions').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('potions').insert({P_id: 1, fight: 'blood_potion',heal:'flower_potion',boost:'speed_potion'}),
        knex('potions').insert({P_id: 2, fight: 'fire_potion',heal:'rain_potion',boost:'strength_potion'}),
        knex('potions').insert({P_id: 3, fight: 'lava_potion',heal:'shield_potion',boost:'increase_potion'})
      ]);
    });
};
