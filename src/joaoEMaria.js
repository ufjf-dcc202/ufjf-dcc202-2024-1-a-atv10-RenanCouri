console.log('módulo joaoEMaria');

let joao=1;
let maria=2;

function getJoao(){
    return joao;
}
function getMaria(){
    return maria;
}
function setJoao(valor){
   joao=valor;
}
function setMaria(valor){
    maria=valor;
 }
export{ getJoao, getMaria };