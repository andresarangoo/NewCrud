const {Sequelize} = require('sequelize');

const database = 'test';
const user = 'root';
const password = '';
const host = '127.0.0.1';
const port = '3306';
const dialect = 'mysql';

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