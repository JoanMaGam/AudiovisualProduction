
const usersDb = 'audiovisual_production.users';

const getAll = () => {
    return db.query(`SELECT * FROM ${usersDb}`);
};

const getById = (userID) => {
    return db.query(`SELECT * FROM ${usersDb} WHERE id=?`, [userID]);
};

const create = ({ name, surname, age, dni, email, phone, address, password, role }) => {
    return db.query(`INSERT INTO ${usersDb}(name,surname,age,dni,email,phone, address,password,role)VALUES(?,?,?,?,?,?,?,?,?)`, [name, surname, age, dni, email, phone, address, password, role]);
};

const update = (userID, { name, surname, age, dni, email, phone, address, password, role }) => {
    return db.query(`UPDATE ${usersDb} SET users.name= ?, users.surname= ?, users.age= ?, users.dni= ?, users.email= ?,users.phone= ?, users.address= ?, users.password= ?, users.role= ? WHERE users.id= ?;`, [name, surname, age, dni, email, phone, address, password, role, userID]);
};

const deleteUserById = (userID) => {
    return db.query(`DELETE FROM ${usersDb} WHERE id=?`, [userID]);
};

const getUserAudios = (userID) => {
    return db.query(`SELECT m.* FROM users_has_productions as up JOIN music as m ON m.id= up.music_id WHERE up.users_id=? AND up.characters_id IS NULL  AND up.programs_id IS NULL`, [userID]);
};

const getUserShows = (userID) => {
    return db.query(`SELECT p.* FROM users_has_productions as up JOIN programs as p ON p.id= up.programs_id WHERE up.users_id=? AND up.characters_id IS NULL  AND up.music_id IS NULL`, [userID]);
};

const getUserProducts = (userID) => {
    return db.query(`SELECT * FROM users_has_products as upr JOIN products as p ON p.id= upr.products_id WHERE upr.users_id=?`, [userID]);
};

// ############# Register & Login ##################

const insert = ({ name, surname, age, dni, email, phone, address, password, role }) => {
    return db.query(`INSERT INTO ${usersDb}(name, surname, age, dni, email, phone, address, password, role) VALUES(?,?,?,?,?,?,?,?,?)`, [name, surname, age, dni, email, phone, address, password, role]);
};

const getByEmail = (email) => {
    return db.query(`SELECT * FROM ${usersDb} WHERE email=?`, [email]);
};

module.exports = { getAll, getById, create, update, deleteUserById, getUserAudios, getUserShows, getUserProducts, insert, getByEmail } 
