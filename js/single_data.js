const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const idUrl = urlParams.get('id');
var detalle = InmuebleArray.find(s => s.id === parseInt(idUrl));
console.log(detalle);

/*nombres de atributos*/
var tipoInmueble = detalle.tipo;
var direccionInmueble = detalle.direccion;
var precioInmueble = detalle.precio;
var tituloInmueble = detalle.titulo;
var habitacionesInmueble = detalle.habitaciones;
var bañosInmueble = detalle.baños;
var areaInmueble = detalle.area;
var descripcionInmueble = detalle.descripcion;
var mascotasInmueble = detalle.mascotas;
var pisoInmueble = detalle.piso;
var distritoInmueble = detalle.distrito;
var telefonoInmueble = detalle.telefono;
var imgDestacada = detalle.imagenDestacada;

var precioNuevo = precioInmueble.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

document.getElementById("titulo").innerHTML = tituloInmueble;
document.getElementById("change-price").innerHTML = "US$ "+precioNuevo;
document.getElementById("description-project-paragraph").innerHTML = descripcionInmueble;
document.getElementById("direccion").innerHTML = "<i class='fa-solid fa-location-dot'></i>  "+direccionInmueble;

document.getElementById("hab").innerHTML = habitacionesInmueble+" habitaciones";
document.getElementById("bath").innerHTML = bañosInmueble+" baños";
document.getElementById("pet").innerHTML = "mascotas: "+mascotasInmueble;
document.getElementById("piso").innerHTML = "piso: "+pisoInmueble;
document.getElementById("area").innerHTML = areaInmueble+" m²";

var baseUrlImg = "url('./recursos/imagenes-inmuebles/";
var styleUrlImg = baseUrlImg+imgDestacada+"')";

document.getElementById("banner-principal").style.backgroundImage = styleUrlImg;