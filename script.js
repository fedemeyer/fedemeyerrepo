const botonesVerMas = document.querySelectorAll('.btn-ver-mas');

function alternarInformacion(event) {
    const boton = event.target;
    const infoExtra = boton.previousElementSibling;
    infoExtra.classList.toggle('oculto');
    if (infoExtra.classList.contains('oculto')) {
        boton.textContent = '[ Ver más ]';
    } else {
        boton.textContent = '[ Ver menos ]'; 
    }
}

botonesVerMas.forEach(function(boton) {
    boton.addEventListener('click', alternarInformacion);
});

const boton = document.getElementById("botonCambiar");
const titulo = document.getElementById("titulo");
let contador = 0;

if (boton && titulo) {
    boton.addEventListener("click", function () {
        contador++;
        if (contador === 1) {
            titulo.textContent = "Destinos más visitados";
        } else if (contador === 2) {
            titulo.textContent = "¡Que disfrutes de tu viaje!";
        } else if (contador === 3) {
            titulo.textContent = "FM TRAVELS"; 
            contador = 0;
        } 
    });
}

const contenedoresCarrusel = document.querySelectorAll('.carousel-container');

contenedoresCarrusel.forEach(contenedor => {
    const slides = contenedor.querySelectorAll('.slide');
    const prevBtn = contenedor.querySelector('.carousel-btn.prev');
    const nextBtn = contenedor.querySelector('.carousel-btn.next');
    
    let currentSlide = 0;

    if (slides.length === 0 || !prevBtn || !nextBtn) return;

    function showSlide(index) {
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }
        slides.forEach(slide => slide.classList.remove('active'));
        slides[currentSlide].classList.add('active');
    }

    nextBtn.addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    prevBtn.addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    showSlide(0);
});