var express = require('express');
const { verify } = require('jsonwebtoken');
var router = express.Router();
const sql = require("./UserQuery");
const jwt = require('jsonwebtoken')
/* GET users  */

router.get("/list", function (req, res, next) {
  sql.getListUser().then((result) => {

    res.json(result[0]);

  }).catch(err => res.json({ message: 'Không có của trả về' }))
});

router.post("/images", function (req, res, next) {
  let userId = req.body.userId
  sql.getImagefromUserId(userId).then((result) => {

    res.json({ images: result, message: 'Thành công', error: null });

  }).catch(err => res.json({ message: 'Không có kết quả trả về' }))
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

router.post('/register', function (req, res, next) {
  let userName = req.body.userName
  let email = req.body.email
  let passWord = req.body.passWord
  let imageUrl = req.body.imageUrl
  // console.log(userName, passWord, email, imageUrl);
  sql.createUser(userName, passWord, email, imageUrl).then((data) => {
    if (data == 'CREATE_SUCCESS') {
      res.send({ isError: false, message: data })
    }
    else {
      res.json({ isError: true, token: data, message: data })
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
      let userId = authData.user.user.recordset[0].user_id

      sql.getImagefromUserId(userId).then((result) => {
        console.log('result', result);
        res.json({
          message: 'Thông tin Cá nhân',
          user: result[0],
          // user: {
          //   profile: authData.user.user.recordset[0],
          //   images: result
          // }
        })
      })

    }
  })
})

router.post('/update-Avatar', verifyToken, (req, res, next) => {
  jwt.verify(req.token, 'secretKey', (err, authData) => {
    if (err) {
      res.sendStatus(403)
    }
    else {
      let userId = authData.user.user.recordset[0].user_id
      let image = req.body.image
      console.log(image);
      sql.updateProfile(userId, image).then((result) => {
        if (result == 'UPDATE_SUCCESS') {
          res.json({
            message: 'Cập nhật ảnh đại diện thành công',
            status: 200

          })
        }

      })

    }
  })
})




module.exports = router;
