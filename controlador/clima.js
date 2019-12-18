const axios = require('axios');

const getClima = async() => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ac7ea0ef281e24b3e15ae43d9c6ee567d&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}