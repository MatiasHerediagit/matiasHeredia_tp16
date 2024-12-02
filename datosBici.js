const fs = require('fs'); // Importa el módulo de sistema de archivos

function consultarBicicletas() {//function para leer y convertir el archivo json
    const bicicletasJSON = fs.readFileSync('./bicicletas.json', 'utf-8'); // Lee el archivo bicicletas.json
    const bicicletas = JSON.parse(bicicletasJSON); // Convierte el contenido del JSON en un objeto
    return bicicletas; // Retorna el array de bicicletas
}

module.exports = consultarBicicletas; // Exporta la función como un módulo
