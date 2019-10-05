function ProdutoDao(connection) {
    this.connection = connection;    
}

ProdutoDao.prototype.lista = function(callBack) {
    this.connection.query('SELECT * FROM livros;', callBack);
}

ProdutoDao.prototype.busca = function(livro, callBack) {
    var listaWhere = [];
    if (livro.titulo !== undefined) {
        listaWhere.push(`titulo LIKE '%${livro.titulo}%'`);
    }
    if (livro.descricao !== undefined) {
        listaWhere.push(`descricao LIKE '%${livro.descricao}%'`);
    }
    if (livro.id !== undefined) {
        listaWhere.push(`id = ${livro.id}`);
    }
    console.log(`Foi SELECT * FROM livros WHERE ${listaWhere.join(' OR ')};`)
    this.connection.query(`SELECT * FROM livros WHERE ${listaWhere.join(' OR ')};`, callBack);
}

ProdutoDao.prototype.salvar = function(livro, callBack) {
    this.connection.query('INSERT INTO livros SET ? ', livro, callBack);
}

ProdutoDao.prototype.excluir = function(livro, callBack) {
    this.connection.query('DELETE livros WHERE ? ', livro, callBack);
}

module.exports = function () {
    return ProdutoDao;
};