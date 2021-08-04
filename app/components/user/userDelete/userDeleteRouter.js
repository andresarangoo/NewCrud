const {Router} = require('express');
const controllerDelete = require('./userDeleteController');

const routerDelete = new Router();

routerDelete.route('/:id')
    .delete(controllerDelete.deleteUser);

module.exports = routerDelete;