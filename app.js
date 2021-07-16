const server = require ('./config/server');
const express = require('express'); 
const app = express();

server(app);

app.listen(app.get('port'), () =>{
    console.log(`The app is listening on the port ${app.get('port')}`)
});