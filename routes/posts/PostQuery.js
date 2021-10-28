var config = require("../../dbconfig");
const sql = require("mssql");
const jwt = require("jsonwebtoken")
var crypto = require("crypto");


async function getPosts() {
    try {
        let pool = await sql.connect(config);
        let res = await pool.request().query("SELECT *  FROM users");
        return res.recordsets;
    } catch (error) {
        console.log(" mathus-error :" + error);
    }
}

module.exports = {
    getPosts: getPosts,

}

