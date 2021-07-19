const httpStatus = require('http-status');
const Product = require('./productGetByCategory');

const getByCategory = async(req,res) => {
    const {category} = req.params;
    try {
        const products = await Product.getByCategory(category);
        if(!products){
            return res
                .status(httpStatus.NOT_FOUND)
                .send({ message: 'No se encontraron productos' });
        }else{
            return res
            .status(httpStatus.OK)
            .send(products);
        }
    } catch (error) {
        return res
            .status(httpStatus.INTERNAL_SERVER_ERROR)
            .send({message: 'Ocurrio un error'});
    }
};

module.exports = {getByCategory};