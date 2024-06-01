let carrito = [];

const agregarAlCarrito = (zapatilla) => {
    const itemExistente = carrito.find(item => item.id === zapatilla.id);
    if (itemExistente) {
        itemExistente.cantidad += 1;
    } else {
        carrito.push({ ...zapatilla, cantidad: 1 });
    }
    actualizarCarritoUI();
}

const eliminarDelCarrito = (zapatillaId) => {
    carrito = carrito.filter(item => item.id !== zapatillaId);
    actualizarCarritoUI();
}

const actualizarCarritoUI = () => {
    const carritoItems = document.querySelector('.carrito-items');
    const carritoTotal = document.querySelector('.carrito-precio-total');
    carritoItems.innerHTML = '';

    let total = 0;
    carrito.forEach(item => {
        total += item.precio * item.cantidad;
        const carritoItem = document.createElement('div');
        carritoItem.classList.add('carrito-item');

        carritoItem.innerHTML = `
            <img src="${item.img}" width="80px" alt="">
            <div class="carrito-item-detalles">
                <span class="carrito-item-titulo">${item.nombre}</span>
                <div class="selector-cantidad">
                    <input type="text" value="${item.cantidad}" class="carrito-item-cantidad" disabled>
                </div>
                <span class="carrito-item-precio">$${(item.precio * item.cantidad).toLocaleString()}</span>
            </div>
            <button class="btn-eliminar" data-item-id="${item.id}">
                <i class="fa-solid fa-trash"> - </i>
            </button>
        `;
        carritoItems.appendChild(carritoItem);
    });

    carritoTotal.textContent = `$${total.toLocaleString()}`;

    agregarEventoEliminar();
}

const agregarEventoEliminar = () => {
    const botonesEliminar = document.querySelectorAll('.btn-eliminar');
    botonesEliminar.forEach(btn => {
        btn.addEventListener('click', () => {
            const itemId = parseInt(btn.dataset.itemId);
            eliminarDelCarrito(itemId);
        });
    });
}

const pagarClicked = () => {
    alert("Gracias por la compra");
    carrito = [];
    actualizarCarritoUI();
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.btn-pagar').addEventListener('click', pagarClicked);
});


export { agregarAlCarrito };
