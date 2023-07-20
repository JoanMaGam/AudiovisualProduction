const router = require('express').Router();
const { getAll, getByName, getByShowId } = require('../../models/audios.model');

// GET Queries:

// Get all audios
router.get('/', async (req, res) => {
    try {
        const [result] = await getAll();
        res.json(result);
    } catch (error) {
        res.json({ 'fatal': error.message });
    }
});

// Get audio by title
router.get('/:audioTitle', async (req, res) => {
    try {
        const [result] = await getByName(req.params.audioTitle);
        res.json(result);
    } catch (error) {
        res.json({ 'fatal': error.message });
    }
});

// Get audio by showId
router.get('/shows/:showId', async (req, res) => {
    try {
        const [result] = await getByShowId(req.params.showId);
        res.json(result);
    } catch (error) {
        res.json({ 'fatal': error.message });
    }
});

module.exports = router;