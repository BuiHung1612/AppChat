var config = require("../../dbconfig");
const sql = require("mssql");
const jwt = require("jsonwebtoken")
var crypto = require("crypto");



async function getFriendRequest(userId) {
    try {
        let pool = await sql.connect(config);
        let res = await pool.request().query(`SELECT *  FROM requests where request_receiver='${userId}'`);
        return res.recordset;
    } catch (error) {
        console.log(" mathus-error :" + error);
    }
}


async function createRequestFriend(userId, userName, userImage, friendId) {
    try {
        var requestId = crypto.randomBytes(20).toString('hex');
        //  var commentId = userId.slice(0, 10)
        var time = new Date().toLocaleDateString()
        let pool = await sql.connect(config);
        let res = await pool.request().query(`INSERT INTO requests(id_request,request_sender_id,request_sender_name,request_sender_img,status,request_receiver,create_up) VALUES ('${requestId}','${userId}','${userName}','${userImage}','create_request','${friendId}','${time}')`);
        // return res.recordsets;
        return 'SUCCESS'

    } catch (error) {
        console.log(" mathus-error :" + error);
    }
}


async function acceptRequestFriend(id_request, userId, request_sender_id, request_sender_name, request_sender_img) {
    try {
        var create_id = crypto.randomBytes(20).toString('hex');
        var roomChat_id = crypto.randomBytes(20).toString('hex');
        let pool = await sql.connect(config);
        let getuser = await pool.request().query(`SELECT * FROM users WHERE user_id='${userId}'`)
        console.log('getuser', getuser);
        await pool.request().query(`INSERT INTO friends (create_id,user_id_0,user_name_0,user_img_0,user_id_1,user_name_1,user_img_1,roomChat_id) 
        VALUES('${create_id}','${request_sender_id}','${request_sender_name}','${request_sender_img}','${getuser.recordset[0].user_id}','${getuser.recordset[0].user_name}','${getuser.recordset[0].user_image}','${roomChat_id}')`);
        await pool.request().query(`delete from requests where id_request='${id_request}'`)

        return 'SUCCESS'

    } catch (error) {
        console.log(" mathus-error :" + error);
    }
}



async function getListFriend(userId) {
    try {

        let pool = await sql.connect(config);
        let getList = await pool.request().query(`select * from friends where user_id_0='${userId}' or user_id_1='${userId}'`);
        return getList.recordset

    } catch (error) {
        console.log(" mathus-error :" + error);
    }
}



module.exports = {
    getFriendRequest: getFriendRequest,
    createRequestFriend: createRequestFriend,
    acceptRequestFriend: acceptRequestFriend,
    getListFriend: getListFriend,
}

