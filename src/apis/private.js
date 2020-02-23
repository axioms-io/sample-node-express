const express = require('express');
const checkToken = require('../checkToken.js');
const { validScope } = require('@axioms/express-js');

const router = express.Router();

router.get('/', checkToken, validScope(['profile', 'openid']), (req, res) => {
    res.json({
        message: 'All good. You are authenticated!'
    });
});

module.exports = router;