
const usersDb = 'audiovisual_production.users';

const getAll = () => {
    return db.query(`SELECT * FROM ${usersDb}`);
};
const getById = (userID) => {
    return db.query(`SELECT * FROM ${usersDb} WHERE id=?`, [userID])
};

/*const getRole = (userRole) => {
    return db.query(`SELECT * FROM ${usersDb} WHERE role=?`, [userRole])
}; */

const create = ({ name, surname, age, dni, email, phone, address, password, role }) => {
    return db.query(`INSERT INTO ${usersDb}(name,surname,age,dni,email,phone, address,password,role)VALUES(?,?,?,?,?,?,?,?,?)`, [name, surname, age, dni, email, phone, address, password, role])
};

const update = (userID, { name, surname, age, dni, email, phone, address, password, role }) => {
    return db.query(`UPDATE ${usersDb} SET user.name=?, user.surname=?, user.age=?, user.dni=?, user.email=?,user.phone=?, user.address=?, user.password=?, user.role=?;`, [name, surname, age, dni, email, phone, address, password, role])
};
const deleteUserById = (userID) => {
    return db.query(`DELETE FROM ${usersDb} WHERE id=?`, [userID]);
}

module.exports = { getAll, getById, create, update, deleteUserById } 
