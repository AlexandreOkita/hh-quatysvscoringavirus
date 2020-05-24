const express = require('express');
const router = express.Router();
const Deal = require('../../services/Deal');

router.get('/getinfo', (req, res) => {

  const id = req.body.iddeal;

  Consumer.getDeal({id})
      .then(response => res.status(200).send(response))
      .catch(error => res.status(500).send(error));
});