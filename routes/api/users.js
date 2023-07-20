const router = require('express').Router();

const { checkToken } = require('../../helpers/middlewares');
const { createToken } = require('../../helpers/utils');
const { getAll, getById, create, deleteUserById, getUserAudios, getByEmail, insert } = require('../../models/user.model');


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

router.get('/:userID', checkToken, async (req, res) => {
    try {
        const [result] = await getById(req.params.userID);
        res.json(result);
    } catch (error) {
        res.json({ 'fatal': error.message });
    };
});

router.post('/', checkToken, async (req, res) => {
    try {
        const [result] = await create(req.body);
        res.json(result);
    } catch (error) {
        res.json({ 'fatal': error.message });
    };
});

router.delete('/:id', checkToken, async (req, res) => {
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
        res.json({ fatal: error.message })
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
            succes: 'Login success',
            token: createToken(user)
        });

    } catch (error) {
        res.json({ fatal: error.message })
    };
});

router.get('/perfil', checkToken, (req, res) => {
    // delete req.user.password; //esto elimina el password antes de que me lo muestre.
    res.json(req.user);
});


module.exports = router;