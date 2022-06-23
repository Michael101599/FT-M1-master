'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var data = num.split("");
  data = data.reverse();

  for(var i = 0; i < num.length; i++){
    var factor = 2 ** i; // Math.pow(2, i);
    var resultado = resultado + factor * data[i];
  }
  return resultado;
} 

function DecimalABinario(num) {
  // tu codigo aca
  var result = "";

  while(num > 0){
    num = Math.floor(num / 2);
    result = (num % 2) + result;
  }
  return result;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}