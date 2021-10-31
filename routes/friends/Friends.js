var express = require('express');
const { verify } = require('jsonwebtoken');
var router = express.Router();
const sql = require("./FriendQuery");
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

router.post('/addFriend', verifyToken, (req, res, next) => {
    jwt.verify(req.token, 'secretKey', (err, authData) => {
        if (err) {
            res.sendStatus(403)
        }
        else {

            let userId = authData.user.user.recordset[0].user_id
            let userName = authData.user.user.recordset[0].user_name
            let userImage = authData.user.user.recordset[0].user_image
            let friendId = req.body.userId

            sql.createRequestFriend(userId, userName, userImage, friendId).then((result) => {
                if (
                    result == 'SUCCESS'
                ) {
                    res.json({
                        message: 'Đã gửi yêu cầu kết bạn !',
                        status: 200,
                        error: null
                    })
                }
                else {
                    {
                        res.json({
                            message: 'gửi yêu cầu thất bại',
                            status: 403,
                            error: null
                        })
                    }
                }

                console.log('create request :', result);

            })
        }
    })
})


router.post('/listFriend', verifyToken, (req, res, next) => {
    jwt.verify(req.token, 'secretKey', (err, authData) => {
        if (err) {
            res.sendStatus(403)
        }
        else {
            let userId = authData.user.user.recordset[0].user_id
            sql.getListFriend(userId).then((result) => {
                if (
                    result
                ) {
                    res.json({
                        message: 'lấy danh sách bạn bè thành công',
                        status: 200,
                        error: null,
                        data: result
                    })
                }
                else {
                    {
                        res.json({
                            message: 'gửi yêu cầu thất bại',
                            status: 403,
                            error: null
                        })
                    }
                }

                console.log('danh sách bạn bè:', result);

            })
        }
    })
})


router.post('/acceptRequest', verifyToken, (req, res, next) => {
    jwt.verify(req.token, 'secretKey', (err, authData) => {
        if (err) {
            res.sendStatus(403)
        }
        else {

            let userId = authData.user.user.recordset[0].user_id
            let request_sender_id = req.body.request_sender_id
            let request_sender_name = req.body.request_sender_name
            let request_sender_img = req.body.request_sender_img
            let id_request = req.body.id_request
            console.log(userId, request_sender_img);

            sql.acceptRequestFriend(id_request, userId, request_sender_id, request_sender_name, request_sender_img).then((result) => {
                if (
                    result == 'SUCCESS'
                ) {
                    res.json({
                        message: 'Chấp nhận yêu cầu kết bạn !',
                        status: 200,
                        error: null
                    })
                }
                else {
                    {
                        res.json({
                            message: 'gửi yêu cầu thất bại',
                            status: 403,
                            error: null
                        })
                    }
                }

                console.log('create request :', result);

            })
        }
    })
})

router.post("/getListRequest", verifyToken, function (req, res, next) {
    jwt.verify(req.token, 'secretKey', (err, authData) => {
        if (err) {
            res.sendStatus(403)
        }
        else {
            let userId = authData.user.user.recordset[0].user_id

            sql.getFriendRequest(userId).then((result) => {

                console.log('reslut request friend :', result);
                res.json({
                    message: 'Danh sách yêu cầu kết bạn',
                    list_request: result,

                })
            })

        }
    })
});


module.exports = router;