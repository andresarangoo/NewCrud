const {Sequelize} = require('sequelize');
require('dotenv').config({path:'./.env'}); //no es necesario en el lambda

const host = process.env.HOST || '127.0.0.1';
const user = process.env.USER || 'root';
const password = process.env.PASSWORD || '';
const database = process.env.DB || 'test';
const port = process.env.PORT || '3306';
const dialect = process.env.DIALECT || 'mysql';

const sequelize = new Sequelize (database, user, password, {
    host,
    port,
    dialect
});

sequelize.sync({alter: true}).then(()=>{console.log("listo")}).catch(error =>{console.error(error)});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;