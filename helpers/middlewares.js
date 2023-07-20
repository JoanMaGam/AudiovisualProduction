const dayjs = require('dayjs');
const jwt = require('jsonwebtoken');
const fs = require('fs/promises');

const { getById } = require('../models/admins.models');

// Server log to know server uses
const serverlogs = async (req, res, next) => {
    const currentDate = dayjs().format('DD-MM-YYY HH:mm:ss');
    const message = `[${currentDate}] Method: ${req.method} URL: ${req.url}\n`;
    await fs.appendFile('./main.log', message);
    next();
};

const checkToken = async (req, res, next) => {
    //Check if token exists at headers
    if (!req.headers['authorization']) {
        return res.json({ fatal: 'You must include Authorization header' });
    };

    // Check token
    const token = req.headers['authorization'];
    let obj;
    try {
        obj = jwt.verify(token, 'secretPhrase');
    } catch (error) {
        return res.json({ fatal: error.message })
    };

    // Get active user data
    const [result] = await getById(obj.user_id);
    console.log(result[0]);
    req.user = result[0]

    next();
};


module.exports = { serverlogs, checkToken }
