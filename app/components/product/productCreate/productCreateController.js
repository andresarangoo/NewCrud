const httpStatus = require('http-status');
const Product = require('./productCreate');

const createProduct = async(req,res) => {
    const {productHref, productName, productCategory, productDescription, productPhoto, productPrice} = req.body;
    if(!productHref || !productName || productCategory || productDescription || !productPhoto || !productPrice){
        return res
            .status(httpStatus.BAD_REQUEST)
            .send({message: 'Información incompleta'})
    }
    try {
        const product = await Product.createProduct(req.body);
        return res
            .status(httpStatus.CREATED)
            .send(product);
    } catch (error) {
        return res
            .status(httpStatus.INTERNAL_SERVER_ERROR)
            .send({message: 'No se pudo crear el producto'});
    }
};

module.exports = {createProduct};