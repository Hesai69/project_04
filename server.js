const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const favicon = require('serve-favicon');

const mongoose = require('mongoose');
const url = process.ENV.MONGODB_URI || 'mongodb://localhost:27017/fitness';
mongoose.connect(url);

const routes = require('./config/routes');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(__dirname + '/public/fiticon.ico'));

app.use('/api', routes);

app.listen(3000);
