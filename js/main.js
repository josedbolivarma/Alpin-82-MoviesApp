const d = document;

const fila = document.querySelector(".contenedor-carousel");
const peliculasCards = d.querySelectorAll(".contenedor-lista-peliculas .pelicula-box");
const flechaIzquierda = d.getElementById("flecha-izquierda"),
flechaDerecha = d.getElementById("flecha-derecha");

const peliculas = document.querySelectorAll(".pelicula");

/*flecha izquierda*/
flechaIzquierda.addEventListener("click", () => {
    fila.scrollLeft -= fila.offsetWidth;
    const indicadorActivo = d.querySelector(".indicadores .activo");
    if(indicadorActivo.previousSibling) {
        indicadorActivo.previousSibling.classList.add("activo");
        indicadorActivo.classList.remove("activo");
    }
    console.log(fila.scrollLeft, fila.offsetWidth); 
})

/*flecha derecha*/
flechaDerecha.addEventListener("click", () => {
    fila.scrollLeft += fila.offsetWidth;
    const indicadorActivo = d.querySelector(".indicadores .activo");
    if(indicadorActivo.nextSibling) {
        indicadorActivo.nextSibling.classList.add("activo");
        indicadorActivo.classList.remove("activo");
    }
    console.log(fila.scrollLeft, fila.offsetWidth); 
})

const numeroPaginas = Math.ceil(peliculas.length);

for(let i = 0; i < numeroPaginas; i++) {
    const indicador = d.createElement("button");

    if(i === 0) {
        indicador.classList.add("activo");
    }

    d.querySelector(".indicadores").appendChild(indicador);

    indicador.addEventListener("click", e => {
        fila.scrollLeft = i * fila.offsetWidth;

        d.querySelector(".indicadores .activo").classList.remove("activo");
        e.target.classList.add("activo");
    });
}

//

const contenedorPeliculas = d.querySelector(".contenedor-lista-peliculas")
const $carousel = d.getElementById("carousel");
const imageUrl = '../assets';

const $fragment = d.createDocumentFragment();

const arregloPeliculas = [
    {
        title: 'Jhon Wick',
        image: '../img/1.jpg'
    },
    {
        title: 'Dr Strange',
        image: '../img/2.jpg'
    },
    {
        title: 'Venom 2',
        image: '../img/3.jpg'
    },
    {
        title: 'Mortal Kombat',
        image: '../img/4.jpg'
    },
    {
        title: 'Jumanji',
        image: '../img/5.jpg'
    },
    
]



arregloPeliculas.map((item, index) => {
    console.log(`Pelicula ${index}, => ${item.title}`);
    const $a = document.createElement("a");
    const $div = document.createElement("div");
    const $img = document.createElement("img");
    const $title = document.createElement("h2");

    $title.textContent = item.title;
    $img.setAttribute("src", item.image);
    $img.setAttribute("alt", item.title);
    $div.appendChild($img);
    $div.appendChild($title);
    $a.appendChild($div);

    $div.classList.add("pelicula-box");
    $a.classList.add("pelicula-card");
    $a.setAttribute("href", `#pelicula-${index + 1}`)

    $fragment.appendChild($a);

});

contenedorPeliculas.appendChild($fragment);

/*
arregloPeliculas.map((item) => {
    const $img = document.createElement("img");
    $img.setAttribute("src", item.image);
    $img.setAttribute("alt", item.title);
    $fragment.appendChild($img)
})

$carousel.appendChild($fragment);
*/

/*
peliculas.forEach((pelicula) => {
	pelicula.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			peliculasCards.forEach(pelicula => pelicula.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});
*/