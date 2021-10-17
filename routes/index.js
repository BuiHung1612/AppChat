
var express = require('express');
var router = express.Router();
const sql = require("../dboperation");

router.get('/', function (req, res, next) {
  sql.getdata();
  res.render('index', { title: 'HELLO WORLD' });
});


module.exports = router;
