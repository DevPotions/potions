var development = require('./knexfile')['development']
var knex = require('knex')(development)


//manipulate data from database with functions here
function ListAllCharacters (){
  return knex('characters')
  .select('*')

}

function getFightPotions (){
  return knex('fightPotions')
  .select('*')
}

function getCharacterProfile(id){
  return knex('characters')
    .select('*')
    .join('fightPotions', 'characters.fightPotions_id', '=','fightPotions.f_id' )
    .join('healPotions', 'characters.healPotions_id', '=', 'healPotions.h_id')
    .join('boostPotions', 'characters.boostPotions_id', '=', 'boostPotions.b_id')
    .where('characters.C_id', id)
}

module.exports = {
  ListAllCharacters: ListAllCharacters,
  getFightPotions: getFightPotions,
  getCharacterProfile: getCharacterProfile
}
