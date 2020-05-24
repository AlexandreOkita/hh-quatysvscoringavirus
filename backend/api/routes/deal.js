const express = require('express');
const router = express.Router();
const Deal = require('../../services/Deal');
router.post('/create', (req, res) => {

  const idproduct = req.body.idproduct;
  const targetbuyers = req.body.targetbuyers;
  const targetprice = req.body.targetprice;
  const expiration = req.body.expiration;

  Deal.participateDeal({idproduct: idproduct, targetbuyers: targetbuyers,
                        targetprice: targetprice, expiration: expiration})
      .then(response => res.status(200).send(response))
      .catch(error => res.status(500).send(error));
});


router.get('/getinfo', (req, res) => {

    const id = req.query.iddeal;
    Deal.getDeal({id})
        .then(response => res.status(200).send(response))
        .catch(error => res.status(500).send(error));
});

router.post('/participate', (req, res) => {
    console.log('BODY', req.body)

    const deal = req.body.iddeal;
    const consumer = req.body.idconsumer;

    Deal.participateDeal({iddeal: deal, idconsumer: consumer})
        .then(response => res.status(200).send(response))
        .catch(error => {
            console.log(error);
            res.status(500).send(error)});
});

module.exports = router;