//Crie um algoritmo que solicite três números do usuário e exiba o maior deles.

namespace exercicio05 {
    let num01: number, num02: number, num03: number, maior: number; 
    num01 = 12
    num02 = 100
    num03 = 300
    maior = num01


    if (num02 > num01) {
        maior = num02
    }
    else if (maior < num03) {
        maior = num03
    }

    console.log(`O maior número é: ${maior}`);
}



