$(document).ready(function(){
    var marcador1;

    function mostrarMapa(position){
        var options = {
            zoom : 10,
            center : position,
            mapTypeId : google.maps.MapTypeId.ROADMAP
        };

        var mapa = new google.maps.Map(document.getElementById('divMapa'),options);
        var marcador1 = new google.maps.Marker({
            position: position,
            map : mapa,
            draggable : true,
            title : "Mi posición."
        });
    }

    function exito(pos){
        var latlng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
        mostrarMapa(latlng);
    }

    function fallido(error){
        if ( error.code == 0 ){
            alert("¡Ops, no se puede obtener la posición actual.!");
        }
        if ( error.code == 1 ){
            alert("¡Ops, algo salió mal.!")
        }
        if ( error.code == 2 ){
            alert("¡Ops, no has aceptado compartir tu posición!");
        }
        if ( error.code == 3 ){
            alert("¡Ops, Hemos superado el tiempo de espera!");
        }
    }

    function obtenerPoisicionActual(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(exito,fallido,{
                maximumAge : 500000,
                enableHightAccuracy: true,
                timeout: 6000
            });
        }
    }

    //obtenerPoisicionActual();
});