const {Sequelize} = require('sequelize');

const host = '';
const user = '';
const password = '',
const database = '';
const dialect = 'mysql';
const db = {};

const sequelize = new Sequelize (database, user, password, {
    host,
    dialect
});

sequelize.sync({alter: true}).then(()=>{console.log("listo")}).catch(error =>{console.error(error)});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;