const {Router} = require('express');
const controllerUpdate = require('./userUpdateController');

const routerUpdate = new Router();

routerUpdate.route('/:id')
    .put(controllerUpdate.updateUser);

module.exports = routerUpdate;