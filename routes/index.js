var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/form1', function(req, res,) {
  res.render('form1.ejs');
});


module.exports = router;
