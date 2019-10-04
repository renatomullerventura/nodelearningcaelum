const express = require('express');
const load = require('express-load');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

module.exports = function () {

    const app = express();
    
    app.set('view engine', 'ejs');
    app.use(express.static('./public'));
    app.use(bodyParser.urlencoded());
    app.use(expressValidator());

    app.use(bodyParser.json());

    load('routes')
        .then('infra')
        .into(app)
    ;

    return app;
};
