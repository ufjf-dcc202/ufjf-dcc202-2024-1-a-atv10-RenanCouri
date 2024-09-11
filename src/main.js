import{getJoao,getMaria}from "./joaoEMaria.js";

console.log('módulo main');

let pluralParaJoao='';
let pluralParaMaria='';
if(getJoao()>1)
    pluralParaJoao='s';
if(getMaria()>1)
    pluralParaMaria='s';
    
console.log('João tem ',getJoao(), ' maçã'+pluralParaJoao);
console.log('Maria tem ',getMaria(), ' maçã'+pluralParaMaria);
// Se colocar só o nome da função, sem os parênteses, o console imprime todo o corpo da função. Apenas algo que gostaria de registrar.