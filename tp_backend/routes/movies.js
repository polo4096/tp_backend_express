var express = require('express');

var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Cest les mfils !');
});

module.exports = router;
