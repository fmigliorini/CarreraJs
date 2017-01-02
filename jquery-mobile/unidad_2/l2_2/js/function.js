function cambiarPagina(page) {
	$.mobile.changePage("#" + page,{
		transition: "turn"
	} );
}

$(function(){

	$("#boton1").click(function(){
		var nit = $("#nit").val();
		var nombre = $("#nombre").val();
		var direccion = $("#direccion").val();
		var telefono = $("#telefono").val();
		var email = $("#email").val();

		var datosEmpresa  = "";
		datosEmpresa += "NIT : " + nit;
		datosEmpresa += "Nombre : " + nombre ;
		datosEmpresa += "Direccion : " + direccion; 
		datosEmpresa += "Telefono ; " + telefono; 
		datosEmpresa += "E-mail : " + email;

		$("#nit").val("");
		$("#nombre").val("");
		$("#direccion").val("");
		$("#telefono").val("");
		$("#email").val("");
		
		$("#datosEmpresas").html(datosEmpresa);

		alert("Empresa registrada con exito");
	});

	$("#boton2").click(function(){
		cambiarPagina("paginaDatosEmpresa");
	});

	$("#boton3").click(function(){
		cambiarPagina("paginaRegistroEmpresa");
	});

});
