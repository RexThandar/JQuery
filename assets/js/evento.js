$(document).ready(function(){
    
    var btn = $('#boton');

    // Funcion anonima para llamar acciones al boton
    //btn.click(function(){ alert('Hola') });

    function saludo(){
        alert('Saludos');
    };
    
    // Forma antigua
    //btn.click(saludo);

    // Forma nueva
    //btn.on('click',saludo);

    // Evento con fallback (funcion anonima)
    // btn.on('mouseenter', function(){
    //     document.body.style.background = '#000';
    // });
    // btn.on('mouseleave', function(){
    //     document.body.style.background = '#fff';
    // });

    // Eliminar Evento
    btn.on('click', function(){
        alert('Hola');
        console.log('Hola');
    });
    $('#desactivar').on('click', function(){
        btn.off('click');
        console.log('Ejecucion Desactivada');
    });

    // Previniendo el comportamiento de los enlaces
    $('a').on('click', function(e){
        e.preventDefault();
        alert('Link Desactivado');
    });
});