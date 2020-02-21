const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'Hello from a public endpoint!'
    });
});

module.exports = router;