var comparar = require('../lib/comparar.js');
var should = require('should');
describe("Función comparar", function(){
  it("La función comparar debe devolver el resultado de la solicitud de secuencia", function() {
    var result = comparar("Primos(5)");
    result.should.be.equal("1, 2, 3, 5, 7");
  })

})
//var regexp = /([a-zA-Z]*)\(((?:\d)*)\)(?:\s)*(?:([a-zA-Z]*)(?:\s)*([a-zA-Z]*)\((\d)\))?/
