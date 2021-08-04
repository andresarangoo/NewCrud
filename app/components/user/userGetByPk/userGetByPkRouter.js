const {Router} = require('express');
const controllerGetByPk = require('./userGetByPkController');

const routerGetByPk  = new Router();

routerGetByPk.route('/:id')
    .get(controllerGetByPk.getUserById);

module.exports = routerGetByPk;