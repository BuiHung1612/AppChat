var config = require("../../dbconfig");
const sql = require("mssql");
const jwt = require("jsonwebtoken")
var crypto = require("crypto");

async function listPost(userId) {
    try {
        let pool = await sql.connect(config);
        let listPost = await pool.request().query(`SELECT *  FROM posts order by create_up`);
        let listUser = await pool.request().query(`SELECT *  FROM users`);
        let newarr = listPost.recordset.map(e => ({
            ...e, user_name: listUser.recordset.find(a => a.user_id == e.user_id).user_name,
            user_image: listUser.recordset.find(a => a.user_id == e.user_id).user_image,
            sex: listUser.recordset.find(a => a.user_id == e.user_id).sex,
            age: listUser.recordset.find(a => a.user_id == e.user_id).age,

        }))

        let checkme = []
        checkme.push(newarr[0])
        newarr.map(e => checkme.find(a => {
            if (a.user_id != e.user_id) {
                checkme.push(e)
            }
        }))
        // console.log('newarr', newarr);
        return checkme;
    } catch (error) {
        console.log(" mathus-error :" + error);
    }
}

async function getPosts(userId) {
    try {
        let pool = await sql.connect(config);
        let res = await pool.request().query(`SELECT *  FROM posts where user_id='${userId}' order by create_up`);
        return res.recordset;
    } catch (error) {
        console.log(" mathus-error :" + error);
    }
}


async function CreatePostFromToken(userId, postContent, imagePost) {
    try {
        var postId = crypto.randomBytes(20).toString('hex');
        var commentId = userId.slice(0, 10)
        var time = new Date().toLocaleDateString()
        let pool = await sql.connect(config);
        let res = await pool.request().query(`INSERT INTO posts(post_id,user_id,create_up,like_number,post_content,comment_id,post_image) VALUES ('${postId}','${userId}','${time}',0,'${postContent}','${commentId}','${imagePost}')`);
        // return res.recordsets;
        return 'CREATE_SUCCESS'

    } catch (error) {
        console.log(" mathus-error :" + error);
    }
}
module.exports = {
    getPosts: getPosts,
    CreatePostFromToken: CreatePostFromToken,
    listPost: listPost
}

