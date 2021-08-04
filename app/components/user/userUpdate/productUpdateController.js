const httpStatus = require('http-status');
const Product = require('./productUpdate');

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

module.exports = {updateProduct};