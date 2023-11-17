$(document).ready(function(){
    var contenedor = $('#contenedor');
    var contador = 1;

    $('#agregar').on('click', function(){
        //creamos el div en el selector
        var caja = $('<div></div>').attr('class','caja').text(contador);
        contador++;

        //Descomentar 1 por 1
        //Incluimos la caja anterior creada en el contenedor con append
        //contenedor.append(caja); // Crea la caja al inicio con conteo de 1 a mas
        //contenedor.prepend(caja); // Crea la caja al inicio, que se va moviendo dejando siempre al final la caja 1
        //contenedor.before(caja) // Crea una caja antes del contenedor padre
        //contenedor.after(caja) // Crea una caja despues del contenedor padre
    });
});