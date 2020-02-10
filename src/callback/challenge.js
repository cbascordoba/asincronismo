// instanciamos el XML Sx: require('nombre_consola').nombre_archivo;
// guardo en la variable el valor del archivo XMLHttpRequest
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// funcion que nos permite traer la informacion desde nuestra API, recibe un callback y desencadena los llamados que necesitamos.
function fetchData (url_api, callback){
    // construimos la peticion por xmlhttprequest generando la referencia al objeto que necesito
    let xhttp = new XMLHttpRequest();
// hacemos el llamado a una url 
    xhttp.open('GET','url_api',true);/* el true activa el asincronismo  */
     // escucho lo que hace la conexion 
    xhttp.onreadystatechange = function (event){
        // validamos para saber si fue exitoso el estado de la peticion
        if(xhttp.readyState ===4){
            //validamos el estado html si es exitoso
            if(xhttp.status === 200){
                // regresamos el callback si todo sale bien, responseText me lo convierte de object a string
                callback(null, JSON.parse(xhttp.responseText))
            }
            else{
                const error = new Error('Error '+ url_api);
                return callback(error, null);
            }
        }
    }

    xhttp.send();
}