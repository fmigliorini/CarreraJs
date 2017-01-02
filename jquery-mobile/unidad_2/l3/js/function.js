function cambiarPagina(page){
	$.mobile.changePage("#" + page,{
		transition: "flip"
	});
}

$(document).ready(function(){
	var personas = [];

	$(".volver").click(function(){
		cambiarPagina("paginaInicio");
	});

	$("#btnRegistroPersona").click(function(){
		cambiarPagina("registroPersona")
	});

	$("#btnListarPersona").click(function(){
		var tablaHombre = $("#tablaHombres");
		var tablaMujeres = $("#tablaMujeres");

		$(".personas").remove();

		for (var i = 0; i < personas.length; i++ ) {
			var tr = $("<tr></tr>");
			tr.attr("class","personas");
			var td1= $("<td></td>").text(personas[i].id);
			var td2 = $("<td></td>").text(personas[i].nombre);
			var td3 = $("<td></td>").text(personas[i].edad);

			tr.append(td1);
			tr.append(td2);
			tr.append(td3);
			alert(personas[i].nombre);

			if ( personas[i].genero === "M" ) {
				tablaHombre.append(tr);
			} else {
				tablaMujeres.append(tr);
			};
		}

		cambiarPagina("listaPersona");
	});

	$("#btnGuardarPersona").click(function(){
		var id = $("#id").val();
		var nombre = $("#nombre").val();
		var edad = $("#edad").val();
		var genero = $("input[name=radio-genero]:checked").val();

		var persona = {
			id: id,
			nombre: nombre,
			edad: edad,
			genero: genero
		}

		personas.push(persona);

		alert("Persona Registrada");
		limpiarCampos();


	});

	function limpiarCampos(){
		$("#id").val("");
		$("#nombre").val("");
		$("#edad").val("");
		$("#genero").val("");
	}
});

