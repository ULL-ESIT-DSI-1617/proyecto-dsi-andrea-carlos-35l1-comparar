var Igual = require('../lib/comparar.js');

describe("Función comparar", function(){
  it("La función comparar debe devolver el resultado de la solicitud de secuencia", function() {
    var result = comparar("Primos(5)");
    result.should.be.equal("1, 2, 3, 5, 7");
  }

})
