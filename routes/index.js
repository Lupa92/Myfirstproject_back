// const fecth = require('node-fetch')

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/year', (req, res) => {
  let date = new Date();
  let year =  date.getFullYear();
  let yearString = year.toString()
  res.json({ year: yearString });
});
//tres

module.exports = router;
