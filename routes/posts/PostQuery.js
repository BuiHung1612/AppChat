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

        let postDetail = await pool.request().query(`SELECT *  FROM postDetail`);
        let result = newarr.map(e => ({
            ...e, isLiked: postDetail.recordset.some(a => a.user_id_like == userId && e.post_id == a.post_id)

            // ...e, isLiked: postDetail.recordset.find(a => a.user_id_like == userId && e.post_id == a.post_id)?.like_status == 'true' ? true : false
        }))



        let checkme = []
        checkme.push(result[0])
        result.map(e => checkme.find(a => {
            if (a.user_id != e.user_id) {
                checkme.push(e)
            }
        }))
        // console.log('newarr', newarr);
        return result;
    } catch (error) {
        console.log(" mathus-error :" + error);
    }
}

async function getPosts(userId, currentUserId) {
    try {
        let pool = await sql.connect(config);
        let listPost = await pool.request().query(`SELECT *  FROM posts where user_id='${userId}' ORDER BY create_up DESC  `);
        let postDetail = await pool.request().query(`SELECT *  FROM postDetail where user_id_like='${currentUserId}'`);
        let newarr = listPost.recordset.map(e => ({
            ...e, isLiked: postDetail.recordset.some(a => a.user_id_like == currentUserId && e.post_id == a.post_id)
        }))
        console.log('[newarr]');

        return newarr;
    } catch (error) {
        console.log(" mathus-error :" + error);
    }
}

async function deletePost(userId, postId) {
    try {
        let pool = await sql.connect(config);
        await pool.request().query(`DELETE  FROM posts where user_id='${userId}' AND post_id='${postId}'`);
        return 'SUCCESS'
    } catch (error) {
        console.log(" mathus-error :" + error);
    }
}

async function likePost(userId, postId, isliked) {
    try {


        let pool = await sql.connect(config);
        var create_like_id = crypto.randomBytes(20).toString('hex');
        let post = await pool.request().query(`SELECT * FROM posts where post_id='${postId}'`);
        let user = await pool.request().query(`SELECT * FROM users WHERE user_id='${userId}'`)
        let check = await pool.request().query(`SELECT * FROM postDetail WHERE post_id='${postId}' AND user_id_like='${userId}'`)

        if (check.recordset[0]?.like_status != 'true' || check.recordset?.length == 0) {
            await pool.request().query(`UPDATE posts SET like_number='${post.recordset[0].like_number + 1}' where post_id='${postId}'`);
            await pool.request().query(`INSERT INTO postDetail (like_id,post_id,user_name_like,user_id_like,like_status) VALUES ('${create_like_id}','${postId}','${user.recordset[0].user_name}','${userId}','true')`)
        }
        else {
            await pool.request().query(`UPDATE posts SET like_number='${post.recordset[0].like_number - 1}' where post_id='${postId}'`);
            await pool.request().query(`DELETE postDetail WHERE post_id='${postId}'`);
        }
        return 'SUCCESS'
    } catch (error) {
        console.log(" mathus-error :" + error);
    }
}



async function CreatePostFromToken(userId, postContent, imagePost) {
    try {
        var postId = crypto.randomBytes(20).toString('hex');

        var commentId = userId.slice(0, 10)
        var time = new Date().toUTCString()
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
    listPost: listPost,
    deletePost: deletePost,
    likePost: likePost
}

