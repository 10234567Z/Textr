var express = require('express');
var router = express.Router();

const messages = [
  {
    message: "Hello There , I am first",
    user: "Danny",
    date: new Date(),
  },
  {
    message: "That makes me second",
    user: "Amanda",
    date: new Date(),
  },
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Textr' });
});

module.exports = router;
