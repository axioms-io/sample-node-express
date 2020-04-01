const express = require('express');
const checkToken = require('../checkToken.js');
const { validScope } = require('@axioms/express-js');

const router = express.Router();

router.get('/', checkToken, validScope(['sample:role']), (req, res) => {
    res.json({
        message: 'All good. You are authenticated with role sample:role!'
    });
});

module.exports = router;