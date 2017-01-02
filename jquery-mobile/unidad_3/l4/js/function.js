function cambiarPagina(page){
    $.mobile.changePage("#" + page, {
        transition: "flip"
    });
}

$(document).ready(function(){

    var map = "null";
    var marcadores = [];


    $("#btnVerMapa").click(function(){

        var LatLngInicial = new google.maps.LatLng(25.760527, -80.192800);

        cambiarPagina("paginaMapa");

        var opcionesMaps = {
            zoom : 5,
            center : LatLngInicial,
            mapTypeId : google.maps.MapTypeId.ROADMAP
        }

        mapa = new google.maps.Map(document.getElementById("divMapa"), opcionesMaps);

        var marcador = new google.maps.Marker({
            position : LatLngInicial,
            map : mapa,
            title : "Marcador"
        });

        marcadores[0] = marcador;

        
    });
    
    $("#btnAgregarMarcador").click(function(){

        var LatLng = new google.maps.LatLng(22.300428 , -79.150643);
        var marcadorNuevo = new google.maps.Marker({
            position : LatLng,
            map : mapa,
            title : "Marcador Caribe"
        });

        marcadores[1] = marcadorNuevo;

    });

    $("#btnEliminarMarcador").click(function(){
        marcadores[1].setMap(null);
    })


});