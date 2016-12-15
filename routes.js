var db = require('./db')


function getHome (req, res) {
  db.ListAllWombles()
  .then(wombles =>{
    res.render('home',{'wombles':wombles})
  })
}

function getCharacteristics(req, res){
    var wombleId = Number(req.params.id)
    db.getWombleCharacteristics(wombleId)
      .then(womble=>{
        // console.log(womble)
        res.render('characteristic',womble[0])
      })
}

function getAssignments(req, res){
  res.render('assignments')
}
//not working yet
function getRubbishList(req, res){
  res.render('rubbish')
}

module.exports = {
  getHome: getHome,
  getCharacteristics : getCharacteristics,
  getAssignments: getAssignments,
  getRubbishList: getRubbishList
}
