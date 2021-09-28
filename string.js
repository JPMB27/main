//strings
const texto1 = "Ola mundo!";
const texto2 = 'Ola mundo!';
const senha1 = "senhaSuperSegura456";
const StringDeNumeros = "3456";

const citacao = "Meu nome é ";
const meuNome = "Joao";


const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'
const cidade = "belo horizonte";
const input = "Belo Horizonte";
const inputMinusculo = input.toLowerCase();
const senha = "minhaSenha123"

console.log(senha.length) // 13 caracteres

console.log(cidade === inputMinusculo); // true

//console.log(cidade === input); // false

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

///meu nome
console.log(citacao + meuNome);
