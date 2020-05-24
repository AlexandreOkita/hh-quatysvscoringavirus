const mysql = require('mysql');
const dbinfo = require('../secrets/database_info.json');

var connection = mysql.createConnection({
    host: dbinfo.host,
    port: dbinfo.port,
    user: dbinfo.user,
    password: dbinfo.password,
    database: dbinfo.database
});

module.exports = connection;