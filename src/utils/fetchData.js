// instanciamos el XML Sx: require('nombre_consola').nombre_archivo;
// guardo en la variable el valor del archivo XMLHttpRequest
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// funcion que nos permite traer la informacion desde nuestra API, recibe un callback y desencadena los llamados que necesitamos.
const fetchData = (url_api)=>{

    return new Promise((resolve, reject)=>{
            // construimos la peticion por xmlhttprequest generando la referencia al objeto que necesito
    const xhttp = new XMLHttpRequest();
    // hacemos el llamado a una url 
        xhttp.open('GET',url_api,true);/* el true activa el asincronismo  */
         // escucho lo que hace la conexion 
        xhttp.onreadystatechange = (() =>{
            // validamos para saber si fue exitoso el estado de la peticion
            if(xhttp.readyState === 4){

                (xhttp.status ===200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error ', url_api))
                    
            }
        });
    
        xhttp.send();
    });
}

module.exports = fetchData;