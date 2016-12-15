
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('effects').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('effects').insert({E_id: 1, bonus_effects: 'doubleAttackSpeed'}),
        knex('effects').insert({E_id: 2, bonus_effects: 'dragonsBreath'}),
        knex('effects').insert({E_id: 3, bonus_effects: 'raiseHell'}),
        knex('effects').insert({E_id: 4, bonus_effects: 'doubleHealingSpeed'}),
        knex('effects').insert({E_id: 5, bonus_effects: 'tsunamiWave'}),
        knex('effects').insert({E_id: 6, bonus_effects: 'medicalWall'}),
        knex('effects').insert({E_id: 7, bonus_effects: 'reducedHealth'}),
        knex('effects').insert({E_id: 8, bonus_effects: 'steamEffect'}),
        knex('effects').insert({E_id: 9, bonus_effects: 'moltenShield'})
      ]);
    });
};
