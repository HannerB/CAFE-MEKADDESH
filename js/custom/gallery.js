// document.addEventListener('DOMContentLoaded', function() {
//     const gallery = document.getElementById('imageGallery');
//     const lightbox = document.getElementById('lightbox');
//     const lightboxImg = document.getElementById('lightboxImage');
//     const caption = document.getElementById('caption');
//     const closeBtn = document.querySelector('.close');

//     // Selecciona todas las imágenes en la galería
//     const items = document.querySelectorAll('.gallery-item');

//     items.forEach((item) => {
//         item.addEventListener('click', function() {
//             const img = this.querySelector('img');
//             lightboxImg.src = img.src;
//             caption.textContent = img.alt;
//             lightbox.style.display = 'block';
//         });
//     });

//     // Cierra el lightbox
//     closeBtn.addEventListener('click', function() {
//         lightbox.style.display = 'none';
//     });

//     // Cierra el lightbox al hacer clic fuera de la imagen
//     lightbox.addEventListener('click', function(e) {
//         if (e.target === lightbox) {
//             lightbox.style.display = 'none';
//         }
//     });

//     // Maneja el evento de la tecla ESC para cerrar el lightbox
//     document.addEventListener('keydown', function(e) {
//         if (e.key === 'Escape') {
//             lightbox.style.display = 'none';
//         }
//     });
// });
