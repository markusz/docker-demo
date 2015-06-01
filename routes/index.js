var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Docker Demo', text: 'This is a sample app in v2' });
});

module.exports = router;
