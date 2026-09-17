/* ==========================================
   PORTAFOLIO PROFESIONAL
   Cristian Andrés Contreras Ortiz
========================================== */

// =========================
// NAVBAR AL HACER SCROLL
// =========================

const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        navbar.classList.add("nav-scroll");
    } else {
        navbar.classList.remove("nav-scroll");
    }
});

// =========================
// SCROLL SUAVE DEL MENÚ
// =========================

document.querySelectorAll(".menu a").forEach(enlace => {

    enlace.addEventListener("click", function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({
            behavior:"smooth"
        });

    });

});

// =========================
// ANIMACIÓN DE TARJETAS
// =========================

const elementos = document.querySelectorAll(
    ".card-info, .proyecto, .skills span, .foda-grid div"
);

const aparecer = new IntersectionObserver((entradas)=>{

    entradas.forEach((entrada)=>{

        if(entrada.isIntersecting){

            entrada.target.classList.add("mostrar");

        }

    });

},{threshold:0.2});

elementos.forEach(el=>aparecer.observe(el));

// =========================
// BOTÓN VOLVER ARRIBA
// =========================

const botonTop = document.createElement("button");

botonTop.innerHTML = "↑";

botonTop.id = "btnTop";

document.body.appendChild(botonTop);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        botonTop.style.display="block";

    }else{

        botonTop.style.display="none";

    }

});

botonTop.addEventListener("click",()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

// =========================
// EFECTO ESCRITURA HERO
// =========================

const texto = "Desarrollador Full Stack Java Trainee";

const titulo = document.querySelector(".hero h2");

let i = 0;

titulo.textContent = "";

function escribir(){

    if(i < texto.length){

        titulo.textContent += texto.charAt(i);

        i++;

        setTimeout(escribir,70);

    }

}

window.onload = escribir;

// =========================
// MENSAJE CONSOLA
// =========================

console.log("Portafolio Profesional cargado correctamente.");
