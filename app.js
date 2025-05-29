const express = require(`express`);

const app = express();

const port = process.env.SERVER_PORT || 3000;

app.use(express.json());

app.use(express.static(`public`));

const moviesRouter = require(`./router/moviesRouter`)

app.use(`/api/movies`, moviesRouter);

const errorHandler = require("./middlewares/errorsHandler")
const notFound = require("./middlewares/notFound")

app.get("/", (req, res) => {
    res.send(`Movies API server`)
});

app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`)
});

const connection = require(`./data/db`)