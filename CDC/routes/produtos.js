module.exports = (app) => {
    app.get('/produtos', (req, res) => {

        const conn = require('../infra/createDbConnection');

        conn.query('SELECT * FROM livros;', (err, result) => {
            console.log(result);

            res.render('produtos/lista', {resultado: result } );

        });
    });
    app.get('/produtos/adicionar', (req, res) => {
        res.render('produtos/adicionar');
    })
    app.post('/produtos/adicionar', (req, res) => {
        const conn = require('../infra/createDbConnection');
        
        console.log(req.body);
        
/*
        conn.query('SELECT * FROM livros;', (err, result) => {
            console.log(result);

            res.render('produtos/lista', {resultado: result } );

        });*/
      })
};