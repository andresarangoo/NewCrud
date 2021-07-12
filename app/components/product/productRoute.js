const {Router} = require ('express');
const controller = require ('./productController');

const router = new Router;

router.route('/')
    .get(controller.getProducts);

router.route('/:id')
    .get(controller.getProductById);

router.route('/')
    .post(controller.createProduct);

router.route('/:id')
    .put(controller.updateProduct);

router.route('/:id')
    .delete(controller.deleteProduct);

module.exports = router;