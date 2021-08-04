const {Router} = require('express');
const controllerDelete = require('./productDeleteController');

const routerDelete = new Router();

routerDelete.route('/:id')
    .delete(controllerDelete.deleteProduct);

module.exports = routerDelete;