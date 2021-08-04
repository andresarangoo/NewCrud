const {Router} = require('express');
const router = new Router();

const productsCreate = require('./product/productCreate/productCreateRouter');
const productsDelete = require('./product/productDelete/productDeleteRouter');
const productsGetAll = require('./product/productGetAll/productGetAllRouter');
const productsGetByPk = require('./product/productGetByPk/productGetByPkRouter');
const productsGetByCategory = require('./product/productGetByCategory/productGetByCategoryRouter');
const productsUpdate = require('./product/productUpdate/productUpdateRouter');

const userCreate = require('./user/userCreate/userCreateRouter');
const userGetAll = require('./user/userGetAll/userGetAllRouter');
const userGetByPk = require('./user/userGetByPk/userGetByPkRouter');
const userUpdate = require('./user/userUpdate/userUpdateRouter');
const userDelete = require('./user/userDelete/userDeleteRouter');

router.use('/products', productsCreate);
router.use('/products', productsDelete);
router.use('/products', productsGetAll);
router.use('/product', productsGetByPk); //consultar en express
router.use('/products', productsGetByCategory);
router.use('/products', productsUpdate);

router.use('/user', userCreate);
router.use('/user', userGetAll);
router.use('/user', userGetByPk);
router.use('/user', userUpdate);
router.use('/user', userDelete);

module.exports = router;