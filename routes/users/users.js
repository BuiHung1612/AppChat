var express = require('express');
const { verify } = require('jsonwebtoken');
var router = express.Router();
const sql = require("./UserQuery");
const jwt = require('jsonwebtoken')
/* GET users  */

router.get("/list", function (req, res, next) {
  sql.getUser().then((result) => {
    res.json(result[0]);
  });
});

// CREATE USER 
// router.post("/create", function (req, res, next) {
//   let name = req.body.name
//   let password = req.body.password

//   // res.send(name, password)
//   sql.createUser(name, password).then((result) => {
//     // res.json(result[0]);
//     // res.send('success' + result)
//     console.log('success');
//   });
// });
router.post('/login', function (req, res, next) {
  let username = req.body.username
  let password = req.body.password
  console.log(username, password);
  sql.Login(username, password).then((data) => {
    if (data == 'error') {
      res.send({ isError: true, message: "Tài khoản hoặc mật khẩu không chính xác" })
    }
    else {
      res.json({ isError: false, token: data, message: 'Success' })
    }
  })
})

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ')
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next()
  }
  else {
    res.sendStatus(403)
  }
}


router.post('/profile', verifyToken, (req, res, next) => {
  jwt.verify(req.token, 'secretKey', (err, authData) => {
    if (err) {
      res.sendStatus(403)
    }
    else {

      res.json({
        message: 'Thông tin Cá nhân',
        user: authData.user.user.recordset[0]
      })
    }
  })
})




module.exports = router;
