var express = require('express');
const { verify } = require('jsonwebtoken');
var router = express.Router();
const sql = require("./PostQuery");
const jwt = require('jsonwebtoken')

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
router.post('/create', verifyToken, (req, res, next) => {
    jwt.verify(req.token, 'secretKey', (err, authData) => {
        if (err) {
            res.sendStatus(403)
        }
        else {

            let userId = authData.user.user.recordset[0].user_id
            let postContent = req.body.postContent
            let imagePost = req.body.imagePost
            sql.CreatePostFromToken(userId, postContent, imagePost).then((result) => {
                res.json({
                    message: 'Tạo bài viết thành công',
                    status: 200,
                    error: null
                })
            })
        }
    })
})

const TokenVerify = (req, res, next) => {
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


router.get("/list", function (req, res, next) {

    sql.listPost().then((result) => {
        return res.json({ message: 'thành công', status: 200, error: null, data: result });

    }).catch(err => res.json({ message: 'Không có kết quả trả về' }))
});


router.post("/getPostFromUserId", function (req, res, next) {
    let userId = req.body.userId
    sql.getPosts(userId).then((result) => {
        return res.json({ message: 'thành công', status: 200, error: null, data: result });

    }).catch(err => res.json({ message: 'Không có của trả về' }))
});

router.post("/getListPost", TokenVerify, function (req, res, next) {
    jwt.verify(req.token, 'secretKey', (err, authData) => {
        if (err) {
            res.sendStatus(403)
        }
        else {
            let userId = authData.user.user.recordset[0].user_id
            sql.getPosts(userId).then((result) => {

                res.json({
                    message: 'Thông tin Cá nhân',
                    list_Post: result,

                })
            })

        }
    })
});


module.exports = router;