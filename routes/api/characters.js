const router = require('express').Router();

// GET Queries 

router.get('/', (req, res) => {
    res.end('Esto es characters.js');
});

module.exports = router;