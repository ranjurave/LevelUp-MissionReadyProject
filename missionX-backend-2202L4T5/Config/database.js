const mysql = require("mysql2");

require("dotenv").config();

const db = mysql.createConnection({
	host: process.env.SQL_HOST,
	user: process.env.SQL_NAME,
	password: process.env.SQL_PASS,
	database: process.env.SQL_DATA,
});

module.exports = db;
