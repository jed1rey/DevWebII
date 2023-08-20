//Faça um programa que leia um número inteiro entre 1 e 12 e imprima o mês correspondente, sendo 1 para janeiro, 2 para fevereiro, e assim por diante.

namespace exercicio05 {
    let numMes : number;
    let nomeMes: string;

    numMes = 2;

    if (numMes == 1) {
        nomeMes = "janeiro";
    } else if (numMes == 2) {
        nomeMes = "fevereiro";
    } else if (numMes == 3) {
        nomeMes = "março";
    } else if (numMes == 4) {
        nomeMes = "abril";
    } else if (numMes == 5) {
        nomeMes = "maio";
    } else if (numMes == 6) {
        nomeMes = "junho";
    } else if (numMes == 7) {
        nomeMes = "julho";
    } else if (numMes == 8) {
        nomeMes = "agosto";
    } else if (numMes == 9) {
        nomeMes = "setembro";
    } else if (numMes == 10) {
        nomeMes = "outubro";
    } else if (numMes == 11) {
        nomeMes = "novembro";
    } else if (numMes == 12) {
        nomeMes = "dezembro";
    } else {
        nomeMes = "valor inválido";
    }
    
    console.log(`O mês correspondente ao número ${numMes} é ${nomeMes}.`);
}
