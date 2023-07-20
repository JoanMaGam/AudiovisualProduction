const router = require('express').Router();
const bcrypt = require('bcryptjs');

const { getByEmail, insert } = require('../../models/admins.models');
const { createToken } = require('../../helpers/utils');

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

module.exports = router;