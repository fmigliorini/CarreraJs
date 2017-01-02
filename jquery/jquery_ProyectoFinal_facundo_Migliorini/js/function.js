$(document).ready(function(){
	/**** BUSCO EL SIGUIENTE ID Y LO CARGO ****/
	(function(){
		// Con esta funcion si tengo datos previos y recargo limpio el formulario.
		recargarFormulario();
		// Listo los estudiantes cunado cargo la pagina.
		listarEstudiantes();
	})();

	/**** REGISTRO DE NEUVO ESTUDIANTE ****/
	$("#registrarEstudiante").click(function(event){
		event.preventDefault();

		var codigo = $("#codigo").val();
		var nombre = $("#nombre").val();
		var nota = $("#nota").val();

		if(!validarCodigoExistente(codigo)){
			alert("Codigo Existente o Invalido");
			return false;
		}
		
		if(!validarNombre(nombre)){
			alert("Nombre Invalido");
			return false;
		}

		if(!validarNota(nota)){
			alert("Nota Invalida");
			return false;
		}
	
		var nuevoEstudiante = {
			codigo : codigo,
			nombre : nombre,
			nota : nota
		}

		localStorage.setItem(codigo,JSON.stringify(nuevoEstudiante));

		recargarFormulario();
		listarEstudiantes();
	});

	//Esta función se encarga de calcular el promedio entre todos los estudiantes.
	$(document).on('click',"#calcularPromedio",function(){
		var promedio;
		var totalNotas=0;
		var totalEstudiantes = localStorage.length;
		for(i=0;i<totalEstudiantes;i++){
			var indice = localStorage.key(i);
			var estudiante = $.parseJSON(localStorage.getItem(indice));
			totalNotas += parseInt(estudiante.nota);
		}
		promedio=totalNotas/totalEstudiantes;
		alert("La nota promedio es: " + promedio);
	});

	//Esta función se encarga de mostrar la nota mayor.
	$(document).on('click','#notaMayor',function(){
		var nombreNotaMayor = "";
		var notaMayor = 0;
		var totalEstudiantes = localStorage.length;
		for(i=0;i<totalEstudiantes;i++){
			var indice = localStorage.key(i);
			var estudiante = $.parseJSON(localStorage.getItem(indice));
			if(parseInt(estudiante.nota)>notaMayor){
				nombreNotaMayor=estudiante.nombre;
				notaMayor=estudiante.nota;
			}
		}
		alert("El estudiante con la mayor nota es: "+nombreNotaMayor+ " y su nota es: "+ notaMayor);
	});


	//Esta función se encarga de mostrar la nota menor.
	document.getElementById("notaMenor").addEventListener('click',function(){
		var nombreNotaMenor = "";
		var notaExist = false;
		for(i=0;i<localStorage.length;i++){
			var indice = localStorage.key(i);
			var estudiante = $.parseJSON(localStorage.getItem(indice));
			//Valido si existe la nota, si no existe la cargo, sino la comparo con la existente.
			if(!notaExist){
				nombreNotaMenor = estudiante.nombre;
				notaMenor = estudiante.nota;
				notaExist = true;
			}else if(parseInt(estudiante.nota) < notaMenor){
				nombreNotaMenor = estudiante.nombre;
				notaMenor = estudiante.nota;
			}
		}
		alert("El estudiante con la menor nota es: "+nombreNotaMenor+ " y su nota es: "+ notaMenor);
	});

}); /****  FIN DOCUMENT.READY ****/


// cargo el estudiante en el formulario.
function editarEstudiante(codigo){
	for(i=0;i<localStorage.length;i++){
		var indice = localStorage.key(i);
		if(codigo === indice){
			var estudiante = $.parseJSON(localStorage.getItem(indice));
			$("#codigo").val(estudiante.codigo);
			$("#nombre").val(estudiante.nombre);
			$("#nota").val(estudiante.nota);
		}
	}
}


//Borra un estudiante.
function borrarEstudiante(codigo){
	localStorage.removeItem(codigo);
	listarEstudiantes();
	recargarFormulario();
}

// Lista los estudiantes en la tabla.
function listarEstudiantes(){
	var info = "";
	for(i=0;i<localStorage.length;i++){
		var indice = localStorage.key(i);
		var estudiante = $.parseJSON(localStorage.getItem(indice));
    //Armo la tabla en cada iteración.
    info += "<tr>" 
					+ "<td>" + estudiante.codigo + "</td>"
          + "<td>" + estudiante.nombre + "</td>"
          + "<td>" + estudiante.nota + "</td>"
          + "<td> <button class='btn-table' onclick=\"editarEstudiante('"+estudiante.codigo+"');\">Editar</button> </td>"
          + "<td> <button class='btn-table' onclick=\"borrarEstudiante('"+estudiante.codigo+"');\">Borrar</button> </td>"
          + "</tr>";
  }
	$("#tbody").html(info);	
}

//Limpio el formulario y recargo el codigo
function recargarFormulario(){
	$("form")[0].reset();
	recargarIndice();
}

//Busca el indice siguiente y lo carga.
function recargarIndice(){
	var idEstudiante;
	var inputId = $("#codigo");
	if(localStorage.length > 0){
		idEstudiante = localStorage.length +1;
	}else{
		idEstudiante = 1;
	}
	inputId.val(idEstudiante);
}
	
// Valido que el codigo no exista en el array.
function validarCodigoExistente(codigo){
	if(isNaN(codigo)){
		return false;
	}
	return true;
}	

// Valido que el nombre sea valido
function validarNombre(nombre){
	if(!isNaN(nombre)){
		return false;
	}
	if(nombre === ""){
		return false;
	}
	return true;
}

// Valido que la nota sea valida
function validarNota(nota){
	if(isNaN(nota) || nota === ""){
		return false;
	}
	return true;
}






