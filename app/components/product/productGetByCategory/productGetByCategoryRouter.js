const {Router} = require('express');
const controllerGetByCategory = require('./productGetByCategoryController');

const routerGetByCategory = new Router();

routerGetByCategory.route('/:category')
    .get(controllerGetByCategory.getByCategory);

module.exports = routerGetByCategory;