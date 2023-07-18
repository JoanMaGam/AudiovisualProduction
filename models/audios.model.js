const tableDb = 'audiovisual_production.music';

const getAll = () => {
    return db.query(`SELECT * FROM ${tableDb};`);
};

const getByName = (audioTitle) => {
    return db.query(`SELECT * FROM ${tableDb} WHERE title= ?;`, [audioTitle]);
};

const getByShowId = (showId) => {
    return db.query(`SELECT * FROM ${tableDb} WHERE program_id= ?;`, [showId]);
};


module.exports = { getAll, getByName, getByShowId };