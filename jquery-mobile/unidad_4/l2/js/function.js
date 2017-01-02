function cambiarPagina(page){
    $.mobile.changePage("#" + page, {
        transition: "none"
    });
}

$(document).ready(function(){

    var latlng1 = new google.maps.LatLng(-36.272309, -66.497379);
    var latlng2 = new google.maps.LatLng(9.501459, -9.440121);
    var latlng3 = new google.maps.LatLng(61.963929, -81.510428);

    var marcador1;
    var marcador2;
    var marcador3;

    function mostrarMapa(){
        var opciones = {
            zoom : 2,
            center : latlng1,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var mapa = new google.maps.Map(document.getElementById("divMapa"), opciones);

        marcador1 = new google.maps.Marker({
            position : latlng1,
            map : mapa,
            draggable : true,
            title : "Punto 1"
        });
        marcador2 = new google.maps.Marker({
            position : latlng2,
            map : mapa,
            draggable : true,
            title : "Punto 1"
        });
        marcador3 = new google.maps.Marker({
            position : latlng3,
            map : mapa,
            draggable : true,
            title : "Punto 1"
        });

        var contenido1 = "<div style='width:100px; height:50px;'>" + "<p>Este es el punto 1</p>" + "</div>";
        var contenido2 = "<div style='width:100px; height:50px;'>" + "<p>Este es el punto 2</p>" + "</div>";
        var contenido3 = "<div style='width:100px; height:50px;'>" + "<p>Este es el punto 3</p>" + "</div>";

        var ventanaInfo1 = new google.maps.InfoWindow({
            content : contenido1
        });
        var ventanaInfo2 = new google.maps.InfoWindow({
            content : contenido2
        });
        var ventanaInfo3     = new google.maps.InfoWindow({
            content : contenido3
        });


        google.maps.event.addListener(marcador1, 'click', function(){
            ventanaInfo1.open(mapa, marcador1);
        });
        google.maps.event.addListener(marcador2, 'click', function(){
            ventanaInfo2.open(mapa, marcador2);
        });
        google.maps.event.addListener(marcador3, 'click', function(){
            ventanaInfo3.open(mapa, marcador3);
        });


        google.maps.event.addListener(marcador1, 'mouseover', function(){
            marcador1.setIcon("icono1.png");
        });
        google.maps.event.addListener(marcador1, 'mouseover', function(){
            marcador2.setIcon("icono1.png");
        });
        google.maps.event.addListener(marcador1, 'mouseover', function(){
            marcador3.setIcon("icono1.png");
        });

    }

    mostrarMapa();
});