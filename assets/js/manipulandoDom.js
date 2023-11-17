$(document).ready(function(){
    $('#titulo').text('<u>Encabezado Modificado con text</u>');
    $('#titulo2').html('<u>Encabezado Modificado con html</u>');

    //Cambiar h1 por el contenido del imput

    var nombre = $('#nombre');
    nombre.on('change', function(){
        $('#titulo').text(nombre.val());
    });

    $('#enlace').text('Youtube');
    $('#enlace').attr('href','https://www.youtube.com/');

    // agrega una clase azul y target blank al enlace
    $('#enlace').attr({
        'class': 'azul',
        'target': '_blank'
    });
});