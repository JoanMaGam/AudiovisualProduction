const router = require('express').Router();

// GET Queries 

router.get('/', async (req, res) => {
    try {
        const [result] = await db.query(`SELECT * FROM audiovisual_production.characters`);
        console.log(result);
        res.json(result)
    } catch (error) {
        res.json({ 'fatal': error.message })
    }
});

module.exports = router;