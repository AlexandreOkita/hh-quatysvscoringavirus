const express = require('express');
const app = express();

const helloWorld = require('./helloWorld');
const consumer = require('./api/routes/consumer');
const consumer = require('./api/routes/deal');
const debugConsole = require('./api/middleware/consoleDebug');

app.use(debugConsole);
app.use('/teste', helloWorld);
app.use('/consumer', consumer);
app.use('/deal', deal);

module.exports = app;