$(document).ready(function(){
    var marcador;
    var marcadores = [];
    var latitudPunto;
    var longitudPunto;
    var mapa;

    var directionsDisplay;  
    var directionsService = new google.maps.DirectionsService();

    var latLngInicial = new google.maps.LatLng(10.386748, -75.504615);

    function verRuta(position){
        directionsDisplay = new google.maps.DirectionsRenderer();
        directionsDisplay.setMap(mapa);

        var peticion = {
            origin : latLngInicial,
            destination : position,
            travelMode : google.maps.TravelMode.DRIVING
        };

        directionsService.route(peticion, function(respuesta, estado){
            if ( estado == google.maps.DirectionsStatus.OK ){
                console.log(respuesta);
                directionsDisplay.setDirections(respuesta);
                directionsDisplay.setOptions({
                    suppressMarkers: true
                });
            } else {
                alert( "Error : " + estado );
            }
        });
    }

    function mostrarMapa(){
        var opciones = {
            zoom : 5,
            center : latLngInicial,
            mapTypeId : google.maps.MapTypeId.ROADMAP
        }
    

        mapa = new google.maps.Map(document.getElementById('divMapa'),opciones);
        marcador = new google.maps.Marker({
            position : latLngInicial,
            map : mapa,
            draggable : true,
            title : "Mi punto"
        }); 

        google.maps.event.addListener(mapa,'click', function(event){
            agregarMarcador(event.latLng);
        });
    }

    function agregarMarcador(location){
        var marcadorNuevo = new google.maps.Marker({
            position : location,
            map : mapa,
            draggable : false
        });
        google.maps.event.addListener(marcadorNuevo, 'click', function(){
            verRuta(marcadorNuevo.getPosition());
        });

        marcadores.push(marcadorNuevo);

    
    }
    mostrarMapa();
});