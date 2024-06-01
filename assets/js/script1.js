import { obtenerZapatillas } from "./fetch/fetch.zapatillas.js";
import { agregarAlCarrito } from "./carrito.js";

const crearTarjetas = (zapatillas) => {
    let zapatillaRow = document.getElementById("zapatillaRow");

    zapatillas.map((zapatilla) => {
        const { id, nombre, marca, precio, img: imagen } = zapatilla;

        const divRow = document.createElement("div");
        divRow.classList.add("col-xl-3", "col-lg-3", "col-md-3", "col-sm-12", "col-xs-12", "mt-2", "mb-2");

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
        subTitulo2.textContent = `$${precio.toLocaleString()}`;

        const btnMostrar = document.createElement("button");
        btnMostrar.classList.add("btn", "btn-danger");
        btnMostrar.textContent = "Agregar al carrito";
        btnMostrar.onclick = () => agregarAlCarrito({ id, nombre, precio, img: imagen });

        divRow.appendChild(card);
        card.appendChild(img);
        card.appendChild(divBody);
        divBody.appendChild(titulo);
        divBody.appendChild(subTitulo);
        divBody.appendChild(subTitulo2);
        divBody.appendChild(btnMostrar);

        zapatillaRow.appendChild(divRow);
    });
}

obtenerZapatillas()
    .then((zapatillas) => {
        crearTarjetas(zapatillas);
    })
    .catch((error) => {
        console.log(error);
    });

export { agregarAlCarrito };
