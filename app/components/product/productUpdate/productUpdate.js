const db = require('../../../../config/sequelize');
let Product = require('../../../../config/models/product');

Product = Product(db.sequelize, db.Sequelize);

const updateProduct = async(product_id, body) => {
    const {productName, productHref, productPhoto, productPrice} = body;
    const newDataProduct = {
        product_href: productHref,
        product_name: productName,
        product_photo: productPhoto,
        product_price: productPrice
    }
    const [updatedRow] = await Product.update({...newDataProduct}, {where: {product_id}});
    return updatedRow;
};

module.exports = {updateProduct};