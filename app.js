// const axios = require('axios');
// .options({obj}) recibe objetos sin necesidad de introducir comandos
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true

    }
}).argv;
// console.log(argv.direccion);
// para poder sustituir el contenido en el link del api por los espacios
// debemos crear una variable frendli(amigable) javascript tiene una funcion
// encodeURI(contenido)
let getInfo = async (direccion) => {
 
 try{
    let coors = await lugar.getLugarLatLng(direccion);
    let temp = await clima.getClima(coors.lat, coors.lng);

    return `El clima en ${coors.direccion} es de ${temp}`;

 }catch(e){
    return `No se puede determinar el clima en esta ciudad: ${direccion}`
 }
    
}
getInfo(argv.direccion)
    .then( mensaje => console.log(mensaje))
    .catch(e => console.log(e));


// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(e => console.log(e));
//     getClima(19.4326077, -99.133208)
//     .then(resp => console.log(resp))
//     .catch(e => console.log(e));