import { obtenerZapatillas } from "./fetch/fetch.zapatillas.js";
import { obtenerMarcaAdidas } from "./fetch/fetch.marcas.js";


//FUNCION PARA DIBUJAR Y MOSTRAR LOS DATOS
const crearTarjetas = (zapatillas) => {

    let zapatillaRow = document.getElementById("zapatillaRow");

    zapatillas.map((zapatilla) => {

        const { nombre, marca, precio, img: imagen } = zapatilla;

        const divRow = document.createElement("div");
        divRow.classList.add("col-xl-3");
        divRow.classList.add("col-lg-3");
        divRow.classList.add("col-md-3");
        divRow.classList.add("col-sm-12");
        divRow.classList.add("col-xs-12");
        divRow.classList.add("mt-2");
        divRow.classList.add("mb-2");

        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = imagen;
        img.classList.add("card-img-top");

        const divBody = document.createElement("div");
        divBody.classList.add("card-body");

        const titulo = document.createElement("h5");
        titulo.classList.add("card-title");
        titulo.textContent = nombre.toUpperCase();

        const subTitulo = document.createElement("p");
        subTitulo.classList.add("card-text");
        subTitulo.textContent = marca;

        const subTitulo2 = document.createElement("h4");
        subTitulo2.classList.add("card-text");
        subTitulo2.textContent = "$" + precio.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

        const btnMostrar = document.createElement("button");
        btnMostrar.classList.add("btn");
        btnMostrar.classList.add("btn-danger");
        btnMostrar.textContent = "Ver detalles";

        divRow.appendChild(card);

        card.appendChild(img);
        card.appendChild(divBody);

        divBody.appendChild(titulo);
        divBody.appendChild(subTitulo);
        divBody.appendChild(subTitulo2);
        divBody.appendChild(btnMostrar);

        zapatillaRow.appendChild(divRow);
    })
}

//FUNCION PARA CREAR LAS CARD DEL CAROUSEL DE ADIDAS
const tarjetasAdidas = (adidas) => {

    let adidasRow = document.getElementById("adidasRow");

    adidas.map((zapatilla) => {

        const { nombre, marca, precio, img: imagen } = zapatilla;

        const divRow = document.createElement("div");
        divRow.classList.add("col-xl-3");
        divRow.classList.add("col-lg-3");
        divRow.classList.add("col-md-3");
        divRow.classList.add("col-sm-12");
        divRow.classList.add("col-xs-12");
        divRow.classList.add("mt-2");
        divRow.classList.add("mb-2");

        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = imagen;
        img.classList.add("card-img-top");

        const divBody = document.createElement("div");
        divBody.classList.add("card-body");

        const titulo = document.createElement("h5");
        titulo.classList.add("card-title");
        titulo.textContent = nombre.toUpperCase();

        const subTitulo = document.createElement("p");
        subTitulo.classList.add("card-text");
        subTitulo.textContent = marca;

        const subTitulo2 = document.createElement("h4");
        subTitulo2.classList.add("card-text");
        subTitulo2.textContent = "$" + precio.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

        const btnMostrar = document.createElement("button");
        btnMostrar.classList.add("btn");
        btnMostrar.classList.add("btn-danger");
        btnMostrar.textContent = "Ver detalles";

        divRow.appendChild(card);

        card.appendChild(img);
        card.appendChild(divBody);

        divBody.appendChild(titulo);
        divBody.appendChild(subTitulo);
        divBody.appendChild(subTitulo2);
        divBody.appendChild(btnMostrar);

        adidasRow.appendChild(divRow);
    })
}

obtenerZapatillas()
    .then((zapatillas) => {
        crearTarjetas(zapatillas);
    })
    .catch((error) => {
        console.log(error);
    })

obtenerMarcaAdidas()
    .then((adidas) => {
        tarjetasAdidas(adidas);
    })
    .catch((error) => {
        console.log(error);
    })



// CODIGO PARA PROBAR SI TE CONECTASTE A LA API
// obtenerZapatillas()
//     .then((zapatillas) => {
//         zapatillas.map((zapatilla) => {
//             console.log(zapatilla);
//         })
//     })
//     .catch((error) => {
//         console.log(error);
//     })