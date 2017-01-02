function changePage(page){
    $.mobile.changePage("#" + page , {
        transition : "none"
    });
}

$(document).ready(function(){
    
    var latlng1 = new google.maps.LatLng(10.496943, -75.475175);
    var latlng2 = new google.maps.LatLng(4.684236, -74.113471);

    var marcador1;
    var marcador2;

    function mostrarMapa(){
        
        var directionsDisplay;
        var directionsService = new google.maps.DirectionsService();

        var opciones = {
            zoom : 3,
            center : latlng1,
            mapTypeId : google.maps.MapTypeId.ROADMAP
        };

        var mapa = new google.maps.Map(document.getElementById("divMapa"), opciones);

        marcador1 = new google.maps.Marker({
            position : latlng1,
            map : mapa,
            draggable : true,
            title : "Punto 1"
        });

        marcador2 = new google.maps.Marker({
            position: latlng2,
            map : mapa,
            draggable : true,
            title : "Punto 2"
        });

        directionsDisplay = new google.maps.DirectionsRenderer();
        directionsDisplay.setMap(mapa);

        var peticion = {
            origin : latlng1,
            destination : latlng2,
            travelMode : google.maps.TravelMode.DRIVING
        }

        directionsService.route(peticion, function(respuesta, estado){

            if(estado == google.maps.DirectionsStatus.OK){
                directionsDisplay.setDirections(respuesta);
            } else {
                alert("Error en el servicio : " + estado);
            }
        });
    }
    mostrarMapa();
});