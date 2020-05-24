const express = require('express');
const app = express();

const helloWorld = require('./helloWorld')

app.use('/teste', helloWorld);

module.exports = app;