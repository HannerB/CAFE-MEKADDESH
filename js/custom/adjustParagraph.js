// js/adjustParagraphs.js

function adjustParagraph() {
    var p = document.getElementById("responsive-paragraph");
    if (window.innerWidth > 1024) {
        p.innerHTML = `Nuestro producto es certificado 100% orgánico libre de 
        <br> químicos y pesticidas. Somos amigables con el medio ambiente, 
        <br> y esto se refleja en nuestro empaque. Utilizamos papel  Kraft 
        <br> compostables, el cual es reciclable en un rango del 40% al 100% 
        <br> y aseguramos que su disposición final sea la elaboración
        <br> de manualidades. Destacamos que nuestro empaque 
        <br> cuenta con la certificación de la FDA de Estados Unidos
        <br>  de América y de la Unión Europea, asegurando la calidad y 
        <br> seguridad del mismo.`;
    } else if (window.innerWidth >= 601 && window.innerWidth <= 1024) {
        p.innerHTML = `Nuestro producto es certificado 100% orgánico libre de 
        <br> químicos y pesticidas. Somos amigables con el medio ambiente, 
        <br> y esto se refleja en nuestro empaque. Utilizamos papel  Kraft 
        <br> compostables, el cual es reciclable en un rango del 40% al 100% 
        <br> y aseguramos que su disposición final sea la elaboración
        <br> de manualidades. Destacamos que nuestro empaque 
        <br> cuenta con la certificación de la FDA de Estados Unidos
        <br>  de América y de la Unión Europea, asegurando la calidad y 
        <br> seguridad del mismo.`;
    } else {
        p.innerHTML = `Nuestro producto es certificado 100% orgánico libre de 
        <br> químicos y pesticidas. Somos amigables con el medio ambiente, 
        <br> y esto se refleja en nuestro empaque. Utilizamos papel  Kraft 
        <br> compostables, el cual es reciclable en un rango del 40% al 100% 
        <br> y aseguramos que su disposición final sea la elaboración
        <br> de manualidades. Destacamos que nuestro empaque 
        <br> cuenta con la certificación de la FDA de Estados Unidos
        <br>  de América y de la Unión Europea, asegurando la calidad y 
        <br> seguridad del mismo.`;
    }
}

function adjustParagraph2() {
    var p2 = document.getElementById("responsive-paragraph-2");
    if (window.innerWidth > 1024) {
        p2.innerHTML = `Nuestro enfoque en el impacto social se materializa 
        <br> a través de nuestro valor agregado, que son las artesanías.
        <br> Respaldamos a comunidades de artesanos del Departamento del 
        <br> Atlántico que se dedican a la elaboración de estas obras
        <br> únicas. Estas asociaciones incluyen a mujeres y hombres
        <br> que son responsables de sus hogares, personas con 
        <br> diversidad funcional y aquellos que han sido rehabilitados 
        <br> de las drogas. Nuestro objetivo es promover la inclusión 
        <br> y la equidad social.`;
    } else if (window.innerWidth >= 601 && window.innerWidth <= 1024) {
        p2.innerHTML = `Nuestro enfoque en el impacto social se materializa 
        <br> a través de nuestro valor agregado, que son las artesanías.
        <br> Respaldamos a comunidades de artesanos del Departamento del 
        <br> Atlántico que se dedican a la elaboración de estas obras
        <br> únicas. Estas asociaciones incluyen a mujeres y hombres
        <br> que son responsables de sus hogares, personas con 
        <br> diversidad funcional y aquellos que han sido rehabilitados 
        <br> de las drogas. Nuestro objetivo es promover la inclusión 
        <br> y la equidad social.`;
    } else {
        p2.innerHTML = `Nuestro enfoque en el impacto social se materializa 
        <br> a través de nuestro valor agregado, que son las artesanías.
        <br> Respaldamos a comunidades de artesanos del Departamento del 
        <br> Atlántico que se dedican a la elaboración de estas obras
        <br> únicas. Estas asociaciones incluyen a mujeres y hombres
        <br> que son responsables de sus hogares, personas con 
        <br> diversidad funcional y aquellos que han sido rehabilitados 
        <br> de las drogas. Nuestro objetivo es promover la inclusión 
        <br> y la equidad social.`;
    }
}

function adjustParagraph3() {
    var p3 = document.getElementById("responsive-paragraph-3");
    if (window.innerWidth > 1024) {
        p3.innerHTML = 
		`Nuestro modelo de negocio busca generar un impacto  
		<br>económico positivo a través del desarrollo 
		<br>sostenible, promoviendo la rentabilidad responsable,
		<br>la eficiencia económica inclusiva, creando oportunidades 
		<br>para las comunidades locales, fortaleciendo
        <br>al desarrollo de sus habilidades. Generamos empleabilidad  
		<br>directamente a tres departamentos en nuestro país,  
		<br>creando y fortaleciendo la cultura local para darse  
		<br>a conocer en el mundo.`;
    } else if (window.innerWidth >= 601 && window.innerWidth <= 1024) {
        p3.innerHTML = 
		`Nuestro modelo de negocio busca generar un impacto económico
        <br> positivo a través del desarrollo sostenible, promoviendo la
        <br> rentabilidad responsable, la eficiencia económica inclusiva, 
        <br> creando oportunidades para las comunidades locales, fortaleciendo
        <br> al desarrollo de sus habilidades y empleabilidad. Dando así empleo a 
        <br> dos departamentos directamente en nuestro país, creando y 
        <br> fortaleciendo la cultura local para darse a conocer en el mundo.`;
    } else {
        p3.innerHTML = 
		`Nuestro modelo de negocio busca generar un impacto económico
        <br> positivo a través del desarrollo sostenible, promoviendo la
        <br> rentabilidad responsable, la eficiencia económica inclusiva, 
        <br> creando oportunidades para las comunidades locales, fortaleciendo
        <br> al desarrollo de sus habilidades y empleabilidad. Dando así empleo a 
        <br> dos departamentos directamente en nuestro país, creando y 
        <br> fortaleciendo la cultura local para darse a conocer en el mundo.`;
    }
}

window.addEventListener('resize', adjustParagraph);
window.addEventListener('load', adjustParagraph);
window.addEventListener('resize', adjustParagraph2);
window.addEventListener('load', adjustParagraph2);
window.addEventListener('resize', adjustParagraph3);
window.addEventListener('load', adjustParagraph3);

function handleResponsiveElements() {
    var width = window.innerWidth;

    var hideOnMobileElements = document.querySelectorAll('.hide-on-mobile');
    var showOnMobileElements = document.querySelectorAll('.show-on-mobile');
    var responsiveImageSlide5 = document.querySelector('#slide-5-layer-6');
    var responsiveImageSlide6 = document.querySelector('#slide-6-layer-6');
    var responsiveImageSlide7 = document.querySelector('#slide-7-layer-6');

    if (width <= 425) {
        // Ocultar elementos con la clase hide-on-mobile
        hideOnMobileElements.forEach(function(element) {
            element.style.display = 'none';
        });

        // Mostrar elementos con la clase show-on-mobile
        showOnMobileElements.forEach(function(element) {
            element.style.display = 'block';
        });

        // Ajustar los atributos data-x y data-y de la imagen responsive para slide 5
        if (responsiveImageSlide5) {
            responsiveImageSlide5.setAttribute('data-x', 'center');
            responsiveImageSlide5.setAttribute('data-y', '600');
            responsiveImageSlide5.setAttribute('data-voffset', '50');
        }

        // Ajustar los atributos data-x y data-y de la imagen responsive para slide 6
        if (responsiveImageSlide6) {
            responsiveImageSlide6.setAttribute('data-x', 'center');
            responsiveImageSlide6.setAttribute('data-y', '600');
            responsiveImageSlide6.setAttribute('data-voffset', '50');
        }

		// Ajustar los atributos data-x y data-y de la imagen responsive para slide 7
        if (responsiveImageSlide7) {
            responsiveImageSlide7.setAttribute('data-x', 'center');
            responsiveImageSlide7.setAttribute('data-y', '600');
            responsiveImageSlide7.setAttribute('data-voffset', '50');
        }
    } else {
        // Mostrar elementos con la clase hide-on-mobile
        hideOnMobileElements.forEach(function(element) {
            element.style.display = 'block';
        });

        // Ocultar elementos con la clase show-on-mobile
        showOnMobileElements.forEach(function(element) {
            element.style.display = 'none';
        });

        // Restaurar los atributos data-x y data-y de la imagen responsive para slide 5
        if (responsiveImageSlide5) {
            responsiveImageSlide5.setAttribute('data-x', '900');
            responsiveImageSlide5.setAttribute('data-y', '118');
            responsiveImageSlide5.removeAttribute('data-voffset');
        }

        // Restaurar los atributos data-x y data-y de la imagen responsive para slide 6
        if (responsiveImageSlide6) {
            responsiveImageSlide6.setAttribute('data-x', '885'); // Ajusta según el valor original
            responsiveImageSlide6.setAttribute('data-y', '118'); // Ajusta según el valor original
            responsiveImageSlide6.removeAttribute('data-voffset'); // Elimina data-voffset si no se necesita
        }

		// Restaurar los atributos data-x y data-y de la imagen responsive para slide 7
        if (responsiveImageSlide7) {
            responsiveImageSlide7.setAttribute('data-x', '890'); // Ajusta según el valor original
            responsiveImageSlide7.setAttribute('data-y', '118'); // Ajusta según el valor original
            responsiveImageSlide7.removeAttribute('data-voffset'); // Elimina data-voffset si no se necesita
        }
    }
}

// Ejecutar la función al cargar la página y al cambiar el tamaño de la ventana
window.addEventListener('load', handleResponsiveElements);
window.addEventListener('resize', handleResponsiveElements);

function handleResponsiveElements1() {
    var width = window.innerWidth;

    // No ejecutar si el ancho es 425px o menos
    if (width <= 425) {
        return;
    }

    var hideOn1440Elements = document.querySelectorAll('.hide-on-1440');
    var showOn1440Elements = document.querySelectorAll('.show-on-1440');

    if (width <= 1440) {
        // Ocultar elementos con la clase hide-on-1440
        hideOn1440Elements.forEach(function(element) {
            element.style.display = 'none';
        });

        // Mostrar elementos con la clase show-on-1440
        showOn1440Elements.forEach(function(element) {
            element.style.display = 'block';
        });
    } else {
        // Mostrar elementos con la clase hide-on-1440
        hideOn1440Elements.forEach(function(element) {
            element.style.display = 'block';
        });

        // Ocultar elementos con la clase show-on-1440
        showOn1440Elements.forEach(function(element) {
            element.style.display = 'none';
        });
    }
}

// Ejecutar la función al cargar la página y al cambiar el tamaño de la ventana
window.addEventListener('load', handleResponsiveElements1);
window.addEventListener('resize', handleResponsiveElements1);
