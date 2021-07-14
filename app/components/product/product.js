const db = require('../../../config/sequelize');
let Product = require('../../../config/models/product');
const { where } = require('sequelize/types');

Product = Product(db.sequelize, db.Sequelize);

const getProducts = async() => {
    const products = await Product.findAll();
    const productsFormatted = products.map (product => {
        return {
            productID: product.product_id,
            productHref: product.product_href,
            productName: product.product_name,
            productPhoto: product.product_photo,
            productPrice: product.product_price
        }
    });
    return productsFormatted;
};

const getProductById = async(id) => {
    const product = await Product.findByPK(id);
    if(!product) return null;
    const productFormatted = {
            productName: product.product_name,
            productHref: product.product_href,
            productPhoto: product.product_photo,
            productPrice: product.product_price
        };
    return productFormatted;
};

const createProduct = async(body) => {
    const {productName, productHref, productPhoto, productPrice} = body;
    const newProduct = await Product.create({
        product_name: productName,
        product_href: productHref,
        product_photo: productPhoto,
        product_price: productPrice
    });
    const productFormatted = {
        productName: newProduct.product_name,
        productHref: newProduct.product_href,
        productPhoto: newProduct.product_photo,
        productPrice: newProduct.product_price
    };
    return productFormatted;
};

const updateProduct = async(product_id, body) => {
    const {productName, productHref, productPhoto, productPrice} = body;
    const newDataProduct = {
        product_name: productName,
        product_href: productHref,
        product_photo: productPhoto,
        product_price: productPrice
    }
    const [updatedRow] = await Product.update({...newDataProduct}, {where: {product_id}});
    return updatedRow;
};

const deleteProduct = async (product_id) => {
    const deleteRow = await Product.destroy({where: {product_id}});
    return deleteRow;
};

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};