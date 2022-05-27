const readmorebtn = document.querySelector('.boton');
const texto = document.querySelector('.texto');

readmorebtn.addEventListener('click',(e)=>{
    texto.classList.toggle('show-more')
    if(readmorebtn.innerText === 'Mostrar más'){
        readmorebtn.innerText = 'Mostrar menos';
    }else{
        readmorebtn.innerText = 'Mostrar más';
    }
})

const botonleer = document.querySelector('.ver');
const text = document.querySelector('.text');

botonleer.addEventListener('click',(e)=>{
    text.classList.toggle('show-more')
    if(botonleer.innerText === 'Mostrar más'){
        botonleer.innerText = 'Mostrar menos';
    }else{
        botonleer.innerText = 'Mostrar más';
    }
})