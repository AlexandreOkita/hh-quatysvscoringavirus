const express = require('express');
const router = express.Router();
const Consumer = require('../../services/Consumer');

router.post('/register', (req, res) => {

    const name = req.body.name;
    const email = req.body.email;

    Consumer.registerConsumer({name: name, email: email})
        .then(response => res.status(200).send(response))
        .catch(error => res.status(500).send(error));
});

router.get('/login', (req, res) => {

    const email = req.query.email;
    console.log('Email Login:', email);
    Consumer.loginConsumer({email: email})
        .then(response => res.status(200).send(response))
        .catch(error => res.status(500).send(error));
});

router.post('/buy', (req, res) => {
    const idconsumer = req.body.idconsumer;
    const idproduct = req.body,idproduct;
    const price = req.body.price;

    Consumer.buyProduct({idproduct: idproduct, idconsumer: idconsumer, price: price})
        .then(response => res.status(200).send(response))
        .catch(error => res.status(500).send(error));
});

router.post('/wallet', (req, res) => {

    const id = req.body.id;
    const diffcredit = req.body.diffcredit;
    console.log('Changing Credit:', diffcredit);
    Consumer.changeCredit({id: id, diffcredit: diffcredit})
        .then(response => res.status(200).send(response))
        .catch(error => res.status(500).send(error));
});

module.exports = router;