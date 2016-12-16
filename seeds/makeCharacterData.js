
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('characters').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('characters').insert({C_id: 1, name: 'Piet_warrior',description:'big on armor and axes',fightPotions_id:'2',healPotions_id:'3', boostPotions_id:'1'}),
        knex('characters').insert({C_id: 2, name: 'Simon_rogue',description:'sneaky and deadly',fightPotions_id:'3',healPotions_id:'3', boostPotions_id:'2'}),
        knex('characters').insert({C_id: 3, name: 'Mix_mage',description:'grumpy and scary',fightPotions_id:'3',healPotions_id:'1', boostPotions_id:'1'}),
        knex('characters').insert({C_id: 4, name: 'Joseph_healer', description:'heals by looking at you',fightPotions_id:'1',healPotions_id:'1', boostPotions_id:'1'})
      ]);
    });
};
