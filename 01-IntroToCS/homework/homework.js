'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var data = num.split(""); //se encierra en una variable al método split(), el cual divide al parámetro num y lo devuelve en un nuevo array separado por strings ["1", "0", "0", "1"]
  data = data.reverse(); //se le aplica a la variable data, el método reverse(), que invierte el órden del parámetro que se le pasa.

  for(var i = 0; i < num.length; i++){ // se recorre con un for() el array en donde se dividió a num, el cual está invertido.
    var factor = 2 ** i; // Math.pow(2, i); //se guarda en una varable la operación a ejecutar (2 elevado al numero que está en la posición i)
    var resultado = resultado + factor * data[i];
  }
  return resultado;
} 

function DecimalABinario(num) {
  // tu codigo aca
  var result = ""; //se almacenta el resultado en un string, ya que el test pide un string como resultado final.

  while(num > 0){
    num = Math.floor(num / 2); //num se divide entre 2, y se le aplica el método Math.floor, dado el caso en que la división entre 2 dé como resultado, un decimal.
    result = (num % 2) + result; //al resultado de num, se le aplica el módulo de 2, y se le suma result, para que se convierta en string.
  }
  return result;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}