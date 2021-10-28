var express = require('express');
const { verify } = require('jsonwebtoken');
var router = express.Router();
const sql = require("./PostQuery");
const jwt = require('jsonwebtoken')


router.get("/posts", function (req, res, next) {
    sql.getPosts().then((result) => {

        res.json(result[0]);

    }).catch(err => res.json({ message: 'Không có của trả về' }))
});


module.exports = router;