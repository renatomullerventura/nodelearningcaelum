module.exports = (app) => {
    app.get('/produtos', (req, res) => {

        const conn = app.infra.connectionFactory();

        const ProdutoDao = app.infra.ProdutoDao;

        let produtoDao = new ProdutoDao(conn);

        produtoDao.lista(function (err, result) {
            res.render('produtos/lista', {resultado: result } );
        });

        conn.end();
    });

    app.get('/produtos/form', (req, res) => {
        res.render('produtos/form');
    });

    app.post('/produtos/form', (req, res) => {
        // res.render('produtos/detail', req.body);
        // (req.body);

        const conn = app.infra.connectionFactory();

        const ProdutoDao = app.infra.ProdutoDao;

        let produtoDao = new ProdutoDao(conn);

        let livro = req.body;

        produtoDao.salvar(livro, function (err, result) {
            res.redirect('/produtos');
        });

        conn.end();


    });

    app.get('/produtos/salvo', (req, res) => {
        res.redirect('/produtos/salvo');
    });
};