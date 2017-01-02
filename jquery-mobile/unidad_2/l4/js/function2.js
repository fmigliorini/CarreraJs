function cambiarPagina(page){
	$.mobile.changePage("#" + page,{
		transition: "flip"
	});
}

$(function(){
	var notas = [];
	var contadorId = 1;
    $("#id").val(contadorId);

    $("#guardarNota").click(function(){

    	var id = $("#id").val();
    	var titulo = $("#titulo").val();
    	var descripcion = $("#descripcion").val();

    	var nota = {
    		id : id,
    		titulo : titulo,
    		descripcion : descripcion
    	}

    	notas.push(nota);
    	limpiarForm();
    	$("#id").val(++contadorId);
    });
	
    $("#limpiarForm").click(function(){
    	limpiarForm();
    });

    $("#btnNuevaNota").click(function(){
    	cambiarPagina("inicio");
    });

    $("#btnListarNotas").click(function(){

    	$("#listaNotas").empty();

    	for(var i = 0; i<notas.length; i++){
    		var nota = "";
    		nota += '<a href="#" class="ui-btn"';
    		nota += '<h3>'+ notas[i].id + " - " + notas[i].titulo + '</h3>';
    		nota += '<p>' + notas[i].descripcion + '</p>';
    		nota += '</a>';

    		var item = '<li>' + nota + '</li>';

    		$('#listaNotas').append(item);

    	}

    	cambiarPagina("paginaListaNotas");
    	$("#listaNotas").listview('refresh');

    });




	function limpiarForm(){
		$("#id").val("");
		$("#titulo").val("");
		$("#descripcion").val("");
	}
});