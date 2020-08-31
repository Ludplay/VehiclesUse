var express = require('express');
var router = express.Router();

var db = require('../db-connection');
/*
db.connect();
db.query('SELECT * from seidor.test', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].name);
});
db.end();*/

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
