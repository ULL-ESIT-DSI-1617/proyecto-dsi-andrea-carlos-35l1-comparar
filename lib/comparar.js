var Fibonacci = require('../../Fibonacci/lib/Fibonacci.js');
var Primos = require('../../Primos/lib/Primos.js');
var Secuencia = require('../../Secuencia/lib/Secuencia.js');
var Igual = require('../../Igual/lib/Igual.js');

var comparar = function(temp)
{
  var regexp = /([a-zA-Z]*)\(((?:\d)*)\)(?:\s)?(?:([a-zA-Z]*)\((\d)\))?/
  var array = temp.match(regexp);
  var i = 0;
  var count = 0;
  for(i = 0; i < array.length; i++)
  {
    if(array[i] != undefined) count++;
  }

  if(count == 3)
  {
    var nombre1 = array[1];
    var num1 = array[2];

    var sec1 = new Secuencia.type[nombre1](num1);
    try{
      converted.innerHTML = sec1.getSecuencia();
    }
    catch(e)
    {
      console.log("error por definir")
    }
      return sec1.getSecuencia();
  }
  else if(count == 5)
  {
    var nombre1 = array[1];
    var num1= array[2];
    var nombre2 = array[3];
    var num2 = array[4];
    console.log(Secuencia.type);
    console.log(nombre1);
    console.log(Secuencia.operaciones.Igual);
    var sec1 = new Secuencia.type[nombre1](num1);
    var sec2 = new Secuencia.type[nombre2](num2);

    try{
      converted.innerHTML = sec1.operar(sec2, 'Igual');
    }
    catch(e)
    {
      console.log("error por definir")
    }

    return sec1.operar(sec2, 'Igual');
  }
}
module.exports = comparar;
