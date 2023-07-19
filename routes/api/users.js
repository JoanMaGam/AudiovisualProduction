const router = require('express').Router();
// const bcrypt = require('bcryptjs');

const { getAll, getById, create, deleteUserById, insert } = require('../../models/user.model');


router.get('/', async (req, res) => {
    try {
        const [result] = await getAll();
        console.log(result)
        res.json(result)
    } catch (error) {
        res.json({ 'fatal': error.message })
    }
})

router.get('/:userID', async (req, res) => {
    try {
        const [result] = await getById(req.params.userID)
        res.json(result)
    } catch (error) {
        res.json({ 'fatal': error.message })
    }
})

router.post('/', async (req, res) => {
    try {
        const [result] = await create(req.body)
        // console.log(result)
        res.json(result)
    }
    catch (error) {
        res.json({ 'fatal': error.message })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const [result] = await deleteUserById(Number(req.params.id));
        res.json(result)
    }
    catch (error) {
        res.json({ 'fatal': error.message });
    }
});

// ######### REGISTER & LOGIN #############

router.post('/register', async (req, res) => {
    //body -> name , email, password
    try {
        // req.body.password = bcrypt.hashSync(req.body.password, 9);
        const [result] = await insert(req.body);
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message })
    }
});

module.exports = router;