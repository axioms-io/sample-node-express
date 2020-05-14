const express = require('express');
const checkToken = require('../checkToken.js');
const {
    hasRequiredRoles
} = require('@axioms/express-js');

const router = express.Router();

router.all('/', checkToken, hasRequiredRoles(['sample:role']), (req, res) => {
    var msg;
    switch (req.method) {
        case 'GET':
            msg = "Sample read."
            break;

        case 'POST':
            msg = "Sample created."
            break;

        case 'PATCH':
            msg = "Sample updated."
            break;

        case 'DELETE':
            msg = "Sample deleted."
            break;

        default:
            msg = "Action not support"
            break;
    }
    res.json({
        message: msg
    });
});

module.exports = router;