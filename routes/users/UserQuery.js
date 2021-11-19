var config = require("../../dbconfig");
const sql = require("mssql");
const jwt = require("jsonwebtoken")
var crypto = require("crypto");


async function getListUser() {
    try {
        let pool = await sql.connect(config);
        let res = await pool.request().query("SELECT *  FROM users");
        return res.recordsets;
    } catch (error) {
        console.log(" mathus-error :" + error);
    }
}

function generateAccessToken(user) {
    return jwt.sign({ user }, 'secretKey');
}

async function Login(username, password) {

    try {
        let pool = await sql.connect(config)
        let user = await pool.request().query(`select * from users where user_name='${username}' and password='${password}'`)

        if (user.recordset[0] !== undefined) {
            console.log(user.recordset[0]);
            return token = generateAccessToken({ user: user });
        }
        else {
            return 'error'
        }
    }
    catch (error) {
        console.log(" mathus-error :" + error);
    }


    // try {
    //     let pool = await sql.connect(config);
    //     let res = await pool.request().query(`INSERT INTO users(user_name,password,token) VALUES ('${name}','${password}','${}')`);
    //     return res;
    // } catch (error) {
    //     console.log(" mathus-error :" + error);
    // }
}

async function createUser(userName, passWord, email, imageUrl) {
    var userId = crypto.randomBytes(20).toString('hex');
    var imageId = crypto.randomBytes(20).toString('hex');
    var postsId = userId.slice(0, 10)

    console.log(userId);
    console.log(postsId);
    try {
        if (userName == '' || passWord == '' || email == '') {
            return 'CREATE_FAIL'
        }
        else {
            let pool = await sql.connect(config);
            await pool.request().query(`INSERT INTO users(user_name,password,email,user_id,age,sex,postsId,followers,following,visited,description,user_image)
            VALUES ('${userName}','${passWord}','${email}','${userId}','','','${postsId}',0,0,0,'','${imageUrl}')`);
            await pool.request().query(`INSERT INTO images(id_image,id_user,type,id_post,url) VALUES ('${imageId}','${userId}','avatar','','${imageUrl}')`)
            return 'CREATE_SUCCESS'
        }


        // console.log('response', res);
    } catch (error) {
        console.log(" mathus-error :" + error);
    }
}


async function getImagefromUserId(userId) {

    try {
        let pool = await sql.connect(config)
        let result = await pool.request().query(`select * from users where user_id='${userId}'`)

        if (result.recordset[0] !== undefined) {
            return result = result.recordset

        }
        else {
            return 'error'
        }
    }
    catch (error) {
        console.log(" mathus-error :" + error);
    }
}

async function updateProfile(userId, image) {

    try {
        let pool = await sql.connect(config)
        await pool.request().query(`UPDATE users SET user_image='${image}' WHERE user_id='${userId}'`)
        return 'UPDATE_SUCCESS'
    }
    catch (error) {
        console.log(" mathus-error :" + error);
    }
}


module.exports = {
    getListUser: getListUser,
    Login: Login,
    createUser: createUser,
    getImagefromUserId: getImagefromUserId,
    updateProfile
}

