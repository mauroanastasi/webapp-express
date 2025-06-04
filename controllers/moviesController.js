const connection = require(`../data/db`)

const index = (req, res) => {
    const sql = `SELECT * FROM movies`
    connection.query(sql, (err, moviesResult) => {
        if (err) return res.status(500).json({ error: `Database query failed` + err })

        const movies = moviesResult.map((movie) => {
            const obj = {
                ...movie,
                image: req.imagePath + movie.image
            }
            return obj
        })

        res.json(movies)
    });
};

const show = (req, res) => {
    const { id } = req.params
    const moviesSql = `SELECT * FROM movies WHERE id = ?`
    const reviewsSql = `
    SELECT *
    FROM reviews
    WHERE movie_id = ?
    `
    connection.query(moviesSql, [id], (err, moviesResult) => {
        if (err) return res.status(500).json({ error: `Database query failed` + err });

        if (moviesResult.length === 0 || moviesResult[0].id === null) {
            return res.status(404).json({ error: `Not Found` })
        }


        const movie = moviesResult[0];

        connection.query(reviewsSql, [id], (err, reviewResult) => {
            if (err) return res.status(500).json({ error: `Database query failed` + err })

            movie.reviews = reviewResult

            res.json({ ...movie, image: req.imagePath + movie.image });
        })


    });
}

module.exports = { index, show };