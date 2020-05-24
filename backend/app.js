const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')

const helloWorld = require('./helloWorld');
const consumer = require('./api/routes/consumer');
const deal = require('./api/routes/deal');
const debugConsole = require('./api/middleware/consoleDebug');

app.use(bodyParser.json());
app.use(cors());
app.use(debugConsole);
app.use('/teste', helloWorld);
app.use('/consumer', consumer);
app.use('/deal', deal);

module.exports = app;