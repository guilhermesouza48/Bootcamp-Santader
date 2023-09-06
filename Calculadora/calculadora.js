function calculadora(){
    const operacao = prompt("Escolha uma operação:\n 1 - Soma (+) \n 2 - substração (-) \n 3 - divisão (/) \n 4 - divisão inteira (%) \n 5 - multiplicação (*) \n 6 - potênciação (**) \n");

    let primeiroNumero = Number(prompt("Insira o primeiro valor: "));
    let segundoNumero = Number(prompt("Insira o segundo valor: "));
    let resultado;

    function soma(){
        resultado = primeiroNumero + segundoNumero;
        alert("Resultado: "+ primeiroNumero +' + '+ segundoNumero + ' = ' + resultado);
        novamente();
    };

    function subtracao(){
        resultado = primeiroNumero - segundoNumero;
        alert("Resultado: "+ primeiroNumero +' - '+ segundoNumero + ' = ' + resultado);
        novamente();
    };

    function divisao(){
        resultado = primeiroNumero / segundoNumero;
        alert("Resultado: "+ primeiroNumero +' / '+ segundoNumero + ' = ' + resultado);
        novamente();
    };

    function potencia(){
        resultado = primeiroNumero ** segundoNumero;
        alert("Resultado: "+ primeiroNumero +' ** '+ segundoNumero + ' = ' + resultado);
        novamente();
    };

    function divisaoInt(){
        resultado = primeiroNumero % segundoNumero;
        alert("Resultado: "+ primeiroNumero +' % '+ segundoNumero + ' = ' + resultado);
        novamente();
    };

    function multiplicacao(){
        resultado = primeiroNumero * segundoNumero;
        alert("Resultado: "+ primeiroNumero +' * '+ segundoNumero + ' = ' + resultado);
        novamente();
    };

    function novamente () {
        let opcoes = prompt("Você deseja usar a calculadora novamente ? \n 1 - Sim \n 2 - Não ")

        if (opcoes == 1){
            calculadora();
        } else if (opcoes == 2){
            alert("Obrigado por utilizar a calculadora online!");
        } else {
            alert("ERROR: OPÇÃO INVÁLIDA!!!");
            novamente();
        }
    }

    
    
    if (operacao == 1){
        soma();
    } else if (operacao == 2){
        subtracao();
    } else if (operacao == 3){
        divisao();
    } else if (operacao == 4) {
        divisaoInt();
    } else if (operacao == 5) {
        multiplicacao();
    } else if (operacao == 6) {
        potencia();
    } else {
        console.error("ERROR!!! ESCOLHA NÚMERO VÁLIDO!", operacao);
    }
}




calculadora();