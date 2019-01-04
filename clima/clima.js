const axios = require('axios');

const getClima = async(lat, lng) => {

    let inf = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=c719d6e1dc594899c7ec08950c2a29ea`);
    // console.log('hosssss',inf);
    
    
    let temp = inf.data.main.temp;

    //  console.log(temp.temp);
    return temp
    
}
// console.log();

module.exports = {
    getClima 
}