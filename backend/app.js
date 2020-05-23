const express = require('express');
const app = express();

const helloWorld = require('./helloWorld')

app.use('/', helloWorld);

module.exports = app;