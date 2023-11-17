$(document).ready(function(){
    // Parent: puedes acceder al elemento padre llamando desde el elemento hijo
    // $('#tercera').parent().css({ background: '#1b3d82' });

    // Parents: Accede a todos los elementos padre desde el hijo
    //$('#tercera').parents();

    // Children: Accede a todos los elementos hijos desde el padre
    //$('#padre').children().fadeOut(1000);
    //$('#padre').children('#tercera').fadeOut(1000);

    // Find: Accedes a todos los elementos hijos y nietos desde donde se encuentre
    //$('#contenedor').find('div.caja').slideUp();

    // Siblings: Accede a todos los elementos hermanos
    //$('#tercera').siblings().fadeOut(1000);

    // Preview y Next permiten seleccionar el elemento anterior o siguiente del seleccionado (con previewAll o nextAll los selecciona todos)
    //$('#tercera').nextAll().css({ background: '#000' })
});