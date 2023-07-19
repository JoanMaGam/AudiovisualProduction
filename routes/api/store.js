const router = require('express').Router();
const { getAll, getByName, getByStatus, /* orderByPriceDesc, orderByPriceAsc  */ orderByPrice } = require('../../models/store.model');

// GET Queries:

// Get all products
router.get('/', async (req, res) => {
    try {
        const [result] = await getAll();
        res.json(result);
    } catch (error) {
        res.json({ 'fatal': error.message });
    }
});

// Get product by name
router.get('/:productName', async (req, res) => {
    try {
        const [result] = await getByName(req.params.productName);
        res.json(result);
    } catch (error) {
        res.json({ 'fatal': error.message });
    }
});

// Get product by status
router.get('/status/:productStatus', async (req, res) => {
    try {
        const [result] = await getByStatus(req.params.productStatus);
        res.json(result);
    } catch (error) {
        res.json({ 'fatal': error.message });
    }
});

// Get products ordered from max to min price:
// router.get('/order/desc', async (req, res) => {
//     try {
//         const [result] = await orderByPriceDesc();
//         res.json(result);
//     } catch (error) {
//         res.json({ 'fatal': error.message });
//     }
// });

// // Get products ordered from min to max price:
// router.get('/order/asc', async (req, res) => {
//     try {
//         const [result] = await orderByPriceAsc();
//         res.json(result);
//     } catch (error) {
//         res.json({ 'fatal': error.message });
//     }
// });

// Get products ordered by lower price
router.get('/order/:orderType', async (req, res) => {
    try {
        const [result] = await orderByPrice(req.params.orderType);
        res.json(result)
    } catch (error) {
        res.json({ 'fatal': error.message })
    }
});


module.exports = router;
