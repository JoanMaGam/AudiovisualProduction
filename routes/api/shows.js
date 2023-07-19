const router = require('express').Router();
const { getAll, getByName } = require('../../models/shows.model');

// GET Queries:

// Get all shows
router.get('/', async (req, res) => {
    try {
        const [result] = await getAll();
        res.json(result);
    } catch (error) {
        res.json({ 'fatal': error.message });
    }
});

// Get show by title
router.get('/:showTitle', async (req, res) => {
    try {
        const [result] = await getByName(req.params.showTitle);
        res.json(result);
    } catch (error) {
        res.json({ 'fatal': error.message });
    }
});

module.exports = router;