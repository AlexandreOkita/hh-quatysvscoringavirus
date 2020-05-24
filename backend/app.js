const express = require('express');
const app = express();

const helloWorld = require('./helloWorld');
const consumer = require('./api/routes/consumer');

app.use('/teste', helloWorld);
app.use('/consumer', consumer);

module.exports = app;