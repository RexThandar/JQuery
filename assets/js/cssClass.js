$(document).ready(function(){
    $('#btn').on('click', function(){
        //$(this).addClass('naranja'); // Agrega la clase
        //$(this).removeClass('btn'); // Quita la clase
        //$(this).toggleClass('naranja'); // Agrega o Quita la clase seleccionada
        
        // Esto no es recomendable pero se usa para cambiar css
        $(this).css({
            'height': '100px',
            'width': '100px'
        })
    });
});