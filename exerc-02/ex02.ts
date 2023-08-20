//1 - Faça um programa que receba três números obrigatoriamente em ordem crescente e um quarto número que não siga esta regra. Mostre, em seguida, os quatro números em ordem decrescente.

//não consegui fazer a verificação de ordem crescente, apenas a ordenação em decrescente do numero 1 ao numero 3


namespace exercicio02 {
    let num01: number, num02: number, num03: number, num04: number;
    num01 = 9;
    num02 = 1;
    num03 = 10;
    num04 = 3;
    let primeiro: number, segundo: number, terceiro: number;

    let situacao: boolean = num01 > num02 ? true : false;
    if (!situacao) {
        primeiro = num02;
        segundo = num01;
    } else {
        primeiro = num01;
        segundo = num02;
    }

    if (num03 < primeiro) {
        terceiro = num03;
    } else if (num03 < segundo) {
        terceiro = segundo;
        segundo = num03;
    } else {
        terceiro = segundo;
        segundo = primeiro;
        primeiro = num03;
    }

    console.log(`A ordem é: ${primeiro}, ${segundo}, ${terceiro}, ${num04}`);
}

