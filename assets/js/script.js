/* ===================================================
   PORTAFOLIO PROFESIONAL - CRISTIAN CONTRERAS
=================================================== */

// ===== NAVBAR AL HACER SCROLL =====

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "#1E3A8A";
        header.style.transition = "0.4s";
    } else {
        header.style.background = "#0F172A";
    }
});

// ===== SCROLL SUAVE DEL MENÚ =====

document.querySelectorAll(".menu a").forEach(enlace => {

    enlace.addEventListener("click", function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({
            behavior:"smooth"
        });

    });

});

// ===== EFECTO ESCRITURA HERO =====

const titulo = document.querySelector(".hero h2");

if(titulo){

    const texto = "Desarrollador Full Stack Java Trainee";

    titulo.textContent = "";

    let i = 0;

    function escribir(){

        if(i < texto.length){

            titulo.textContent += texto.charAt(i);

            i++;

            setTimeout(escribir,60);

        }

    }

    escribir();

}

// ===== ANIMACIÓN DE TARJETAS =====

const tarjetas = document.querySelectorAll(".card-info, .proyecto, .skills span, .foda-grid div");

const observador = new IntersectionObserver((entradas)=>{

    entradas.forEach((entrada)=>{

        if(entrada.isIntersecting){

            entrada.target.classList.add("mostrar");

        }

    });

},{
    threshold:0.2
});

tarjetas.forEach((tarjeta)=>{
    observador.observe(tarjeta);
});

// ===== BOTÓN VOLVER ARRIBA =====

const btnTop = document.createElement("button");

btnTop.innerHTML = "↑";

btnTop.id = "btnTop";

document.body.appendChild(btnTop);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        btnTop.style.display = "flex";

    }else{

        btnTop.style.display = "none";

    }

});

btnTop.addEventListener("click",()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

// ===== MENSAJE EN CONSOLA =====

console.log("Portafolio Profesional cargado correctamente.");