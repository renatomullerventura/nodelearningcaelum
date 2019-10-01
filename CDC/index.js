const app = require('express')();
const ejs = require('ejs');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
})

// require('./routes/produtos')(app);
app.get('/produtos', (req, res) => {

    const mysql = require('mysql');

    // console.log(mysql);

    const conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'cdc_project'
    });

    console.log(conn);

    /*conn.query('DELETE FROM livros WHERE id > 3', (err, result ) => {
        console.log(result);
    });*/

    conn.query('SELECT * FROM livros', (err, result ) => {
        console.log(result);
    });

    res.render('produtos/lista');
});

app.listen(3333, () => {
    console.log("Server is running.");
})
