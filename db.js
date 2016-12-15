var development = require('./knexfile')['development']
var knex = require('knex')(development)


//manipulate data from database with functions here
function ListAllWombles(){
  return knex('wombles')
  .select('*')

}

function getWombleCharacteristics(wombleId){
  return knex('wombles')
  .select('*')
    .join('characteristics', 'characteristics.id', '=', 'wombles.characteristic_id')
    .where('wombles.id',wombleId)

}

function logErr(err){
  console.error("Your error is: ", err)
}


//not working but trying stuff
function addRubbish_idData(){
  return knex('wombles')
    .insert({
      'rubbish_id': 1,
      'rubbish_id': 2,
      'rubbish_id': 3,
      'rubbish_id': 4,
      'rubbish_id': 5,
      'rubbish_id': 6
    })
}
//not working yet
function getWomblesRubbishList(){
  return knex('wombles')
    .select('*')
    .join('rubbish','rubbish.id','=','wombles.rubbish_id')

}



module.exports = {
  getWomblesRubbishList: getWomblesRubbishList,
  addRubbish_idData: addRubbish_idData,
  ListAllWombles: ListAllWombles,
  getWombleCharacteristics: getWombleCharacteristics
}
