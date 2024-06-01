const user = JSON.parse(localStorage.getItem('login_success')) || false
if (!user) {
    window.location.href = 'login.html'
}

const logout = document.querySelector('#logout')

logout.addEventListener('click', () => {
    alert('Hasta pronto!')
    localStorage.removeItem('login_success')
    window.location.href = 'index.html'
})

// Obtener elementos
const btnAbrirModal = document.getElementById('btn-abrir-modal');
const modal = document.getElementById('modal');
const btnCerrarModal = document.getElementById('btn-cerrar-modal');

// Evento para abrir el modal
btnAbrirModal.addEventListener("click", () => {
    modal.style.display = "block";
});

// Evento para cerrar el modal
btnCerrarModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerrar modal al hacer clic fuera de Ã©l
window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});