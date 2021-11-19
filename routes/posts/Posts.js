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


router.post("/list", TokenVerify, function (req, res, next) {
    jwt.verify(req.token, 'secretKey', (err, authData) => {
        if (err) {
            res.sendStatus(403)
        }
        else {
            let userId = authData.user.user.recordset[0].user_id
            console.log('usser', userId);
            sql.listPost(userId).then((result) => {
                return res.json({ message: 'thành công', status: 200, error: null, data: result });

            }).catch(err => res.json({ message: 'Không có kết quả trả về' }))

        }
    })
});

router.post("/getPostFromUserId", TokenVerify, function (req, res, next) {
    jwt.verify(req.token, 'secretKey', (err, authData) => {
        if (err) {
            res.sendStatus(403)
        }
        else {
            let currentUserId = authData.user.user.recordset[0].user_id
            let userId = req.body.userId
            console.log('currentUserId', userId);
            sql.getPosts(userId, currentUserId).then((result) => {
                return res.json({ message: 'thành công', status: 200, error: null, data: result });

            }).catch(err => res.json({ message: 'Không có của trả về' }))

        }
    })
});

// router.post("/getPostFromUserId", function (req, res, next) {
//     let userId = req.body.userId
//     sql.getPosts(userId).then((result) => {
//         return res.json({ message: 'thành công', status: 200, error: null, data: result });

//     }).catch(err => res.json({ message: 'Không có của trả về' }))
// });

router.post("/getListPost", TokenVerify, function (req, res, next) {
    jwt.verify(req.token, 'secretKey', (err, authData) => {
        if (err) {
            res.sendStatus(403)
        }
        else {
            let currentUserId = authData.user.user.recordset[0].user_id
            let userId = currentUserId
            sql.getPosts(userId, currentUserId).then((result) => {

                res.json({
                    message: 'Thông tin Cá nhân',
                    list_Post: result,

                })
            })

        }
    })
});



router.post("/delete", TokenVerify, function (req, res, next) {
    jwt.verify(req.token, 'secretKey', (err, authData) => {
        if (err) {
            res.sendStatus(403)
        }
        else {
            let userId = authData.user.user.recordset[0].user_id
            let postId = req.body.postId
            sql.deletePost(userId, postId).then((result) => {

                if (result == 'SUCCESS') {
                    return res.json({ message: 'xoá bài đăng thành công', status: 200, error: null })
                }
                else {
                    return res.json({ message: 'xoá bài đăng thất bại', status: 403, error: null })
                }
            })

        }
    })
});


router.post("/like", TokenVerify, function (req, res, next) {
    jwt.verify(req.token, 'secretKey', (err, authData) => {
        if (err) {
            res.sendStatus(403)
        }
        else {
            let userId = authData.user.user.recordset[0].user_id
            let postId = req.body.postId
            let isliked = req.body.isliked
            sql.likePost(userId, postId, isliked).then((result) => {

                if (result == 'SUCCESS') {
                    return res.json({ message: 'thành công', status: 200, error: null })
                }
                else {
                    return res.json({ message: 'thất bại', status: 403, error: null })
                }
            })

        }
    })
});


module.exports = router;