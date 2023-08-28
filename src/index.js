console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function () {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then (response => response.json())
    .then (perros => { //yo pongo "perros" xq quiero

        const arrayPerrosLinks = perros.message // Primero creo una variable para agarrar la informacion que necesito dle Json... en este caso es un array con 4 valores, links de perros (siempre revisa el API para ver que saldra... y le pongo el nombre que me dio la gana "perros")
        const divPerros = document.getElementById("dog-image-container"); //Este lo hago pensando en que voy a hacer luego.... como tengo que insertar las fotos en ese "div" necesito crear una variable para al final hacerlo un appendChild

        arrayPerrosLinks.forEach( linkPerros => { //Ya que es un arary lo que saqué con el fecth en ese API, tengo que meterle un forEach y hacer lo mismo con todos los valores....
            //El for each pide una funcion entre parentecis(y acá es una funcion flecha)... solo necesito escribir el nombre del parametro ("link perros" que yo escogo como quiero...) y ya que estoy haciendo el forEach de un array... ese parametro es realmente cada valor del array
            // luego le meto flecha y comienzo mi funcion.... que lo que tiene que hacer es crear un elemento img, meterle el link (el valor de mi array) e insertarlo en el DIV

            const fotoPerro = document.createElement("img") //creo un elemento en el documento... para lo cual TENGO QUE definirlo como una variable (asi como al comienzo que agarraste el DIV con un const...)
            fotoPerro.src = linkPerros; //al nuevo elemento img (que tiene nombre como variable) le meto el src (link de dónde jalar la foto)... recuerda que el link es simplemente el array que saqué con el fetch
            divPerros.appendChild(fotoPerro); // ya tú sabes qué hace esto....
        })      
    });



   
    fetch("https://dog.ceo/api/breeds/list/all")
    .then (response => response.json())
    .then (raza => {

        const objectPerrosRazas = raza.message;
        const ulPerros = document.getElementById("dog-breeds")

        Object.keys(objectPerrosRazas).forEach( textoRaza => { 
            const razaPerro = document.createElement("li") 
            razaPerro.textContent = textoRaza; 
            ulPerros.appendChild(razaPerro);

            razaPerro.addEventListener("click", () => {
                razaPerro.style.color = "red"; 
            });
        });     
    });

    const selectorRaza = document.getElementById("breed-dropdown");

    selectorRaza.addEventListener("change" , () => {
        const ulPerros = document.getElementById("dog-breeds")
        razaSeleccionada = selectorRaza.value;
        const todasLasRazas = ulPerros.querySelectorAll("li");

        todasLasRazas.forEach(breed => {
            const breedName = breed.textContent.toLowerCase();
            breed.style.display = breedName.startsWith(razaSeleccionada) ? "block" : "none";
        });
    });

});








