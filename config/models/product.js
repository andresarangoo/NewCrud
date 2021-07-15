const { sequelize } = require("../sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Product', {

        product_id:{
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        product_href:{
            type: DataTypes.STRING(250),
            allowNull: false
        },
        
        product_name: {
            type: DataTypes.STRING(250),
            allowNull: false
        },

        product_photo: {
            type: DataTypes.STRING(250),
            allowNull: false 
        }, 

        product_price: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        }
    },{
        tableName: 'Product',
        timestamps: false
    });
};