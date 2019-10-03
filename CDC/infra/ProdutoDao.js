function ProdutoDao(connection) {
    this.connection = connection;    
}

ProdutoDao.prototype.lista = function(callBack) {
    this.connection.query('SELECT * FROM livros;', callBack);
}

ProdutoDao.prototype.salvar = function(livro, callBack) {
    this.connection.query('INSERT INTO livros SET ? ', livro, callBack);
}

module.exports = function () {
    return ProdutoDao;
};