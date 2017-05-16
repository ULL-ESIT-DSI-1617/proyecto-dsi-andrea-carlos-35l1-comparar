var comparar = require('../lib/comparar.js');
var should = require('should');
describe("Función comparar", function(){
  it("La función comparar debe devolver el resultado de la solicitud de secuencia", function() {
    var result = comparar("Primos(5)");
    result.should.be.equal("1, 2, 3, 5, 7");
  })
  it("La función comparar debe devolver el resultado de la solicitud de secuencia", function() {
    var result = comparar("Primos(5) Igual Primos(5)");
    result.should.be.equal("1, 2, 3, 5, 7");
  })
  it("La función comparar con la operacion diferencia debe devolver el resultado de la solicitud de secuencia", function() {
    var result = comparar("Primos(6) Diferencia Primos(5)");
    result.should.be.equal("11");
  })
})
