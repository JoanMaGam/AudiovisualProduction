const tableDb = 'audiovisual_production.characters';

const getAll = () => {
    return db.query(`SELECT * FROM ${tableDb};`);
};

const getByName = (characterName) => {
    return db.query(`SELECT * FROM ${tableDb} WHERE name= ?;`, [characterName]);
};

const getByShowId = (showId) => {
    return db.query(`SELECT * FROM ${tableDb} WHERE program_id= ?;`, [showId]);
};


module.exports = { getAll, getByName, getByShowId }