const express = require('express');
const router = express.Router();

router.get('/helloworld', function(){
    console.log('Hello World');
});

module.exports = router;