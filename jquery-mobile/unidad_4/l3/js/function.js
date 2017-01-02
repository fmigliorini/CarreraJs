function cambiarPagina(page){
    $.mobile.changePage("#" + page, {
        transition: "none"
    });
}

$(document).ready(function(){
    
    var marcador;
    var mapa;
    var latLngInicial = new google.maps.LatLng(25.760527, -80.192800);

    $("#btnBuscarPunto").click(function(){
        convertirDireccion();
    });

    function convertirDireccion(){
        var direccion = $("#punto").val();
        var geoCoder = new google.maps.Geocoder();

        $.mobile.loading("show",{
            text : "Buscando Punto",
            textVisible : true,
            theme : "a",
            textOnly : false
        });

        geoCoder.geocode({
            'address' : direccion
        }, function(resultados, estado){
            if ( estado == google.maps.GeocoderStatus.OK ){
                marcador = new google.maps.Marker({
                    map : mapa,
                    position : resultados[0].geometry.location
                });
                mapa.setCenter(resultados[0].geometry.location);
                $.mobile.loading("hide");
            } else {
                $.mobile.loading("hide");
                alert("Error en el servicio" + estado);
            }
        });
    }

    function mostrarMapa(){
        var opciones = {
            zoom : 5,
            center : latLngInicial,
            mapTypeId : google.maps.MapTypeId.ROADMAP
        };
        mapa = new google.maps.Map(document.getElementById("divMapa"), opciones);
        marcador = new google.maps.Marker({
            position : latLngInicial,
            map : mapa,
            title : "Mi Punto"
        });
    }

    mostrarMapa();


});