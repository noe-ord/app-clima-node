const axios = require('axios');
const getLugarLatLng = async(direccion) => {
    
    let encodedUrl = encodeURI(direccion);
let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ`);
    if(resp.data.status === 'ZERO_RESULTS'){
        throw new Error(`No hay resultados para la ciudad ${direccion}`)
    }

    
    //     // para poder vizualizar los datos como postman es necesario
    //     // convertirlos en formato json
    //     // JSON.stringify(datos, replacer(casi nunca se ocupa undefined), espaciado)
    //     // console.log(JSON.stringify(resp.data, undefined, 2));
        let location = resp.data.results[0];
        let coors = location.geometry.location;
        // console.log('direccion: ', location.formatted_address );
        // console.log('latitud: ', coors.lat);
        // console.log('longitud: ', coors.lng);

    //     // console.log(resp.status);
     
    
    
    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng

    }
}
module.exports = {
    getLugarLatLng
}

