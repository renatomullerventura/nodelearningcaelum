module.exports = function () {

    const express = require('express');
    const load = require('express-load');
    const app = express();

    app.use(express.static('./public'));
    app.set('view engine', 'ejs');

    // require('./routes/produtos')(app);

   console.log(
       load('routes')
            .then('infra')
            .into(app)
        );

    return app;
};
