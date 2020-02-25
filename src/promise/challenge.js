const fetcData = require('../utils/fetchData');

const API = 'https://rickandmortyapi.com/api/character/';

fetcData(API)
    .then(data =>{
        console.log(data.info.count);
        return fetcData(`${API}${data.results[0].id}`)
    }) //ahora seguimos con el then del segundo llamado
    .then(data=>{
        console.log(data.name)
        return fetcData(data.origin.url);
    })
    .then(data=>{
        console.log(data.dimension)
    })
    .catch(err=> console.log(error(err)));