const httpStatus = require('http-status');
const Product = require('./productGetAll');

const getProducts = async(req,res) => {
    try {
        const products = await Product.getProducts();
        return res
            .status(httpStatus.OK)
            .send(products);
    } catch (error) {
        return res
            .status(httpStatus.INTERNAL_SERVER_ERROR)
            .send({message: 'No se pudo obtener la información'});
    }
};

module.exports = {getProducts};