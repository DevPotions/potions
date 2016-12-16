var db = require('./db')


function getCharacters (req, res) {
  db.ListAllCharacters()
  .then(characters =>{
    res.render('home',{'characters':characters})
  })
}

module.exports = {
  getCharacters:getCharacters
}
