const db = require('../../../../config/sequelize');
let Product = require('../../../../config/models/product');

const deleteProduct = async (product_id) => {
    const deleteRow = await Product.destroy({where: {product_id}});
    return deleteRow;
};

module.exports = deleteProduct;