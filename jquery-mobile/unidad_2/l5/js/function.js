function cambiarPagina(page){
    $.mobile.changePage("#" + page, {
        transition: "flip"
    });
}

$(document).ready(function() {

    var computadores = [];



    // REGISTRO DE COMPUTADORES
    $("#btnRegistroComputadora").click(function(){
        cambiarPagina("registroComputador");
    });

    $("#btnGuardarComputador").click(function(){
        var codigo = $("#codigo").val();
        var marca = $("#marca").val();
        var ram = $("#memoriaRam").val();
        var procesador = $("#procesador").val();
        var discoDuro = $("#discoDuro").val();
        var so = $("#so").val();

        var computador = {
            codigo : codigo,
            marca : marca,
            ram : ram,
            procesador : procesador,
            discoDuro : discoDuro,
            so : so
        }

        computadores.push(computador);
        alert("Registro Exitoso");
        limpiarForm();
    });

    // LISTAR COMPUTADORES
    $("#btnListarComputadores").click(function(){

        var tablaComputadores = $("#tablaComputadores");
        var tbody = $("<tbody></tbody>");

        $(".computador").remove();

        tbody.attr("class",".computador");

        for(i = 0; i < computadores.length; i++){
            
            var tr = $("<tr></tr>");
            var td1 = $("<td></td>").text(computadores[i].codigo);
            var td2 = $("<td></td>").text(computadores[i].marca);
            var td3 = $("<td></td>").text(computadores[i].ram);
            var td4 = $("<td></td>").text(computadores[i].procesador);
            var td5 = $("<td></td>").text(computadores[i].discoDuro);
            var td6 = $("<td></td>").text(computadores[i].so);

            tr.append(td1);
            tr.append(td2);
            tr.append(td3);
            tr.append(td4);
            tr.append(td5);
            tr.append(td6);

            tbody.append(tr);
        }

        tablaComputadores.append(tbody);
        cambiarPagina("paginaListaComputadores");

    });


    // BACK
    $(".volver").click(function(){
        cambiarPagina("paginaInicio");
    });

    function limpiarForm(){
        $("#codigo").val("");
        $("#memoriaRam").val("");
        $("#procesador").val("");
        $("#discoDuro").val("");
        $("#so").val("");

        var selectMarca = $("#marca");
        selectMarca[0].selectedIndex = 0;
        selectMarca.selectmenu("refresh");
    }
});