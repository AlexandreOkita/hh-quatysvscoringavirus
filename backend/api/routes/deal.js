const express = require('express');
const router = express.Router();
const Deal = require('../../services/Deal');

router.get('/getinfo', (req, res) => {

    const id = req.body.iddeal;
    Deal.getDeal({id})
        .then(response => res.status(200).send(response))
        .catch(error => res.status(500).send(error));
});

router.post('/participate', (req, res) => {

    const deal = req.body.iddeal;
    const consumer = req.body.idconsumer;

    Deal.participateDeal({iddeal: deal, idconsumer: consumer})
        .then(response => res.status(200).send(response))
        .catch(error => res.status(500).send(error));
});

module.exports = router;