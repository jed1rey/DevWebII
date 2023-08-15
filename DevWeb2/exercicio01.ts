namespace exercicio01 {
    let num1: number, num2: number, num3: number, num4: number;
    let nome: string;
    num1 = 6, num2 = 7, num3 = 10, num4 = 5.5;
    nome = 'Paula Abib';
    const soma: number = num1 + num2 + num3 + num4;
    //const não é alteravel
    // var fica público (global), var é privado no local
    console.log (`Olá, ${nome}, a soma dos valores ${num1} + ${num2} + ${num3} + ${num4} é igual a: ${soma}`)
}