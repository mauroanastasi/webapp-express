const mysql = require(`mysql2`)

const connection = mysql.createConnection({
    host: process.env.DB_HOST || `localhost`,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
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