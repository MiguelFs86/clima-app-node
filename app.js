const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
	direccion:{
		alias: 'd',
		desc: 'Direccion de la ciudad',
		demand: true
	}
}).argv;


let getInfo = async( direccion ) =>{

	try{
		let coors = await lugar.getLugarLatLng( direccion );
		let temp = await clima.getClima( coors.lat, coors.lng );

		return `El clima en ${ coors.direccion } es de ${ temp } ºC`;
	}catch (e){
		return `No se puedo determinar el clima en ${ direccion }`;
	}

	
}


getInfo ( argv.direccion)
	.then( mensaje => console.log(mensaje))
	.catch(e => console.log(e))

/*
lugar.getLugarLatLng( argv.direccion )
	.then( resp => console.log( resp ))
	.catch( e=> console.log(e))


clima.getClima(43.48964600000001, 8.2193451)
	.then (temp => console.log(temp))
	.catch(e => console.log(e))
*/



/* Google MAPS API Key :
---------------------------------------------
AIzaSyDCudD54HhI20yLgx6eyKO6x1HLFoqLmlQ
---------------------------------------------

OpenWeatherMap API Key:
--------------------------------------------
73a5c9b5bbe7d7654ee1497c01532c5b 
--------------------------------------------
*/