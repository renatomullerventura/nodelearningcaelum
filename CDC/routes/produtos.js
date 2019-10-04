module.exports = (app) => {
    app.get('/produtos', (req, res) => {

        const conn = app.infra.connectionFactory();

        const ProdutoDao = app.infra.ProdutoDao;

        let produtoDao = new ProdutoDao(conn);

        produtoDao.lista(function (err, result) {
            // content negociation
            res.format({
                html: function() {
                    res.render('produtos/lista', {resultado: result } );
                },
                json: function() {
                    res.json(result);
                }
            });
        });

        conn.end();
    });

    app.get('/produtos/form', (req, res) => {
        res.render('produtos/form', { errors: [], fields: {} });
    });

    app.post('/produtos/form', (req, res) => {
        // res.render('produtos/detail', req.body);
        // (req.body);

        const conn = app.infra.connectionFactory();

        const ProdutoDao = app.infra.ProdutoDao;

        let produtoDao = new ProdutoDao(conn);

        let livro = req.body;

        req.assert('titulo', 'O título é obrigatório.').notEmpty();
        req.assert('descricao', 'A descrição é obrigatória.').notEmpty();
        req.assert('valor', 'O preço deve ser maior que zero e ser maior que zero.').isFloat();

        const errors = req.validationErrors();
        if (errors) {
            console.log({ errors: errors, fields: livro });
            res.render('produtos/form', { errors: errors, fields: livro });
        } else {
            produtoDao.salvar(livro, function (err, result) {
                res.redirect('/produtos/salvo');
            });
        }


        conn.end();

    });

    app.get('/produtos/salvo', (req, res) => {
        res.render('produtos/salvo');
    });

    app.delete('/produtos/deletar', (req, res) => {
        let livro = req.body;

        const conn = app.infra.connectionFactory();

        const ProdutoDao = app.infra.ProdutoDao;

        let produtoDao = new ProdutoDao(conn);

        produtoDao.excluir(livro, function (err, result) {
            res.redirect('/produtos/lista');
        });

        conn.end();
        
    });
};