import './itemsMenuLibreria.js';
import './webInteres.js';

const enlacesMenu = document.querySelectorAll('nav ul li a');

enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', () => {
        // Cerrar el menú al hacer clic en cualquier enlace
        document.getElementById('check').checked = false;
    });
});



    







  










