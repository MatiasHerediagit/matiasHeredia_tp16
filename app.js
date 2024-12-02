const consultarBicicletas = require("./datosBici"); // Importo el archivo datosBici.js

const dhBici = {//creo el objeto literal
  bicicletas: consultarBicicletas(), // Llamo a la función para obtener las bicicletas

buscarBici: function (id) {//Busca la bici a traves de su ID
const bicicletaEncontrada = this.bicicletas.find(
     (bicicleta) => bicicleta.id === id
);
return bicicletaEncontrada || null;
},

venderBici: function (id) { //filtra la bici a traves de su ID
const bicicleta = this.buscarBici(id);
if (bicicleta) {
     bicicleta.vendida = true;
     return bicicleta;
} else {
     return "Bicicleta no encontrada";
}
},

biciParaLaVenta: function () {//si la bici no figura como vendida entonces esta a la venta
return this.bicicletas.filter((bicicleta) => !bicicleta.vendida);
},

totalDeVentas: function () {//suma el total de las bicis vendidas a traves de un filter
return this.bicicletas
.filter((bicicleta) => bicicleta.vendida)
.reduce((total, bicicleta) => total + bicicleta.precio, 0);
},
};
// Ahora, ejecuto el programa con console.log
console.log(
"Buscar Bicicleta con ID 'Bicicleta 2':",
dhBici.buscarBici("Bicicleta 2")
);
console.log(
"Vender Bicicleta con ID 'Bicicleta 3':",
dhBici.venderBici("Bicicleta 3")
);
console.log("Bicicletas para la venta:", dhBici.biciParaLaVenta());
console.log("Total de ventas realizadas: $",dhBici.totalDeVentas()); 
