$(document).ready(function () {
    var titulo = $('#titulo');
    var info = $('#info');

    //Medidas Ancho
    info.append('Ancho: '+titulo.width()+'<br/>'); // Calcula el ancho del elemento
    info.append('Ancho Interno (+ padding): '+titulo.innerWidth()+'<br/>'); //Calcula el ancho + padding del elemento
    info.append('Ancho Externo (+ padding + borde): '+titulo.outerWidth()+'<br/>'); //Calcula el ancho + padding + borde del elemento
    info.append('Ancho Externo (+ padding + borde + margin): '+titulo.outerWidth(true)+'<br/>'); //Calcula el ancho + padding + borde + margen del elemento
    
    //Medidas Alto
    info.append('Alto: '+titulo.height()+'<br/>'); // Calcula el alto del elemento
    info.append('Alto Interno (+ padding): '+titulo.innerHeight()+'<br/>'); // Calcula el alto + padding del elemento
    info.append('Alto Externo (+ padding + borde): '+titulo.outerHeight()+'<br/>'); // Calcula el ancho + padding + borde del elemento
    info.append('Alto Externo (+ padding + borde + margin): '+titulo.outerHeight(true)+'<br/>'); // Calcula el ancho + padding + borde + margen del elemento
    
});