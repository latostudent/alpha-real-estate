$(document).ready(function() {    
    for(let i=0; i<InmuebleArray.length; i++){
        console.log(InmuebleArray[i].id)
        var precioOriginal = InmuebleArray[i].precio;
        var precioNuevo = precioOriginal.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        console.log(precioNuevo);

        $("#list-properties").append(`<div class="card property-loop">
        <div class="imgBx">
          <img src="./recursos/imagenes-inmuebles/${InmuebleArray[i].imagenDestacada}" alt="house">
          <input type="checkbox">
          <div class="heart">
            <i class="fas fa-heart"></i>
          </div>
        </div>
        <div class="price-section">
          <h2>${InmuebleArray[i].titulo}</h2>
          <h1>US$ ${precioNuevo}</h1>
          <h3>${InmuebleArray[i].direccion}</h3>
        </div>
        <div class="info-section">
          <div class="beds">
            <h3><i class="fas fa-bed"></i> <span>${InmuebleArray[i].habitaciones}</span> Habitaciones</h3>
          </div>
          <div class="baths">
            <h3><i class="fas fa-bath"></i> <span>${InmuebleArray[i].baños}</span> Baños</h3>
          </div>
        </div>
      </div>`);
    }
}); 
