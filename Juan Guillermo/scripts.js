document.addEventListener("DOMContentLoaded", function () {
    // Desplazamiento suave en los enlaces internos del menú de navegación
    document.querySelectorAll("nav a").forEach(anchor => {
        if (anchor.getAttribute("href").startsWith("#")) {
            anchor.addEventListener("click", function (e) {
                e.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector("header").offsetHeight; // Ajustar por el tamaño del encabezado
                    window.scrollTo({
                        top: targetElement.offsetTop - headerHeight - 10,
                        behavior: "smooth"
                    });
                }
            });
        }
    });

    // Obtener elementos del DOM
    const form = document.querySelector("#contact-form");
    const popup = document.querySelector("#popup");
    const cerrarPopup = document.querySelector("#cerrar-popup");
    const errorMensaje = document.createElement("p"); // Mensaje de error para validación

    // Verificar si los elementos existen antes de interactuar con ellos
    if (!form || !popup || !cerrarPopup) {
        console.error("Uno o más elementos no fueron encontrados en el DOM.");
        return;
    }

    // Insertar mensaje de error en el formulario
    errorMensaje.style.color = "red";
    errorMensaje.style.fontSize = "14px";
    errorMensaje.style.display = "none";
    form.appendChild(errorMensaje);

    // Función para validar el formulario antes de enviarlo
    function validarFormulario() {
        const nombre = document.querySelector("#nombre").value.trim();
        const documento = document.querySelector("#documento").value.trim();
        const motivo = document.querySelector("#motivo").value.trim();
        const observaciones = document.querySelector("#observaciones").value.trim();

        if (!nombre || !documento || !motivo || !observaciones) {
            errorMensaje.textContent = "Por favor, completa todos los campos.";
            errorMensaje.style.display = "block";
            return false;
        }

        errorMensaje.style.display = "none";
        return true;
    }

    // Función para mostrar el pop-up
    function mostrarPopup() {
        popup.style.display = "flex";
    }

    // Función para cerrar el pop-up
    function cerrarPopupFuncion() {
        popup.style.display = "none";
    }

    // Evento para cerrar el pop-up al hacer clic fuera de él
    popup.addEventListener("click", function (e) {
        if (e.target === popup) {
            cerrarPopupFuncion();
        }
    });

    // Evento para cuando el formulario se envía
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevenir el envío real del formulario

        if (validarFormulario()) {
            mostrarPopup();
            form.reset(); // Limpiar los campos del formulario después de enviarlo
        }
    });

    // Evento para cerrar el pop-up con el botón
    cerrarPopup.addEventListener("click", cerrarPopupFuncion, { once: true });
});
