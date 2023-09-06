var jogador1 = 0;
var jogador2 = 0;
var placar;

if (
  jogador1 != -1 && jogador2 != -1
    ? console.log("Os jogadores são válidos")
    : console.log("Jogadores Invalidos")
);
{
  if (jogador1 > 0 && jogador2 == 0) {
    console.log("Jogador 1 marcou ponto!");
    placar = jogador1 + 1;
  } else if (jogador2 > 0 && jogador1 == 0) {
    console.log("Jogador 2 marcou ponto!");
    placar = jogador2 + 1;
  } else {
    console.log("Ninguém marcou ponto!");
  }
}

switch (placar) {
  case (placar = jogador1 > jogador2):
    console.log("Jogador 1 ganhou");
    break;
  case (placar = jogador2 > jogador1):
    console.log("Jogador 2 ganhou");
    break;
  default:
    console.log("Ninguem ganhou");
}

// For 

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
let object = { propriedade1 : 'valor1', propriedade2 : 'valor2', propriedade3 : 'valor3', propriedade4 : 'valor4'};

for (let i = 0; i < array.length; i++) {
    console.log(i);
}

// For/in - Executa repetição a partir de uma propriedade
for (let i in array) {
	console.lgo(i);
}

// Com object
for(i in object){
	console.log(i);
}

// For/of - Executa repetição a partir de valor
for (i of array){
	console.log(i);
}

// WHILE ("enquanto" determinada instrução for verdadeira)

var a = 0;

while(a < 10){
	a++;
	console.log(a);
}

// DO/WHILE - ("Até que" determinada condição seja falsa, verficação feita depois)

do {
  a++;
  console.log(a);
}while (a < 10);