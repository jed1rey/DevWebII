//Crie um algoritmo que solicite o nome de um usuário e exiba uma mensagem de boas-vindas personalizada de acordo com o horário do dia (bom dia, boa tarde ou boa noite).
namespace exercicio04 {
    let nome: string;
    let horario: [number, number];
    nome = "Fulano";
    horario = [19, 50];

    if (horario[0] >= 6 && horario[0] < 12) {
        console.log(`Bom dia, ${nome}`)
    } else if (horario[0] >= 12 && horario[0] < 18) {
        console.log(`Boa tarde, ${nome}`);
    } else {
        console.log(`Boa noite, ${nome}`);
    }

    console.log(`O horário é ${horario[0]}:${horario[1]}`);
}




