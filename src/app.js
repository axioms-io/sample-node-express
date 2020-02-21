const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

const middlewares = require('./middlewares');
const public = require('./apis/public');
const private = require('./apis/private');
const admin = require('./apis/admin');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

app.get('/', (req, res) => {
    res.json({
        api: 'Your Services'
    });
});

app.use('/public', public);
app.use('/private', private);
app.use('/admin', admin);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);


module.exports = app;