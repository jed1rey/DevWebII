//Faça um programa que recebe um número inteiro e verifique se esse número é par ou ímpar.
namespace exercicio03 {
    let numero: number = 4

    let situacao: boolean = numero % 2 == 0 ? true : false;  //true: par false: impar

    if (!situacao) {
        console.log(`O número ${numero} é impar`)
    }
    else {
        console.log(`O número ${numero} é par`)
    }


}

