document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.backgroundColor = '#FFD700';
            link.style.color = '#4CAF50';
        });
        link.addEventListener('mouseout', () => {
            link.style.backgroundColor = 'transparent';
            link.style.color = 'white';
        });
    });

    // Mostrar el botón de llamada a la acción después de 5 segundos
    setTimeout(() => {
        const ctaButton = document.getElementById('cta-button');
        ctaButton.style.display = 'block';
    }, 5000);

    // Mostrar el texto "TalentoTech 2025 GRACIAS" después de 5 segundos
    setTimeout(() => {
        const talentotech = document.getElementById('talentotech');
        talentotech.style.display = 'block';
    }, 5000);
});