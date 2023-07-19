const dayjs = require('dayjs');
const jwt = require('jsonwebtoken');
const fs = require('fs/promises');


// //log de servidor. para saber que hace que y cuando al entrar en el server.
const serverlogs = async (req, res, next) => {
    const currentDate = dayjs().format('DD-MM-YYY HH:mm:ss');
    const message = `[${currentDate}] Method: ${req.method} URL: ${req.url}\n`;
    await fs.appendFile('./main.log', message);
    next();
};



module.exports = { serverlogs, checkToken, checkAdmin, checkRol }
