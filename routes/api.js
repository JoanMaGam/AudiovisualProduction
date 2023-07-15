const router = require('express').Router();

router.use('/admins', require('./api/admins'));
router.use('/users', require('./api/users'));
router.use('/programs', require('./api/programs'));
router.use('/characters', require('./api/characters'));
router.use('/music', require('./api/music'));
router.use('/products', require('./api/products'));

module.exports = router;