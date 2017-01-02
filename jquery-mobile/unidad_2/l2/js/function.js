function cambiarPagina(page) {
	$.mobile.changePage("#" + page,{
		transition: "flip"
	} );
}

$(function(){

	var clientes = [];

	$("#boton1").click(function(){
		var id = $("#id").val();
		var nombre = $("#nombre").val();
		var direccion = $("#direccion").val();
		var telefono = $("#telefono").val();
		var email = $("#email").val();


		var cliente = {
			id: id,
			nombre: nombre,
			direccion: direccion,
			telefono: telefono,
			email: email
		}

		clientes.push(cliente);

		alert("cliente Registrado");

		limpiarCampos();
	});

	$("#btnListarCliente").click(function(){

		var tablaClientes = $("#tablaClientes");
		$(".cliente").remove();

		for(var i=0; i<clientes.length; i++){

			var tr = $("<tr></tr>");
			tr.attr("class","cliente");

			var td1 = $("<td></td>").text(clientes[i].id);
			var td2 = $("<td></td>").text(clientes[i].nombre);
			var td3 = $("<td></td>").text(clientes[i].telefono);
			var td4 = $("<td></td>").text(clientes[i].direccion);
			var td5 = $("<td></td>").text(clientes[i].email);

			tr.append(td1);
			tr.append(td2);
			tr.append(td3);
			tr.append(td4);
			tr.append(td5);

			tablaClientes.append(tr);
		}

		cambiarPagina("paginaListar");

	});

	function limpiarCampos(){
		$("#id").val("");
		$("#nombre").val("");
		$("#telefono").val("");
		$("#direccion").val("");
		$("#email").val("");
	}

});
