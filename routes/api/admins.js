const router = require('express').Router();

// GET Queries 

router.get('/', (req, res) => {
    res.end('Esto es admins.js');
});

/* 
********Esto es un ejemplo************
 router.get('/', async (req, res) => {
    try {
        const [result] = await getAll();
        console.log(result);
        res.json(result)
    } catch (error) {
        res.json({ 'fatal': error.message })
    }
    }) 
*/

module.exports = router;