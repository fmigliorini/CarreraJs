$(document).ready(function(){
    $("#paginaCalculoDensidad").on("swipe",function(){        

        var masa = parseFloat($("#masa").val());
        var volumen = parseFloat($("#volumen").val());
        var resultado = masa/volumen;

        $("#densidad").val(resultado); 
    });
});

$("#btnLimpiar").click(function(){
    $("#masa").val("");
    $("#volumen").val("");
    $("#resultado").val("");
});