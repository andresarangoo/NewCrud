const db = require('../../../../config/sequelize');
let Product = require('../../../../config/models/product');

Product = Product(db.sequelize, db.Sequelize);

const getByCategory = async(category) => {
    const {products, numberOfProducts} = await Product.findAndCountAll({where: {category: product_category}});
    console.log(products);
    console.log(numberOfProducts);
}

module.exports = {getByCategory};