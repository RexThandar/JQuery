$(document).ready(function(){

    // $(selector).animate({parametros}, velocidad, callback);

    // Animacion basica que no cambia al presionar el boton nuevamente
    // $('#btn').on('click', function(){
        //     $('#caja').animate({
            //         width: '300px',
            //         opacity: '0.2'
            //     }, 2000, function(){
                //         alert('Fin animacion');
                //     });
                // });
    
    // Animacion basica que cambia al presionar el boton nuevamente
    $('#btn').on('click', function(){
        $('#caja').animate({
            //width: '+=300px'
            marginLeft: '+=50px'
        }, 300, function(){      });

        //$('.caja').toggleClass('animacion'); // Se presiona 2 veces para quitarle la clase y agregarla de nuevo

        $('.caja').animate({
            marginLeft: '-=50px'
        }, 300);
    });
});