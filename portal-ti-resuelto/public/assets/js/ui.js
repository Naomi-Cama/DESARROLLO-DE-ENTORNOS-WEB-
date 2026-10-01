// ui.js - Guía 2
// Este archivo se encarga de la interactividad básica del portal.

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Lógica del menú hamburguesa (versión básica)
    const btnMenu = document.getElementById('btn-menu');
    const menuPrincipal = document.getElementById('menu-principal');

    if (btnMenu && menuPrincipal) {
        btnMenu.addEventListener('click', () => {
            menuPrincipal.classList.toggle('activo');
        });
    }

    // 2. Lógica de confirmación del formulario (Simulación)
    const formSoporte = document.getElementById('form-soporte');
    
    if (formSoporte) {
        formSoporte.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página se recargue
            
            // Simulación de envío
            alert('¡Gracias! Tu solicitud de soporte ha sido registrada (SIMULACIÓN). Nos pondremos en contacto pronto.');
            formSoporte.reset(); // Limpia el formulario
        });
    }
});