const {Router} = require('express');
const controllerGetAll = require('./userGetAllControler');

const routerDelete = new Router();

routerDelete.route('/')
    .get(controllerGetAll.getUsers);

module.exports = routerDelete;