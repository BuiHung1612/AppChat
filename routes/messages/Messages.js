var express = require('express');
const { verify } = require('jsonwebtoken');
var router = express.Router();
const sql = require("./MessageQuery");
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

router.post('/sendMessage', verifyToken, (req, res, next) => {
    jwt.verify(req.token, 'secretKey', (err, authData) => {
        if (err) {
            res.sendStatus(403)
        }
        else {

            let roomChat_id = req.body.roomChat_id

            let id_message = req.body.id_message
            let createdAt = req.body.createdAt
            let text = req.body.text
            let user = req.body.user
            let picture = req.body.picture

            sql.sendMessage(roomChat_id, id_message, createdAt, text, user, picture).then((result) => {
                if (result == 'CREATE_SUCCESS') {
                    res.json({
                        message: 'gửi tin nhắn thành công',
                        status: 200,
                        error: null
                    })
                }

            })
        }
    })
})



router.post('/room', verifyToken, (req, res, next) => {
    jwt.verify(req.token, 'secretKey', (err, authData) => {
        if (err) {
            res.sendStatus(403)
        }
        else {

            let roomChat_id = req.body.roomChat_id
            sql.getMessages(roomChat_id).then((result) => {

                if (result) {
                    res.json({
                        message: 'thành công',
                        status: 200,
                        error: null,
                        data: result
                    })
                }

            })
        }
    })
})


module.exports = router;