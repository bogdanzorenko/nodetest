const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', foo : 77});
  //res.json({title: 'Express', foo : 77})
});

module.exports = router;
