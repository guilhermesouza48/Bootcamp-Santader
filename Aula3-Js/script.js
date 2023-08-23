// Vetores ou arrays

// Como declarar um array
let array = [ 'string', 1, true];
console.log(array);

// Pode guardar vários tipos de dados
let arrayteste = [ 'string', 1, true, ['array1'],['array2']]
console.log(arrayteste[0]);

// forEach
array.forEach(function(item, index){
    console.log(item, index);
})

// Push 
array.push(10);

// Pop
array.pop();

// Shift
array.shift();

// unshift
array.unshift(100);

// indexOf
console.log(array.indexOf(true));

// splice
arrayteste.splice(0, 3);

// slice
let novoArray = arrayteste.slice(0, 3);
console.log(novoArray);

// Object 

let Object = {
    nome: 'Gui',
    masc: true,
    peso: 65.5,
    jogosFav: ["HollowKgnith", "God of war"],
    objetoInterno: {
        objetoIn: "objetoInterno"
    }
};

console.log(Object);

console.log(Object.nome);

console.log(Object.objetoInterno);

var nomePessoa = Object.nome
console.log(nomePessoa);

var { peso, jogosFav } = Object
console.log( peso, jogosFav );