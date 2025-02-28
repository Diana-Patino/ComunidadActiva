$(document).ready(function(){
    // Configuración del carrusel
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        dots: true,
        arrows: false // Mostrar los botones de navegación
    });

    // Añadir efecto de desplazamiento suave
    $('a').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }   
    });

    // Validación en tiempo real del formulario de contacto
    $('#contact-form').on('input', function() {
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
        
        if (name.length > 0 && email.length > 0 && message.length > 0) {
            $('#submit-button').prop('disabled', false);
        } else {
            $('#submit-button').prop('disabled', true);
        }
    });

    // Efecto de hover en los botones
    $('.button').hover(
        function() {
            $(this).css('background-color', 'darkgreen');
        }, function() {
            $(this).css('background-color', 'green');
        }
    );

    // Notificación de envío de formulario
    $('#contact-form').on('submit', function(event) {
        event.preventDefault();
        alert('Formulario enviado con éxito');
        // Aquí puedes añadir código para enviar el formulario mediante AJAX
    });
});

