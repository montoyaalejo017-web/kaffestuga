window.onscroll = function () {
    toggleMenuBackground();
};

function toggleMenuBackground() {
    const menu = document.querySelector('.menu');
    if (window.scrollY > 50) { // Cuando el desplazamiento vertical es mayor a 50px
        menu.classList.add('scrolled'); // Añade la clase 'scrolled' para cambiar el fondo
    } else {
        menu.classList.remove('scrolled'); // Elimina la clase 'scrolled' cuando volvemos arriba
    }
}


// ==========================================
// FORMULARIO DE CONTACTO
// ==========================================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (event) {

    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const telefono = document.getElementById('cell').value.trim();
    const correo = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    // Validación básica
    if (!nombre || !telefono || !correo) {
        alert('Por favor completa todos los campos obligatorios.');
        return;
    }

    // Por ahora mostramos los datos para comprobar
    // que el formulario está funcionando correctamente.

    console.log('Nombre:', nombre);
    console.log('Teléfono:', telefono);
    console.log('Correo:', correo);
    console.log('Mensaje:', mensaje);

    alert('¡Gracias por contactarnos! Tu mensaje ha sido recibido.');

    contactForm.reset();
});