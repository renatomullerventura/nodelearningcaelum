const http = require('http');
const assert = require('assert');

describe('Rota de produtos', () => {
    it('Listar produtos', function(done) {

        const opt = {
            href: 'http://localhost:3333/produtos/form',
            hostname: 'localhost',
            port: 3333,
            path: '/produtos',
            headers: {
                'Accept': 'application/json'
            }
        };

        http.get(opt, function(res) {
            assert.equal(res.statusCode, 200, 'Retornou ' + res.statusCode + ' do servidor');
            assert.equal(res.statusMessage, 'OK');//assert(res.statusMessage === 200);
            done();
        });
    });
    it('Cadastrar produtos', function() { });
    xit('Excluir produtos', function() { });
    xit('Alterar produtos', function() { });
})


/*const mocha = require('mocha');
mocha.assert(1==1, 'test');*/