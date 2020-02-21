const express = require('express');
const checkToken = require('../checkToken.js');
const validToken = require('../libs/validScope.js');

const router = express.Router();

router.get('/', checkToken, validToken(['profile', 'openid']), (req, res) => {
    res.json({
        message: 'All good. You are authenticated'
    });
});

module.exports = router;