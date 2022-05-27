$(document).ready(function() {    
        $("#dynamic-header").append(`
            <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <img src="./logo_inmo.png" alt="logo" height="40">
            </a>
    
            <ul class="nav nav-pills">
            <li class="nav-item"><a href="./index.html" class="nav-link active" aria-current="page">Inicio</a></li>
            <li class="nav-item"><a href="./lista.html" class="nav-link">Propiedades</a></li>
            <li class="nav-item"><a href="./calculadora.html" class="nav-link">Calculadora</a></li>
            <li class="nav-item"><a href="./contacto.html" class="nav-link">Contacto</a></li>
            </ul>
            </header>
        `);
}); 
