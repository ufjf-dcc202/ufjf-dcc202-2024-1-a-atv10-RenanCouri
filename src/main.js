import{getJoao,getMaria,deJoaoParaMaria,deMariaParaJoao}from "./joaoEMaria.js";

console.log('módulo main');

let pluralParaJoao='';
let pluralParaMaria='';
if(getJoao()>1)
    pluralParaJoao='s';
if(getMaria()>1)
    pluralParaMaria='s';
let valor=-3;
   
console.log('João tem ',getJoao(), ' maçã'+pluralParaJoao);
console.log('Maria tem ',getMaria(), ' maçã'+pluralParaMaria);
deJoaoParaMaria();

console.log('João tem ',getJoao(), ' maçãs');
console.log('Maria tem ',getMaria(), ' maçãs');
deMariaParaJoao();
console.log('João tem ',getJoao(), ' maçãs');
console.log('Maria tem ',getMaria(), ' maçãs');

// Se colocar só o nome da função, sem os parênteses, o console imprime todo o corpo da função. Apenas algo que gostaria de registrar.