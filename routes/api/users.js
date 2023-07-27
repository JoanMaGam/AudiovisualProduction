const router = require('express').Router();
const bcrypt = require('bcryptjs');

const { checkToken } = require('../../helpers/middlewares');
const { createToken } = require('../../helpers/utils');
const { getAll, getById, create, deleteUserById, getUserAudios, getByEmail, insert, update, getUserShows, getUserProducts, createMusicFavs, createShowFavs, createCharacterFavs, getUserCharacters, createProductFavs } = require('../../models/user.model');


router.get('/', checkToken, async (req, res) => {
    try {
        const [result] = await getAll();
        res.json(result);
    } catch (error) {
        res.json({ 'fatal': error.message });
    };
});

router.get('/audios', checkToken, async (req, res) => {
    try {
        const [result] = await getUserAudios(req.user.id);
        res.json(result);
    } catch (error) {
        res.json({ 'fatal': error.message });
    };
});

router.get('/shows', checkToken, async (req, res) => {
    try {
        const [result] = await getUserShows(req.user.id);
        res.json(result);
    } catch (error) {
        res.json({ 'fatal': error.message });
    };
});

router.get('/products', checkToken, async (req, res) => {
    try {
        const [result] = await getUserProducts(req.user.id);
        res.json(result);
    } catch (error) {
        res.json({ 'fatal': error.message });
    };
});

router.get('/characters', checkToken, async (req, res) => {
    try {
        const [result] = await getUserCharacters(req.user.id);
        res.json(result);
    } catch (error) {
        res.json({ 'fatal': error.message });
    };
});

router.get('/profile', checkToken, async (req, res) => {
    // delete req.user.password; //This deletes the password before showing it
    return res.json(req.user);
});

router.post('/profile/favs/audios', checkToken, async (req, res) => {
    try {
        const [result] = await createMusicFavs(req.user.id, req.body.musicID);
        res.json(result);
    } catch (error) {
        res.json({ 'fatal': error.message });
    };
});

router.post('/profile/favs/shows', checkToken, async (req, res) => {
    try {
        const [result] = await createShowFavs(req.user.id, req.body.showID);
        res.json(result);
    } catch (error) {
        res.json({ 'fatal': error.message });
    };
});

router.post('/profile/favs/characters', checkToken, async (req, res) => {
    try {
        const [result] = await createCharacterFavs(req.user.id, req.body.characterID);
        res.json(result);
    } catch (error) {
        res.json({ 'fatal': error.message });
    };
});

router.post('/profile/favs/products', checkToken, async (req, res) => {
    try {
        const [result] = await createProductFavs(req.user.id, req.body.productID);
        res.json(result);
    } catch (error) {
        res.json({ 'fatal': error.message });
    };
});


router.get('/:userID', /* checkToken, */ async (req, res) => {
    try {
        const [result] = await getById(req.params.userID);
        res.json(result);
    } catch (error) {
        res.json({ 'fatal': error.message });
    };
});

router.post('/', /* checkToken, */ async (req, res) => {
    try {
        const [result] = await create(req.body);
        res.json(result);
    } catch (error) {
        res.json({ 'fatal': error.message });
    };
});
router.put('/update/:id', async (req, res) => {
    try {
        const [result] = await update(Number(req.params.id), req.body)
        const [result_final] = await getById(Number(req.params.id));
        res.json(result);

    } catch (error) {
        res.json({ 'fatal': error.message });

    }
});

router.delete('/:id', /* checkToken, */ async (req, res) => {
    try {
        const [result] = await deleteUserById(Number(req.params.id));
        res.json(result);
    } catch (error) {
        res.json({ 'fatal': error.message });
    };
});

// ######### REGISTER & LOGIN #############

router.post('/register', async (req, res) => {
    try {
        // Encrypt the password:
        req.body.password = bcrypt.hashSync(req.body.password, 9);

        const [result] = await insert(req.body);
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    };
});

router.post('/login', async (req, res) => {
    try {
        // Check the email   
        const [result] = await getByEmail(req.body.email);
        if (result.length === 0) {
            return res.json({ fatal: 'Wrong email or password' });
        };

        // Get the user
        const user = result[0];

        // Check if the passwords are the same
        const same = bcrypt.compareSync(req.body.password, user.password);
        if (!same) {
            return res.json({ fatal: 'Wrong email or password' });
        };

        res.json({
            success: 'Login success',
            token: createToken(user)
        });

    } catch (error) {
        res.json({ fatal: error.message })
    };
});




module.exports = router;