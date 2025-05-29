const express = require(`express`);

const router = express.Router();

router.get(`/`, (req, res) => {
    res.send(`Lista Films`)
});

router.get(`/:id`, (req, res) => {
    res.send(`Dettaglio del Film e recensione con id ${req.params.id}`)
});

module.exports = router;
