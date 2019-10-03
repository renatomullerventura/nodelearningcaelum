const express = require('express');
const load = require('express-load');
const bodyParser = require('body-parser');

module.exports = function () {

    const app = express();
    app.use(bodyParser.urlencoded());
    app.use(express.static('./public'));
    app.set('view engine', 'ejs');

    load('routes')
        .then('infra')
        .into(app)
    ;

    return app;
};
