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
  console.log(req.params.id);
}

module.exports = {
  getCharacters: getCharacters,
  getFightPotions: getFightPotions,
  getCharacterProfile: getCharacterProfile
}
