const express = require(`express`);

const app = express();

const port = process.env.SERVER_PORT || 3000;

const cors = require(`cors`);

app.use(express.json());

app.use(express.static(`public`));
const imagePathMiddleware = require(`./middlewares/imagePath`)
app.use(cors({ origin: process.env.FE_APP }));

const moviesRouter = require(`./router/moviesRouter`)


app.use(imagePathMiddleware)
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