//ex 02: Faça um programa que receba as três notas, calcule e mostre a média ponderada e o conceito mostrado nas tabelas
namespace exercicio01 {
    let notaTrabLab: number, notaAvFinal: number, notaExameFinal: number;
    let conceito: string;
    const pesoTrabLab: number = 2, pesoAvFinal: number = 3, pesoExameFinal: number = 4;

    notaTrabLab = 2, notaAvFinal = 7, notaExameFinal = 9;

    let media: number = (notaTrabLab * pesoTrabLab + notaAvFinal * pesoAvFinal + notaExameFinal * pesoExameFinal) / (pesoTrabLab + pesoAvFinal + pesoExameFinal);

    if (media <= 10 && media >= 8) {
        conceito = "A";
    } else if (media >= 7 && media <8) {
        conceito = "B";
    } else if (media >= 6 && media <7 ) {
        conceito = "C";
    } else if (media >= 5 && media <6) {
        conceito = "D";
    } else {
        conceito = "E";
    }

    console.log(`A média final é ${media.toFixed(2)} e o conceito recebido é ${conceito}`);

        
    }

