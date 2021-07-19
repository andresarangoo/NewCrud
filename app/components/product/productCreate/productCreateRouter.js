const {Router} = require ('express');
const controllerCreate = require ('./productCreateController');

const routerCreate = new Router();

routerCreate.route('/')
    .post(controllerCreate.createProduct);

module.exports = routerCreate;