var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var express = require('express');
var router = express.Router();
const fs = require("fs")
const path = require("path")

/* GET portfolio page. */
router.get('/', function(req, res, next) {
  let data = fs.readFileSync(path.resolve(__dirname, "../data/portfolio.json"));
  res.render('portfolio', { cakes: JSON.parse(data)});
});

module.exports = router;