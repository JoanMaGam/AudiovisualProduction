const router = require('express').Router();

// GET Queries 

// router.get('/', (req, res) => {
//     res.end('Esto es admins.js');
// });


// ********Esto es un ejemplo************
// return db.query(`SELECT * FROM ${tableDb}`);

router.get('/', async (req, res) => {
    try {
        const [result] = await db.query(`SELECT * FROM audiovisual_production.users`);
        console.log(result);
        res.json(result)
    } catch (error) {
        res.json({ 'fatal': error.message });
    }
})


module.exports = router;