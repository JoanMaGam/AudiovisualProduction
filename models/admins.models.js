
const usersDb = 'audiovisual_production.users';

// ############# Register & Login ##################

const insert = ({ name, surname, age, dni, email, phone, address, password, role }) => {
    return db.query(`INSERT INTO ${usersDb}(name, surname, age, dni, email, phone, address, password, role) VALUES(?,?,?,?,?,?,?,?,?)`, [name, surname, age, dni, email, phone, address, password, role]);
};

const getByEmail = (email) => {
    return db.query(`SELECT * FROM ${usersDb} WHERE email=?`, [email]);
};

const getById = (userId) => {
    return db.query(`Select * from ${usersDb} where id = ?`, [userId]);
};

module.exports = { insert, getByEmail, getById } 
