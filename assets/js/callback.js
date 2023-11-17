$(document).ready(function(){ // Este ya es un callback
    
    // el callback, lo que esta despues de la coma, ejecuta una funcion luego que terminar la animacion anterior, no al mismo tiempo como pasa si no existiera el callback
    $('#ejecutar').on('click', function(){
        $('.caja').slideUp(1000, function(){
            $(this).slideDown(1000);
        })
    });

});