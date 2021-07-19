const db = require('../../../../config/sequelize');
let Product = require('../../../../config/models/product');

Product = Product(db.sequelize, db.Sequelize);

const createProduct = async(body) => {
    const {productHref, productName, productCategory, productDescription, productPhoto, productPrice} = body;
    const newProduct = await Product.create({
        product_href: productHref,
        product_name: productName,
        product_category: productCategory,
        product_description: productDescription,
        product_photo: productPhoto,
        product_price: productPrice
    });
    const productFormatted = {
        productHref: newProduct.product_href,
        productName: newProduct.product_name,
        productCategory: newProduct.product_category,
        productDescription: newProduct.product_description,
        productPhoto: newProduct.product_photo,
        productPrice: newProduct.product_price
    };
    return productFormatted;
};

module.exports = createProduct;