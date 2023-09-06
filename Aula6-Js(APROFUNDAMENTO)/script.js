// tipos de funções

//Declarativa : 
function msg(){
    console.log("Hellow world!");
}

msg();

//Expressões de funções - Função atribuidas à expressões
var funcao = function(){
    console.log("Var função!")
};

funcao();

//Arrow function - Anônimas de sintaxe curta, e portanto não podem ser nomeadas
var arrowFuncao = () => {
    console.log("Arrow function");
}

arrowFuncao();