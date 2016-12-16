var development = require('./knexfile')['development']
var knex = require('knex')(development)


//manipulate data from database with functions here
function ListAllCharacters (){
  return knex('characters')
  .select('*')

}


module.exports = {
  ListAllCharacters: ListAllCharacters
}
