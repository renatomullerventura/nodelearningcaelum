const express = require('express');
const load = require('express-load');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

module.exports = function () {

    const app = express();



    // ServiceWorkerRegistration(app);
    
    // PARA USAR TEMPLATES E INTERPOLATION
    app.set('view engine', 'ejs');

    // Parse incoming request bodies in a middleware 
    // before your handlers, available under the req.body property.
    // COLOCA NO req.body os parametros de requisição
    app.use(bodyParser.urlencoded());

    // VALIDAÇÃO DE FORMULÁRIO
    // 
    app.use(expressValidator());

    app.use(bodyParser.json());

    app.use((req, resp, next) => {
        resp.header('Access-Controll-Allow-Origin', '*');
        next();
    })

    load('routes')
        .then('infra')
        .into(app)
    ;

    app.use(express.static('./public'));

    app.use((req, resp) => {
        resp.status(500)
        .render('erros/500')
        ;
    })

    app.use((req, resp) => {
        resp.status(404)
        .render('erros/404')
        ;
    })


    return app;
};
