


let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");



function calcular(){

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebidaPP(duracao) * adultos + (bebidaPP(duracao)/2 * criancas);
   
    resultado.innerHTML = `<p>${qtdTotalCarne / 1000} Kg de carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 350)} Latas de cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000)} Garrafas de cerveja</p>`


}

//Calula a quantidade de carne necessária usando o parâmetro de quantidade de horas que o evento irá durar.
function carnePP(duracao){

    if (duracao >= 6){
     return  650;
    } else{
           return  450;
          }

}
//Calula a quantidade de cerveja necessária usando o parâmetro de quantidade de horas que o evento irá durar.
function cervejaPP(duracao){

    if (duracao >= 6){
     return  2000;
    } else{
           return  1200;
          }

}

//Calula a quantidade de bebidas não alcólias necessária usando o parâmetro de quantidade de horas que o evento irá durar.

function bebidaPP(duracao){

    if (duracao >= 6){
     return  1500;
    } else{
           return  1000;
          }

}
