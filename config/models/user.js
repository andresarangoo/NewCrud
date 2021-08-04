const { sequelize } = require("../sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {

        user_id:{
            type: DataTypes.INTEGER(9),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        
        user_name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },

        user_email: {
            type: DataTypes.STRING(50),
            allowNull: false
        },

        user_adress: {
            type: DataTypes.STRING(50),
            allowNull: false
        },

        user_photo: {
            type: DataTypes.STRING(250),
            allowNull: true 
        }, 

        user_money: {
            type: DataTypes.INTEGER(9),
            allowNull: false,
        },

        user_product: {
            type: DataTypes.INTEGER(9),
            allowNull: true,
            references: {
                model: 'Product',
                key: 'product_id'
            }
        }
    },{
        tableName: 'User',
        timestamps: false
    });
};