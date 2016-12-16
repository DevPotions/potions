
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('fightPotions').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('fightPotions').insert({f_id: 1, f_potion: 'blood_potion',f_ability:'poisons boils targets blood'}),
        knex('fightPotions').insert({f_id: 2, f_potion: 'fire_potion',f_ability:'burns targets brain'}),
        knex('fightPotions').insert({f_id: 3, f_potion: 'lava_potion',f_ability:'turns the ground to lava'})
      ]);
    });
};
