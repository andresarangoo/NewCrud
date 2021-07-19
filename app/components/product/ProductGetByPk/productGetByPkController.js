const httpStatus = require('http-status');
const Product = require('./productGetByPk');

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

module.exports = getProductById;