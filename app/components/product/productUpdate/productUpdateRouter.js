const {Router} = require('express');
const controllerUpdate = require('./productUpdateController');

const routerUpdate = new Router();

routerUpdate.route('/:id')
    .put(controllerUpdate.updateProduct);

module.exports = routerUpdate;