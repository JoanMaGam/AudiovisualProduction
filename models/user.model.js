
const usersDb = 'audiovisual_production.users';

const getAll = () => {
    return db.query(`SELECT * FROM ${usersDb}`);
 };
const getById = (userID) => {
    return db.query(`SELECT * FROM ${usersDb} WHERE id=?`, [userID])
}; 

const getByRole = (userRole) => {
    return db.query(`SELECT * FROM ${usersDb} WHERE role=?`, [userRole])
};

const create = ({name, surname, age, dni, email, phone, address, password, role}) => { return db.query(`INSERT INTO ${usersDb}(name,surname,age,dni,email,phone, address,password,role)VALUES(?,?,?,?,?,?,?,?,?)`, [name, surname, age, dni, email, phone, address, password, role])
};

const update = (userID, { name, surname, age, dni, email, phone, address, password, role }) => {
    return db.query(`UPDATE ${usersDb} SET users.name= ?, users.surname= ?, users.age= ?, users.dni= ?, users.email= ?,users.phone= ?, users.address= ?, users.password= ?, users.role= ? WHERE users.id= ?;`, [name, surname, age, dni, email, phone, address, password, role, userID]);
}; 

const deleteUserById = (userID) => {
    return db.query(`DELETE FROM ${usersDb} WHERE id=?`, [userID]);
};

module.exports = { getAll, getById, getByRole, create, update, deleteUserById, getUserAudios}
