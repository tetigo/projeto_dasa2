const mysql = require("mysql");
const dbConfig = require("./config");

const DB_URL = 'mongodb://link-db/db_exam_lab'

// const connection = mysql.createConnection({
//     host: dbConfig.HOST,
//     user: dbConfig.USER,
//     password: dbConfig.PASSWORD,
//     database: dbConfig.DB
// });
const connection = mysql.createConnection(DB_URL);

connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

module.exports = connection;