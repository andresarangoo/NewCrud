const server = require ('./config/server');
const express = require('express'); //Importamos express para ayudarnos en la app
const app = express();

const mysqlAdmin = require('node-mysql-admin');
app.use (mysqlAdmin(app))

server(app);

app.listen(app.get('port'), () =>{
    console.log(`The app is listening on the port ${app.get('port')}`)
});