const express = require('express');
const router = express.Router();

router.get('/', () => {
    console.log('Hello World');
});

module.exports = router;