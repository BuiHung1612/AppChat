var config = require("./dbconfig");
const sql = require("mssql");
const jwt = require("jsonwebtoken")

async function getdata() {
    try {
        console.log("sql server connected...");
    } catch (error) {
        console.log(" mathus-error :" + error);
    }
}


async function getUser() {
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

// async function createUser(name, password) {
//     console.log(name, password);
//     try {
//         let pool = await sql.connect(config);
//         let res = await pool.request().query(`INSERT INTO users(user_name,password,token) VALUES ('${name}','${password}','${}')`);
//         return res;
//     } catch (error) {
//         console.log(" mathus-error :" + error);
//     }
// }


module.exports = {
    getdata: getdata,
    getUser: getUser,
    Login: Login
};
