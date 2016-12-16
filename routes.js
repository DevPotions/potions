var db = require('./db')


function getCharacters (req, res) {
  db.ListAllCharacters()
  .then(characters =>{
    res.render('home',{'characters':characters})
  })
}

function getFightPotions (req, res) {
  db.getFightPotions()
  .then(potions =>{
    console.log(potions);
    res.render('potions',{'f_potion': potions})
  })
}
function getCharacterProfile (req, res){
  var charId = Number(req.params.id)
  db.getCharacterProfile(charId)
  .then(character => {
    console.log(character);
    res.render('profile', character[0])
  })
}

module.exports = {
  getCharacters: getCharacters,
  getFightPotions: getFightPotions,
  getCharacterProfile: getCharacterProfile
}
