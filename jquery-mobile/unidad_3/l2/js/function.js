function cambiarPagina(page){
    $.mobile.changePage("#" + page, {
        transition : "flow"
    });
}

$(document).ready(function() {

    $(document).on("pagebeforechange", function(event, data){
        if ( typeof data.toPage == "string") {
            
            var page = $.mobile.activePage.attr('id');

            // VALIDAMOS LOS CAMPOS ANTES DE CAMBIAR DE PAGINA.

            if( page == "paginaPaso1" ) {
                if ( $( "#id" ).val().trim().length == 0 || $( "#nombre" ).val().trim().length == 0 ){
                    $( "#paginaPaso1" ).css({
                        "background-color" : "#FF3145"
                    });
                    alert("Por favor rellene los campos");
                    return false;
                } else {
                    $( "#paginaPaso1" ).css({
                        "background-color" : "#F9F9F9"
                    });
                }
            }
            if( page == "paginaPaso2" ) {
                if ( $( "#direccion" ).val().trim().length == 0 || $( "#telefono" ).val().trim().length == 0 ){
                    $( "#paginaPaso2" ).css({
                        "background-color" : "#FF3145"
                    });
                    alert("Por favor rellene los campos");
                    return false;
                } else {
                    $( "#paginaPaso1" ).css({
                        "background-color" : "#F9F9F9"
                    });
                }
            }
            if( page == "paginaPaso3" ) {
                if ( $( "#email" ).val().trim().length == 0 || $( "#ciudad" ).val().trim().length == 0 ){
                    $( "#paginaPaso3" ).css({
                        "background-color" : "#FF3145"
                    });
                    alert("Por favor rellene los campos");
                    return false;
                } else {
                    $( "#paginaPaso3" ).css({
                        "background-color" : "#F9F9F9"
                    });
                }
            }
        }
    });
    $(document).on("pagechange",function(){
        
        var page = $.mobile.activePage.attr('id');
        
        if ( page == "paginaRegistroExitoso" ) {
            $("#paginaRegistroExitoso").css({
                "background-color":"#00F75F",
                "color" : "#FFFFFF"
            });

            var mensaje = "Inscripción Exitosa";
            mensaje += "ID : " + $("#id").val();
            mensaje += "Nombre : " + $("#nombre").val();
            mensaje += "Teléfono : " + $("#telefono").val();
            mensaje += "Dirección : " + $("#direccion").val();
            mensaje += "Ciudad : " + $("#ciudad").val();
            mensaje += "Mensaje : " + $("#mensaje").val();

            $("#mensajeExito").html(mensaje);
        }
    });





    $("#btnPaso1").click(function(){
        cambiarPagina("paginaPaso2");
    });

    $("#btnPaso2").click(function(){
        cambiarPagina("paginaPaso3")
    })

    $("#btnPaso3").click(function(){
        cambiarPagina("paginaRegistroExitoso");
    })
});