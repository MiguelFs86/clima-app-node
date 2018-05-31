const axios = require('axios');

const getClima = async( lat, lon ) => {

	let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&units=metric&appid=73a5c9b5bbe7d7654ee1497c01532c5b`);	

	return resp.data.main.temp;
}

module.exports = {
	getClima: getClima
}