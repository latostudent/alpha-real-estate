const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const idUrl = urlParams.get('id');
//var singleProperty = Inmueble[idUrl];
/*nombres de atributos*/
/*var tipoInmueble = singleProperty.tipo;
var direccionInmueble = singleProperty.direccion;
var precioInmueble = singleProperty.precio;
var tituloInmueble = singleProperty.titulo;
var habitacionesInmueble = singleProperty.habitaciones;
var bañosInmueble = singleProperty.baños;
var areInmueble = singleProperty.area;
var descripcionInmueble = singleProperty.descripcion;
var mascotasInmueble = singleProperty.mascotas;
var pisoInmueble = singleProperty.piso;
var distritoInmueble = singleProperty.distrito;
var telefonoInmueble = singleProperty.telefono; 
*/

/*document.getElementById("contenido").innerHTML = "Tipo: "+tipoInmueble+"<br>Dirección: "+direccionInmueble+"<br>Precio: "+precioInmueble+"<br>Telefono: "+telefonoInmueble;
*/
var busqueda = InmuebleArray.find(s => s.id === parseInt(idUrl));
console.log(busqueda);