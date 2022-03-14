// parametros de funcao



function soma(num1, num2){
   return num1 + num2;

}

// console.log(soma(2,2))
// console.log(soma(2456, 22))
// console.log(soma(-838, 30))

function nomeIdade(nome, idade) {

    return `meu nome é ${nome} e minha idade é ${idade}`;
}

//console.log(nomeIdade("Joao", 43))


function multiplicacao(num1 =1, num2=1){
    return num1 * num2;
}


console.log(multiplicacao(soma(4,5), soma(3,3)))


