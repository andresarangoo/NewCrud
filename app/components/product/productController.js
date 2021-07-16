const httpStatus = require('http-status');
const Product = require('./product');

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

const getProductById = async(req,res) => {
    const {id} = req.params;
    try {
        const product = await Product.getProductById(id);
        if(!product){
            return res
                .status(httpStatus.NOT_FOUND)
                .send({ message: 'No se encontro el producto' });
        }else{
            return res
            .status(httpStatus.OK)
            .send(product);
        }
    } catch (error) {
        return res
            .status(httpStatus.INTERNAL_SERVER_ERROR)
            .send({message: 'Ocurrio un error'});
    }
};

const createProduct = async(req,res) => {
    const {productHref, productName, productPhoto, productPrice} = req.body;
    if(!productHref || !productName || !productPhoto || !productPrice){
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

const updateProduct = async(req,res) => {
    const {id} = req.params;
    const {body} = req;
    try {
        const productWasUpdate = await Product.updateProduct(id, body);
        if (productWasUpdate){
            return res
                .status(httpStatus.OK)
                .send({message: 'Se actualizo'});
        } else{
            return res
                .status(httpStatus.OK)
                .send({message: 'No se actualizo nada, la información sigue igual'});
        }
    } catch (error) {
        return res
            .status(httpStatus.INTERNAL_SERVER_ERROR)
            .send({message: 'Ocurrio un error'});
    }
};

const deleteProduct = async(req,res) => {
    const {id} = req.params;
    try {
        const productWasDelete = await Product.deleteProduct(id);
        if (productWasDelete){
            return res
                .status(httpStatus.OK)
                .send({message: 'Se elimino el registro'});
        } else{
            return res
                .status(httpStatus.OK)
                .send({message: 'El producto buscado no existe'});
        }
    } catch (error) {
        return res
            .status(httpStatus.INTERNAL_SERVER_ERROR)
            .send({message: 'Ocurrio un error'});
    }
};

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};