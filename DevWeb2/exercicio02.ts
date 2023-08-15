namespace exercicio02 {
    let nota01: number, nota02: number, nota03: number;
    nota01= 8, nota02= 4, nota03= 9;
    const media: number = (nota01 + nota02 + nota03) / 3
    if (media >= 7){
        console.log(`Aluno aprovado com média de: ${media}`)
    }
    else if (media >= 3){
        console.log(`Aluno está em recuperação com média de: ${media}`)
    }
    else {
        console.log(`Aluno reprovado, com média de: ${media}`)
    }
}