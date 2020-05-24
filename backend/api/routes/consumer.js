const express = require('express');
const router = express.Router();
const Consumer = require('../../services/Consumer');

router.post('/register', (req, res) => {
    
    const name = req.body.name;
    const email = req.body.email;

    Consumer.registerConsumer({name: name, email: email})
        .then((response) => res.status(200).send(response))
        .catch(error => res.status(500).send(error));
});

router.get('/login', (req, res) => {
    
    const email = req.query.email;

    Consumer.loginConsumer({email: email})
        .then((response) => res.status(200).send(response))
        .catch(error => res.status(500).send(error));
});
module.exports = router;