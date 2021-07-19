const {Router} = require ('express');
const controllerGetAll = require ('./productController');

const routerDelete = new Router();

routerDelete.route('/')
    .get(controllerGetAll.getProducts);

module.exports = routerDelete;