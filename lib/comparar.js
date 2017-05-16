var Fibonacci = require('@ull-andrea-carlos/fibonacci');
var Primos = require('@ull-andrea-carlos/primos');
var Secuencia = require('@ull-andrea-carlos/secuencia');
var Igual = require('@ull-andrea-carlos/igual');
/**
 * Proyecto: Comparador de secuencias.
 *
 * Función que define la función comparar, que recibirá una entrada del usuario y devolverá el resultado de la operación o petición
 * @param {String} temp
 * @return {String}
 */
var comparar = function(temp)
{
  var regexp = /([a-zA-Z]*)\(((?:\d)*)\)(?:\s)?(?:([a-zA-Z]*)\((\d)\))?/
  //var regexp = /([a-zA-Z]*)\(((?:\d)*)\)(?:\s)*(?:([a-zA-Z]*)(?:\s)*([a-zA-Z]*)\((\d)\))?/
  var array = temp.match(regexp);
  var i = 0;
  var count = 0;
  console.log(array[0]);
  for(i = 0; i < array.length; i++)
  {
    if(array[i] != undefined) count++;
  }
  console.log(count);
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
    var operacion = array[3];
    var nombre2 = array[4];
    var num2 = array[5];
    console.log(Secuencia.type);
    console.log(nombre1);
    console.log(Secuencia.operaciones.Igual);
    var sec1 = new Secuencia.type[nombre1](num1);
    var sec2 = new Secuencia.type[nombre2](num2);

    try{
      converted.innerHTML = sec1.operar(sec2, operacion);
    }
    catch(e)
    {
      console.log("error por definir")
    }

    return sec1.operar(sec2, 'Igual');
  }
}
module.exports = comparar;
