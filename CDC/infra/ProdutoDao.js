function ProdutoDao(connection) {
    this.connection = connection;    
}

ProdutoDao.prototype.lista = function(callBack) {
    this.connection.query('SELECT * FROM livros;', callBack);
}

module.exports = function () {
    return ProdutoDao;
};