
function Titular(nome) {
    this.nome = nome;
}

// CONSTRUTOR DE CONTA
function Conta(agencia, conta, tipo, saldo, titular) {
    this.agencia = agencia;
    this.numero = conta;
    this.tipo = tipo;
    this.saldo = saldo;
    this.titular = titular instanceof Titular ? titular : null;
}

Conta.prototype.deposita = function(valor) {
    return this.saldo += valor;
}


let contaJoao = new Conta(1065, 123, 'cc', 20, new Titular('João'));
let contaPedro = new Conta(1090, 321, 'ci', 10);
let contaMaria = new Conta(1102, 435, 'cp', 50);
console.log('Saldo => ' + contaMaria.deposita(10));

console.log(contaJoao);
console.log(contaPedro);
console.log(contaMaria);