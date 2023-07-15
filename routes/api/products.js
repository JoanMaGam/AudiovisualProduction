const router = require('express').Router();

// GET Queries 

router.get('/', (req, res) => {
    res.end('Esto es products.js');
});

module.exports = router;