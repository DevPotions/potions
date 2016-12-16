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
    .join('fightPotions', 'fightPotions.f_id', '=', 'characters.fightPotions_id')
    .where('characters.id', id)
}

module.exports = {
  ListAllCharacters: ListAllCharacters,
  getFightPotions: getFightPotions,
  getCharacterProfile: getCharacterProfile
}
