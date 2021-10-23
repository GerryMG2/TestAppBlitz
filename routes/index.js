var express = require('express');
var router = express.Router();
var blitz = require("blitz-etl");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/", function (req, res, next) {

  //codigo para guardar la informacion del cliente


  console.log(req.body);



  var data = {client_id : req.body.user_id, name: req.body.name};
  blitz.send(data,"script1.js","616262e8a3fb29a41fdddbbb");

  res.redirect("/");
})

module.exports = router;
