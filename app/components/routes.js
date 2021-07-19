const {Router} = require('express');
const router = new Router();
const productsCreate = require('./product/productCreate/productCreateRouter');
const productsDelete = require('./product/productDelete/productDeleteRouter');
const productsGetAll = require('./product/productGetAll/productGetAllRouter');
const productsGetByPk = require('./product/productGetByPk/productGetByPkRouter');
const productsGetByCategory = require('./product/productGetByCategory/productGetByCategoryRouter');
const productsUpdate = require('./product/productUpdate/productUpdateRouter');

router.use('/productscreate', productsCreate);
router.use('/products', productsDelete);
router.use('/products', productsGetAll);
router.use('/products', productsGetByPk);
//router.use('/products', productsGetByCategory);
router.use('/products', productsUpdate);


module.exports = router;