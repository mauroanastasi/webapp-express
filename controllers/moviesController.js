const connection = require(`../data/db`)

const index = (req, res) => {
    const sql = `SELECT * FROM movies`
    connection.query(sql, (err, moviesResult) => {
        if (err) return res.status(500).json({ error: `Database query failed` + err })

        console.log(moviesResult)
        res.json(moviesResult)
    });
};

const show = (req, res) => {
    const { id } = req.params
    const moviesSql = `SELECT * FROM movies WHERE id = ?`

    connection.query(moviesSql, [id], (err, moviesResult) => {
        if (err) return res.status(500).json({ error: `Database query failed` + err })
        res.json(moviesResult);
    })
};

module.exports = { index, show }