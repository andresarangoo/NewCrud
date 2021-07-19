const httpStatus = require('http-status');
const Product = require('./productDelete');

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

module.exports = deleteProduct;