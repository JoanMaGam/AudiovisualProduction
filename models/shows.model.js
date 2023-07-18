const tableDb = 'audiovisual_production.programs';

const getAll = () => {
    return db.query(`SELECT * FROM ${tableDb};`);
};

const getByName = (showTitle) => {
    return db.query(`SELECT * FROM ${tableDb} WHERE title= ?;`, [showTitle]);
};

module.exports = { getAll, getByName };