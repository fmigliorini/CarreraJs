function cambiarPagina(page){
    $.mobile.changePage("#" + page, {
        transition: "none"
    });
}

$(document).ready(function(){
    var latlng1 = new google.maps.LatLng(39.54016, -89.348943);
    var latlng2 = new google.maps.LatLng(5.143855, -74.583318);
    var latlng3 = new google.maps.LatLng(52.621961, -11.549494);

    var marcador1;
    var marcador2;
    var marcador3;


    function mostrarMapa(){
        var opciones = {
            zoom : 2,
            center : latlng1,
            mapTypeId : google.maps.MapTypeId.ROADMAP
        }

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
            title : "Punto 2"
        });
        marcador3 = new google.maps.Marker({
            position : latlng3,
            map : mapa,
            draggable : true,
            title : "Punto 3"
        });

        google.maps.event.addListener(marcador1, "dragend", function(event){
            alert("Latitud : " + event.latLng.lat() + " Longitud : " + event.latLng.lng());
        });
        google.maps.event.addListener(marcador2, "dragend", function(event){
            alert("Latitud : " + event.latLng.lat() + " Longitud : " + event.latLng.lng());
        });
        google.maps.event.addListener(marcador3, "dragend", function(event){
            alert("Latitud : " + event.latLng.lat() + " Longitud : " + event.latLng.lng());
        });
    }

    mostrarMapa();
});