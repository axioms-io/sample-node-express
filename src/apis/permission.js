const express = require('express');
const checkToken = require('../checkToken.js');
const {
    hasRequiredPermissions
} = require('@axioms/express-js');

const router = express.Router();

router.get('/', checkToken, hasRequiredPermissions(['sample:read']), (req, res) => {
    res.json({
        message: 'Sample read.'
    });
});

router.post('/', checkToken, hasRequiredPermissions(['sample:create']), (req, res) => {
    res.json({
        message: 'Sample created.'
    });
});

router.patch('/', checkToken, hasRequiredPermissions(['sample:update']), (req, res) => {
    res.json({
        message: 'Sample updated.'
    });
});

router.delete('/', checkToken, hasRequiredPermissions(['sample:delete']), (req, res) => {
    res.json({
        message: 'Sample deleted.'
    });
});

module.exports = router;