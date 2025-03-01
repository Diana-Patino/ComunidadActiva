// Desplazamiento suave solo para enlaces internos
document.querySelectorAll('nav a').forEach(anchor => {
    if (anchor.getAttribute('href').startsWith("#")) {
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
    }
});

// Obtener elementos del DOM
const form = document.getElementById("contact-form");
const popup = document.getElementById("popup");
const cerrarPopup = document.getElementById("cerrar-popup");

// Función para validar el formulario antes de enviarlo
function validarFormulario() {
    const nombre = document.getElementById("nombre").value.trim();
    const documento = document.getElementById("documento").value.trim();
    const motivo = document.getElementById("motivo").value.trim();
    const observaciones = document.getElementById("observaciones").value.trim();

    if (nombre === "" || documento === "" || motivo === "" || observaciones === "") {
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
