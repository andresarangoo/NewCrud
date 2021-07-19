const {Router} = require ('express');
const controllerGetByPk = require ('./productGetByPkController');

const routerGetByPk  = new Router();

routerGetByPk .route('/:id')
    .get(controllerGetByPk.getProductById);

module.exports = routerGetByPk;