function comparaNumeros(num1, num2){
    const saoIguais = num1 === num2;
    const soma = num1 + num2;
/* if normal
    if(saoIguais){
    return'São iguais';
    }else{
    return 'não são iguais';
    }
    */

    // if ternario
    return saoIguais ? 'São iguais' : 'Não são iguais';
}