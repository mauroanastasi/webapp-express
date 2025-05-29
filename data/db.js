const mysql = require(`mysql2`)

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "popimian999",
    database: "db_movies",
})

connection.connect((err) => {
    if (err) {
        console.log("Error to connecto to MySQL: " + err)
    }
    else {
        console.log("Connected to MySQL")
    }
})

module.exports = connection;