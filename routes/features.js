var express = require('express');
var router = express.Router();

/* GET features page. */
router.get('/', function(req, res, next) {
    res.render('features');
  });
  
  module.exports = router;