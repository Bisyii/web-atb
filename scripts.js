document.addEventListener('DOMContentLoaded', () => {
    
    console.log("Sistema ATB cargado correctamente"); // Mensaje de verificación

    // --- 1. LÓGICA DEL MENÚ MÓVIL ---
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        // Al hacer clic en la hamburguesa
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Al hacer clic en cualquier enlace del menú, se cierra automáticamente
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });
    } else {
        console.error("Error: No se encontraron los elementos del menú móvil.");
    }

    // --- 2. LÓGICA DE CONTADORES (Scroll) ---
    // Esta parte hace que los números suban solo cuando llegas a la sección
    /* NOTA: Si no tienes contadores en tu HTML actual, este código no dará error
       gracias a la verificación "if (container)".
    */
    const counters = document.querySelectorAll('.counter');
    let activated = false;

    const handleScroll = () => {
        const container = document.getElementById('impacto'); // Asegúrate que tu sección de estadísticas tenga id="impacto"
        
        if (container) {
            const containerTop = container.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (containerTop < windowHeight - 100 && !activated) {
                counters.forEach(counter => {
                    const updateCount = () => {
                        const target = +counter.getAttribute('data-target');
                        const count = +counter.innerText;
                        const speed = 200; 
                        const inc = target / speed;

                        if (count < target) {
                            counter.innerText = Math.ceil(count + inc);
                            setTimeout(updateCount, 20);
                        } else {
                            counter.innerText = target;
                            if(target === 100) counter.innerText += "%"; 
                        }
                    };
                    updateCount();
                });
                activated = true;
            }
        }
    };

    window.addEventListener('scroll', handleScroll);
});
