const mysql = require(`mysql2`)

const connection = mysql.createConnection({
    host: "local_connection",
    user: "root",
    password: "popimian999",
    database: "db_movies",
})

connection.connect((err) => {
    if (err) {
        console.log("Error to connecto to MySQL: " + err)
    }
    else {
        console.loh("Connected to MySQL")
    }
})

module.exports = connection;