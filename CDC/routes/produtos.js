module.exports = (app) => {
    app.get('/produtos', (req, res) => {

        const mysql = require('mysql');

        // console.log(mysql);

        const conn = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'cdc_project'
        });

        conn.query('SELECT * FROM livros;', (err, result) => {
            console.log(result);

            res.render('produtos/lista', {resultado: result } );

        });
    });
    app.get('/produtos/adicionar', (req, res) => {
        res.render('produtos/adicionar');
    })
};