var config = require("../../dbconfig");
const sql = require("mssql");
const jwt = require("jsonwebtoken")
var crypto = require("crypto");



async function getMessages(roomChat_id) {
    try {
        let pool = await sql.connect(config);
        let res = await pool.request().query(`SELECT *  FROM chatRoom where id_room='${roomChat_id}' order by createAt DESC`);
        return res.recordset;

    } catch (error) {
        console.log(" mathus-error :" + error);
    }
}


async function sendMessage(roomChat_id, id_message, createdAt, text, user, image) {
    try {
        let user_id = user._id
        let user_name = user.name
        let avatar = user.avatar

        let pool = await sql.connect(config);
        await pool.request().query(`INSERT INTO chatRoom (id_room,id_messages,createAt,text,user_id,user_name,avatar,image) VALUES('${roomChat_id}','${id_message}','${createdAt}',N'${text}','${user_id}',N'${user_name}','${avatar}','${image}')`);
        return 'CREATE_SUCCESS'

    } catch (error) {
        console.log(" mathus-error :" + error);
    }
}
module.exports = {
    getMessages: getMessages,
    sendMessage: sendMessage
}

