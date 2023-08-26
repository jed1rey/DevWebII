namespace exemplo02 {
    let x: number = 1;


    //while
    while (x <= 53) {
        console.log(x);
        x++;

    }



    let lista: number[] = [10, 3, 4, 1, 7, 50]
    let maior: number = 0;
    let i: number = 1
    for (i = 0; i <= lista.length; i++) {
        if (maior < lista[i]) {
            maior = lista[i];
            i++;


        }

    }


    console.log(maior)

   let numUser: number = 30
   let y: number = 0
 
    for (y = 0; y <= numUser; y++)
    if (y % 3 == 0){
        console.log(y)
        
    }
    


}