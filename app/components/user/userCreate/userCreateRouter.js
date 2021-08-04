const {Router} = require('express');
const controllerCreate = require('./userCreateController');

const routerCreate = new Router();

routerCreate.route('/')
    .post(controllerCreate.createUser);

module.exports = routerCreate;