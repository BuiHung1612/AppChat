const config = {
    user: "sa",
    password: "1234",
    server: "127.0.0.1",
    database: "AppChat",
    options: {
        trustedconnection: true,
        enableArithAbort: true,
        instancename: "SQLEXPRESS",
        trustServerCertificate: true
    },
    port: 1433
};

module.exports = config;
