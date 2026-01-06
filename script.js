// Función para el botón del Hero
function verMas() {
    document.getElementById('servicios').scrollIntoView();
}

// Simulación de envío de formulario
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Gracias por su interés. Un asesor de seguridad se pondrá en contacto pronto.');
    this.reset();
});

// Efecto de aparición suave al hacer scroll
window.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            card.style.opacity = '1';
        }
    });
});