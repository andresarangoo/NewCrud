const db = require('../../../../config/sequelize');
let Product = require('../../../../config/models/product');

Product = Product(db.sequelize, db.Sequelize);

const deleteProduct = async (product_id) => {
    const deleteRow = await Product.destroy({where: {product_id}});
    return deleteRow;
};

module.exports = deleteProduct;