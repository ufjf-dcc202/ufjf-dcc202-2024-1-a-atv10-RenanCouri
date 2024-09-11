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
    if(valor<0)
        valor=0;
   joao=valor;
}
function setMaria(valor){
    if(valor<0)
        valor=0;
    maria=valor;
 }
 function deJoaoParaMaria(){
    maria+=joao;
    joao=0;
 }
 function deMariaParaJoao(){
    joao+=maria;
    maria=0;
 }
export{ getJoao, getMaria,setJoao,setMaria,deJoaoParaMaria,deMariaParaJoao };