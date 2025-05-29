const connection = require(`../data/db`)

const index = (req, res) => {
    res.send(`Lista Films`)
};

const show = (req, res) => {
    res.send(`Dettaglio del Film e recensione con id ${req.params.id}`)
};

module.exports = { index, show }