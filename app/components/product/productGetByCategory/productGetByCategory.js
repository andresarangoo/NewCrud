const db = require('../../../../config/sequelize');
let Product = require('../../../../config/models/product');

Product = Product(db.sequelize, db.Sequelize);

const getByCategory = async(category) => {
    const offset = 0;
    const limit = 10;
    const {count, rows} = await Product.findAndCountAll({
        where:{
            product_category: category
        },
        offset,
        limit
    });
    const productsFormatted = rows.map (product => {
        return {
            productID: product.product_id,
            productHref: product.product_href,
            productName: product.product_name,
            productCategory: product.product_category,
            productDescription: product.product_description,
            productPhoto: product.product_photo,
            productPrice: product.product_price
        }
    });
    return {productsFormatted, count};
}

module.exports = {getByCategory};