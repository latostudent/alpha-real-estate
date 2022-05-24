const InmuebleArray = [
    {
        id: 1001,
        tipo: "casa",
        direccion: "Av Prolongación Javier Prado",
        precio: "150000",
        titulo: "Amplia casa en Ate",
        habitaciones: "4",
        baños: "5",
        area: "280m²",
        descripcion: "Lorem ipsum dolor sit amet",
        mascotas: "no",
        piso: "1",
        distrito: "Ate",
        telefono: "1456165161"
    },
    {
        id: 1002,
        tipo: "departamento",
        direccion: "av carlos izaguirre",
        precio: "25000",
        titulo: "Departamento de lujo",
        habitaciones: "3",
        baños: "2",
        area: "125m²",
        descripcion: "Lorem ipsum dolor sit amet",
        mascotas: "si",
        piso: "7",
        distrito: "Los Olivos",
        telefono: "925877884"
    }
]

const Inmueble = {
    1:{
        tipo: "casa",
        direccion: "Av Prolongación Javier Prado",
        precio: "150000",
        titulo: "Amplia casa en Ate",
        habitaciones: "4",
        baños: "5",
        area: "280m²",
        descripcion: "Lorem ipsum dolor sit amet",
        mascotas: "no",
        piso: "1",
        distrito: "Ate",
        telefono: "1456165161"
    },
    2:{
        tipo: "departamento",
        direccion: "av carlos izaguirre",
        precio: "25000",
        titulo: "Departamento de lujo",
        habitaciones: "3",
        baños: "2",
        area: "125m²",
        descripcion: "Lorem ipsum dolor sit amet",
        mascotas: "si",
        piso: "7",
        distrito: "Los Olivos",
        telefono: "925877884"
    }
}

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