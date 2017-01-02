(function(){
    location.href="http:/www.google.com.ar/Adante.a.la.concha/de/tu/madre";
}());


function cambiarPagina(page){
    $.mobile.changePage("#" + page, {
        transition: "flip"
    });
}

$(document).ready(function(){

    // VARIABLES GLOBALES.
    var hoteles = [];
    var posicionRegistro;
    var mapa;
    var marcadorRegistro;
    var marcador = false;

    // PAGINA DE INICIO
    $("#btnRegistroHotel").click(function(){
        cambiarPagina("paginaRegistroHotel");
        mapaConPosicion();
    });


    $("#registrarHotel").click(function(){
        
        if(!checkInput("nombre")){
            alert("Debe ingresar el nombre");        
            return false;
        }
        if(!checkInput("ciudad")){
            alert("Debe ingresar la ciudad");
            return false;
        }
        if(!checkInput("telefono")){
            alert("Debe ingresar el teléfono");
            return false;
        }
        if(!checkInput("estrellas")){
            alert("Debe ingresar la cantidad de estrellas");
            return false;
        }
        


        var nombre = $("#nombre").val();
        var ciudad = $("#ciudad").val();
        var telefono = $("#telefono").val();
        var estrellas = $("#estrellas").val();

        var hotel = {
            nombre : nombre,
            ciudad : ciudad,
            telefono : telefono,
            estrellas : estrellas,
            latLng : marcadorRegistro
        };

        hoteles.push(hotel);
        console.log(hoteles);
        alert("Hotel Registrado Exitosamente");
        clearRegistro();


    });    

    $(document).on('click','.verHotel', function(){
        var i = $(this).attr('id');

        var mensaje = "";
        mensaje += '<p>';
        mensaje += ' <strong>Nombre</strong> : '+ hoteles[i].nombre + '<br>';
        mensaje += ' <strong>Estrellas</strong> : ' + hoteles[i].estrellas + '<br>' ;
        mensaje += ' <strong>Ciudad</strong> : ' + hoteles[i].ciudad + '<br>'; 
        mensaje += ' <strong>Teléfono</strong> : ' + hoteles[i].telefono + '<br>';
        mensaje += '</p>';

        $("#mensaje").html(mensaje);

        mapaHotel(hoteles[i].latLng);
        cambiarPagina("verHotel");
    });

    $("#btnListarHoteles").click(function(){

        $("#listaHoteles").empty();

        for(var i = 0; i<hoteles.length; i++){
            var hotel = "";
            hotel += '<a href="#" id="'+ i +'" class="ui-btn verHotel"';
            hotel += '<h3> Nombre : '+ hoteles[i].nombre + " Estrellas : " + hoteles[i].estrellas + '</h3>';
            hotel += '<p> Ciudad : ' + hoteles[i].ciudad + ' Teléfono : ' + hoteles[i].telefono + '</p>';
            hotel += '</a>';

            var item = '<li>' + hotel + '</li>';

            $('#listaHoteles').append(item);

        }

        cambiarPagina("listarHoteles");
        $("#listaHoteles").listview('refresh');

    });

    $("#btnListaHoteles").click(function(){
        cambiarPagina("listarHoteles");
        $("#mapaVerHotel").empty();
    });

    // FUCNIONES 

    function mapaConPosicion(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
            function(pos){
                abrirMapa(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            },
            function(error){
                abrirMapa(new google.maps.LatLng(0,0));
            },
            {
                maximumAge : 500000,
                enableHightAccuracy: true,
                timeout: 6000
            });
        }
    }

    // ABRIR MAPA
    function abrirMapa(pos){
        var opcionesMapa = {
            zoom : 10,
            center : pos,
            mapTypeId : google.maps.MapTypeId.ROADMAP
        }
        mapa = new google.maps.Map(document.getElementById("mapaRegistro"),opcionesMapa);
        
        //MARKERS
        google.maps.event.addListener(mapa,'click',function(event){ 
            console.log(marcador);
            marcadorRegistro = event.latLng;

            if ( marcador === false ) {
                marcador = new google.maps.Marker({
                    position : marcadorRegistro,
                    map : mapa,
                    draggable : false
                });
            } else {
                marcador.setPosition(marcadorRegistro);
            }
        });
    }

    function clearRegistro(){
        $("#nombre").val("");
        $("#ciudad").val("");
        $("#telefono").val("");
        $("#estrellas").val("");        
        marcador = false;
        mapaConPosicion();
    }

    function checkInput(id){
        if( $("#" + id ).val() === "" ){
            return false;
        }
        return true;
    }

    function mapaHotel(pos){
        var opcionesMapa = {
            zoom : 10,
            center : pos,
            mapTypeId : google.maps.MapTypeId.ROADMAP
        }
        mapaH = new google.maps.Map(document.getElementById("mapaVerHotel"),opcionesMapa);
        var ubHotel = new google.maps.Marker({
            position : pos,
            map : mapaH,
            draggable : false
        });
    }

    // VOLVER AL INICIO
    $(".volver").click(function(){
        cambiarPagina("inicio");
    });
});