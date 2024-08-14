// window.jQuery( document ).on("ready", function ( $ ) {
// 	"use strict";
// 	jQuery( 'body' ).on( 'adding_to_cart', function ( event, $button, data ) {
// 		$button && $button.hasClass( 'vc_gitem-link' ) && $button
// 			.addClass( 'vc-gitem-add-to-cart-loading-btn' )
// 			.parents( '.vc_grid-item-mini' )
// 			.addClass( 'vc-woocommerce-add-to-cart-loading' )
// 			.append( $( '<div class="vc_wc-load-add-to-loader-wrapper"><div class="vc_wc-load-add-to-loader"></div></div>' ) );
// 	} ).on( 'added_to_cart', function ( event, fragments, cart_hash, $button ) {
// 		if ( 'undefined' === typeof($button) ) {
// 			$button = $( '.vc-gitem-add-to-cart-loading-btn' );
// 		}
// 		$button && $button.hasClass( 'vc_gitem-link' ) && $button
// 			.removeClass( 'vc-gitem-add-to-cart-loading-btn' )
// 			.parents( '.vc_grid-item-mini' )
// 			.removeClass( 'vc-woocommerce-add-to-cart-loading' )
// 			.find( '.vc_wc-load-add-to-loader-wrapper' ).remove();
// 	} );
// } );

jQuery(document).ready(function($) {
    // Función para manejar el formulario de agregar al carrito
    $('.cart').submit(function(e) {
        e.preventDefault(); // Evitar comportamiento por defecto del formulario

        // Simular agregar un producto al carrito
        var cantidad = parseInt($('.input-text.qty').val()); // Obtener la cantidad del producto
        var precioUnitario = 10.00; // Precio unitario del producto
        var totalPrecio = cantidad * precioUnitario; // Calcular el precio total

        // Agregar el producto al carrito (aquí podrías implementar lógica más compleja si lo deseas)
        actualizarCarrito(cantidad, totalPrecio);

        // Mostrar mensaje de confirmación (opcional)
        alert("Producto agregado al carrito");
    });

// Función para actualizar el contenido del carrito en la interfaz de usuario
function actualizarCarrito(cantidad, totalPrecio) {
    // Crear una cadena HTML para representar el producto
    var productoHTML = '<li class="cart_item">' +
                            '<span class="product-quantity">' + cantidad + ' </span>' +
                            '<span class="product-name">Producto(s) </span>' +
                            '<span class="product-price">$' + totalPrecio.toFixed(2) + '</span>' +
                        '</li>';

    // Agregar el producto al contenedor del carrito
    $('.widget_shopping_cart_content .cart_list.product_list_widget').append(productoHTML);

    // Actualizar el contador de items y el total del carrito
    var totalItemsActual = parseInt($('.top_panel_cart_button .cart_items').text()); // Obtener el total actual de items en el carrito
    var nuevoTotalItems = totalItemsActual + cantidad; // Calcular el nuevo total de items
    var totalPrecioActual = parseFloat($('.top_panel_cart_button .cart_summa').text().replace('$', '')); // Obtener el total actual del carrito
    var nuevoTotalPrecio = totalPrecioActual + totalPrecio; // Calcular el nuevo total del carrito

    // Actualizar el contador de items y el total del carrito
    $('.top_panel_cart_button .cart_items').text(nuevoTotalItems + (nuevoTotalItems === 1 ? ' Producto' : ' Productos'));
    $('.top_panel_cart_button .cart_summa').text('$' + nuevoTotalPrecio.toFixed(2));

    // Verificar si hay productos en el carrito y ocultar el mensaje "No products in the cart"
    var productosEnCarrito = $('.widget_shopping_cart_content .cart_list.product_list_widget li').length;
    if (productosEnCarrito > 0) {
        $('.widget_shopping_cart_content .hide_cart_widget_if_empty').show();
        $('.widget_shopping_cart_content .cart_list.product_list_widget .empty').hide();
    } else {
        $('.widget_shopping_cart_content .hide_cart_widget_if_empty').hide();
        $('.widget_shopping_cart_content .cart_list.product_list_widget .empty').show();
    }
}


    // Agregar botones de incrementar y decrementar a la cantidad
    $('.woocommerce div.quantity, .woocommerce-page div.quantity').append('<span class="q_inc"></span><span class="q_dec"></span>');
    $('.woocommerce div.quantity').on('click', '>span', function(e) {
        var f = $(this).siblings('input');
        if ($(this).hasClass('q_inc')) {
            f.val(Math.max(0, parseInt(f.val(),10))+1);
        } else {
            f.val(Math.max(1, Math.max(0, parseInt(f.val(),10))-1));
        }
        e.preventDefault();
        return false;
    });

    // Evento para cambiar modo de visualización
    $('.woocommerce, .woocommerce-page').on('click', '.mode_buttons a', function(e) {
        var mode = $(this).hasClass('woocommerce_thumbs') ? 'thumbs' : 'list';
        $.cookie('hotcoffee_shop_mode', mode, {expires: 365, path: '/'});
        $(this).siblings('input').val(mode).parents('form').get(0).submit();
        e.preventDefault();
        return false;
    });

    // Evento para mostrar el carrito
    $('.top_panel_middle .top_panel_cart_button, .header_mobile .top_panel_cart_button').on('click', function(e) {
        $(this).siblings('.sidebar_cart').slideToggle();
        e.preventDefault();
        return false;
    });
});
