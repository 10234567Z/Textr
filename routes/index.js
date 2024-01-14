var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hello There , I am first",
    user: "Danny",
    date: new Date(),
  },
  {
    text: "That makes me second",
    user: "Amanda",
    date: new Date(),
  },
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Textr' , messages: messages});
});

/* GET users listing. */
router.get('/new', function(req, res, next) {
  res.render('form' , {title: 'New | Textr'});
});

module.exports = router;
