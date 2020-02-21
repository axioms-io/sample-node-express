const express = require('express');
const checkToken = require('../checkToken.js');
const validToken = require('../libs/validScope.js');

const router = express.Router();

router.get('/', checkToken, validToken(['tenant:owner']), (req, res) => {
    res.json({
        message: 'All good. You are authenticated'
    });
});

module.exports = router;