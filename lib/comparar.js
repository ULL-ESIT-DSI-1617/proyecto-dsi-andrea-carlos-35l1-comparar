var Secuencia = require('@ull-andrea-carlos/secuencia');
var Fibonacci = require('@ull-andrea-carlos/fibonacci');
var Primos = require('@ull-andrea-carlos/primos');

var Igual = require('@ull-andrea-carlos/igual');
var Diferencia = require('@ull-andrea-carlos/diferencia');
/**
 * Proyecto: Comparador de secuencias.
 *
 * Función que define la función comparar, que recibirá una entrada del usuario y devolverá el resultado de la operación o petición
 * @param {String} temp
 * @return {String}
 */
var comparar = function(temp)
{
  var regexp = /([a-zA-Z]*)\(((?:\d)*)\)(?:\s)*(?:([a-zA-Z]*)(?:\s)*([a-zA-Z]*)\((\d)\))?/
  var array = temp.match(regexp);
  var i = 0;
  var count = 0;
  for(i = 0; i < array.length; i++)
  {
    if(array[i] != undefined) count++;
  }
  if(count == 3)
  {
    var nombre1 = array[1].toLowerCase();
    var num1 = array[2];

    var sec1 = new Secuencia.type[nombre1](num1);
    try{
      converted.innerHTML = sec1.getSecuencia();
    }
    catch(e)
    {
      return sec1.getSecuencia();
    }

  }
  else if(count == 6)
  {
    var nombre1 = array[1].toLowerCase();
    var num1= array[2];
    var operacion = array[3].toLowerCase();
    var nombre2 = array[4].toLowerCase();
    var num2 = array[5];
    var sec1 = new Secuencia.type[nombre1](num1);
    var sec2 = new Secuencia.type[nombre2](num2);

    try{
      converted.innerHTML = sec1.operar(sec2, operacion);
    }
    catch(e)
    {
      return sec1.operar(sec2, operacion);
    }


  }
}
module.exports = comparar;
