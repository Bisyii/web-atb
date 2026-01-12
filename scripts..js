document.addEventListener('DOMContentLoaded', () => {
    
    // MENÚ MÓVIL
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if(btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Cerrar menú al hacer click en un enlace
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });
    }

    // Lógica para futuras animaciones si las necesitas
    console.log("Fundación ATB - Sitio cargado correctamente");
});