const db = require('../../../../config/sequelize');
let Product = require('../../../../config/models/product');

Product = Product(db.sequelize, db.Sequelize);

const getProductById = async(id) => {
    const product = await Product.findByPk(id);
    if(!product) return null;
    const productFormatted = {
            productId: product.product_id,
            productHref: product.product_href,
            productName: product.product_name,            
            productCategory: product.product_category,
            productDescription: product.product_description,
            productPhoto: product.product_photo,
            productPrice: product.product_price,
            productAmount: product.product_amount
        };
    return productFormatted;
};

module.exports = {getProductById};