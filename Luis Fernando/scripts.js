document.addEventListener('DOMContentLoaded', function() {
    const registroForm = document.getElementById('formulario');
    const loginForm = document.getElementById('login-form');

    registroForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const correo = document.getElementById('correo').value;
        verificarCorreo(correo, function(isVerified) {
            if (isVerified) {
                alert('Correo verificado. Registro exitoso.');
                registroForm.submit();
            } else {
                alert('Verificación de correo fallida. Por favor, intente nuevamente.');
            }
        });
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const correo = document.getElementById('correo-login').value;
        verificarCorreo(correo, function(isVerified) {
            if (isVerified) {
                alert('Correo verificado. Inicio de sesión exitoso.');
                loginForm.submit();
            } else {
                alert('Verificación de correo fallida. Por favor, intente nuevamente.');
            }
        });
    });

    function verificarCorreo(correo, callback) {
        // Simulación de verificación de correo
        // Aquí puedes agregar la lógica para verificar el correo, como una llamada a una API
        setTimeout(function() {
            const isVerified = confirm(`¿Es ${correo} tu correo?`);
            callback(isVerified);
        }, 1000);
    }
});
