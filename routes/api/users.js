const router = require('express').Router();

// GET Queries 

router.get('/', (req, res) => {
    res.end('Esto es users.js');
});

module.exports = router;
