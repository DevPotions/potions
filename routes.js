var db = require('./db')


function getCharacterProfile(req, res){
  res.render('characterProfile')
}

module.exports = {
  getCharacterProfile : getCharacterProfile

}
