
const tableDb = 'audiovisual_production.products';

const getAll = () => {
    return db.query(`SELECT * FROM ${tableDb};`);
};

const getByName = (productName) => {
    return db.query(`SELECT * FROM ${tableDb} WHERE name= ?;`, [productName]);
};

const getByStatus = (productStatus) => {
    return db.query(`SELECT * FROM ${tableDb} WHERE status= ?;`, [productStatus]);
};

const orderByPriceDesc = () => {
    return db.query(`SELECT * FROM ${tableDb} ORDER BY products.price DESC;`);
};

const orderByPriceAsc = () => {
    return db.query(`SELECT * FROM ${tableDb} ORDER BY products.price ASC;`);
};

// const orderByPrice = (orderType) => {
//     return db.query(`SELECT * FROM ${tableDb} ORDER BY products.price ?;`, [orderType]);
// };


module.exports = { getAll, getByName, getByStatus, orderByPriceDesc, orderByPriceAsc /*, orderByPrice */ }
