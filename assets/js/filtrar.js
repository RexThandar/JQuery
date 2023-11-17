$(document).ready(function(){
    // Seleccionamos un grupo de divs y cada una por separado
    $('.caja').first().css({ background: '#000' });
    $('.caja').last().css({ background: '#000' });

    // Seleccionando como arreglo la tercera caja marcando el 2
    $('.caja').eq(2).css({ background: '#000'})

    // Filtramos por datos del elemento todas las cajas que sean iguales en el dato
    $('.caja').filter('#segunda').css({ background: '#777'})
    
    // Selecciona todas las que no sean del filtro Not
    // $('.caja').not('#segunda').css({ background: '#fff'})

});