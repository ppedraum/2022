/* var a = 20

let b = 20

const c = 20

var arr = [1,2,3,4,5,6]

function fun(x){
    let y = x+1
    return y
}

console.log(a)
console.log(fun(1)) */

const endereco={
    logradouro: "Blablalbal",
    numero: 123
}

const cliente={
    nome: "João",
    idade: 23,
    peso: 60,
    altura: 160,
    endereco:{
        logradouro: "Rua João Ninguém",
        numero: 445
    }
}
//Objeto cliente, objeto endereço pertence ao objeto cliente

console.log(cliente.endereco)