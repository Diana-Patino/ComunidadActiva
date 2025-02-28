// Desplazamiento suave al hacer clic en los enlaces del menú
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Ajuste para cabeceras fijas
                behavior: 'smooth'
            });
        }
    });
});

// Obtener elementos del DOM
const form = document.getElementById("contact-form");
const popup = document.getElementById("popup");
const cerrarPopup = document.getElementById("cerrar-popup");

// Función para validar el formulario antes de enviarlo
function validarFormulario() {
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || email === "" || mensaje === "") {
        alert("Por favor, completa todos los campos.");
        return false;
    }

    return true;
}

// Función para mostrar el pop-up
function mostrarPopup() {
    popup.style.display = "flex"; // Mostrar el pop-up con flexbox
}

// Función para cerrar el pop-up
function cerrarPopupFuncion() {
    popup.style.display = "none"; // Ocultar el pop-up
}

// Evento para cerrar el pop-up al hacer clic fuera de él
popup.addEventListener("click", function (e) {
    if (e.target === popup) {
        cerrarPopupFuncion();
    }
});

// Evento para cuando el formulario se envía
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevenir el envío real del formulario

        if (validarFormulario()) {
            mostrarPopup(); // Mostrar el pop-up solo si el formulario es válido
            form.reset(); // Limpiar los campos del formulario después de enviarlo
        }
    });
}

// Evento para cerrar el pop-up con el botón
if (cerrarPopup) {
    cerrarPopup.addEventListener("click", cerrarPopupFuncion);
}
