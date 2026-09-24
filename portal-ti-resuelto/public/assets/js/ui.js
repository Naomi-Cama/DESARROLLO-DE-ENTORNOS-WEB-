document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Lógica del menú hamburguesa (accesible)
    const btnMenu = document.querySelector('.menu-toggle');
    const menuPrincipal = document.getElementById('menu-principal');

    if (btnMenu && menuPrincipal) {
        btnMenu.addEventListener('click', () => {
            const expanded = btnMenu.getAttribute('aria-expanded') === 'true';
            btnMenu.setAttribute('aria-expanded', !expanded);
            menuPrincipal.classList.toggle('activo');
        });

        // Cerrar menú con Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && menuPrincipal.classList.contains('activo')) {
                menuPrincipal.classList.remove('activo');
                btnMenu.setAttribute('aria-expanded', 'false');
                btnMenu.focus();
            }
        });
    }

    // 2. Lógica de confirmación del formulario (Simulación)
    const formSoporte = document.getElementById('form-soporte');
    
    if (formSoporte) {
        formSoporte.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página se recargue
            
            // Validación nativa del navegador
            if (!formSoporte.checkValidity()) {
                formSoporte.reportValidity();
                return;
            }

            // Confirmación de simulación (NO se guarda información)
            alert('¡Gracias! Tu solicitud de soporte ha sido registrada (SIMULACIÓN).\n\nIMPORTANTE: Este formulario no envía ni guarda información real.');
            formSoporte.reset(); // Limpia el formulario
        });
    }
});