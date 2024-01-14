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
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Textr', messages: messages });
});

/* GET users listing. */
router.get('/new', function (req, res, next) {
  res.render('form', { title: 'New | Textr' });
});

router.post('/new', function (req, res) {
  messages.push({
    text: req.body.text,
    user: req.body.user,
    date: new Date()
  })
  res.render('success')
})

module.exports = router;
