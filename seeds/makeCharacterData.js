
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('characters').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('characters').insert({C_id: 1, name: 'Piet_warrior',description:'big on armor and axes'}),
        knex('characters').insert({C_id: 2, name: 'Simon_rogue',description:'sneaky and deadly'}),
        knex('characters').insert({C_id: 3, name: 'Mix_mage',description:'grumpy and scary'}),
        knex('characters').insert({C_id: 4, name: 'Joseph_healer', description:'heals by looking at you'})
      ]);
    });
};
