const dayjs = require('dayjs');
const jwt = require('jsonwebtoken');

const createToken = (user) => {
    const obj = {
        user_id: user.id,
        user_rol: user.role,

        // Token expires in 10 days
        exp: dayjs().add(200, 'days').unix()
    };
    return jwt.sign(obj, 'secretPhrase');
};

module.exports = { createToken }