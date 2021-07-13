const express = require('express');
const cors = require('cors');
const routes = require('../app/components/routes');
const port = process.env.PORT || 3000;

const server = (app) => {
    app.disable('x-powered-by');
    app.set('port', port);
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(cors());
    app.use('/', routes);

    app.get('/', (req,res) => {
        res.send('<h1>Funciona!</h1>')
    });
};

module.exports = server;