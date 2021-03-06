const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

const middlewares = require('./middlewares');
const public = require('./apis/public');
const private = require('./apis/private');
const role = require('./apis/role');
const permission = require('./apis/permission');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

app.get('/', (req, res) => {
    res.json({
        api: 'Express Sample APIs'
    });
});

app.use('/public', public);
app.use('/private', private);
app.use('/role', role);
app.use('/permission', permission);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;