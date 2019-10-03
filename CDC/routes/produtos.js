module.exports = (app) => {
    app.get('/produtos', (req, res) => {

        const conn = app.infra.createDbConnection();

        const ProdutoDao = app.infra.ProdutoDao;

        console.log(ProdutoDao);

        let produtoDao = new ProdutoDao(conn);

        produtoDao.lista(function (err, result) {
            res.render('produtos/lista', {resultado: result } );
        });

        conn.end();
    });

    app.get('/produtos/adicionar', (req, res) => {
        res.render('produtos/adicionar');
    });
};