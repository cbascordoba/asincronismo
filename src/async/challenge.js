const fetchData = require('../utils/fetchData');

const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async(url_api)=>{
    try {
        //vamos a crear 3 constante a los 3 elementos que vamos a consultar
        //primero numero de personajes
        //segundo es nuestro personaje y su nombre 
        // el tercero es el origen de la dimension donde se encuentra. 

        const data = await fetchData(url_api);
        const character = await fetchData(`${API}${data.results[0].id}`);
        const origin = await fetchData(character.origin.url);

        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    } catch (error) {
        console.error(error);
    }
}

console.log('ANTES');
anotherFunction(API);
console.log('DESPUES');
