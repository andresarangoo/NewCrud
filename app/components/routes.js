const {Router} = require('express');
const router = new Router();

const products = require('./product/productRoute');

router.use('/products', products);

module.exports = router;