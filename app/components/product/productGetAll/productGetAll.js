const db = require('../../../../config/sequelize');
let Product = require('../../../../config/models/product');

Product = Product(db.sequelize, db.Sequelize);

const getProducts = async() => {
    const products = await Product.findAll();
    const productsFormatted = products.map (product => {
        return {
            productID: product.product_id,
            productHref: product.product_href,
            productName: product.product_name,
            productCategory: product.product_category,
            poductDescription: product.product_description,
            productPhoto: product.product_photo,
            productPrice: product.product_price
        }
    });
    return productsFormatted;
};

module.exports = getProducts;