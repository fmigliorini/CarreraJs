var estudiantes = new Array();

//Esta función se encarga de mostrar todos los datos del JSON.
document.getElementById("registrarEstudiante").addEventListener('click',function(){
	var codigo = document.getElementById("codigo").value;
	var nombre = document.getElementById("nombre").value;
	var nota = document.getElementById("nota").value;
	
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

	
	siguienteEstudiante = estudiantes.length;

	estudiantes[siguienteEstudiante]={'codigo':codigo,'nombre':nombre,'nota': parseInt(nota)};

	//Cargo los estudiantes en la tabla.
  var info = "";
  for(i=0;i<estudiantes.length;i++){
    //Armo la tabla en cada iteración.
    info += "<tr>" 
					+ "<td>" + estudiantes[i].codigo + "</td>"
          + "<td>" + estudiantes[i].nombre + "</td>"
          + "<td>" + estudiantes[i].nota + "</td>"
          + "</tr>";
  }

  document.getElementById("tbody").innerHTML = info;	
	
	return false;
});

// Valido que el codigo no exista en el array.
function validarCodigoExistente(codigo){
	if(isNaN(codigo)){
		return false;
	}
	for(i=0;i<estudiantes.length;i++){
		if(estudiantes[i].codigo == codigo){
			return false;
		}
	}
	return true;
}	

// Valido que el nombre sea valido
function validarNombre(){
	if(!isNaN(nombre)){
		return false;
	}
	if(nombre == ""){
		return false;
	}
	return true;
}

// Valido que la nota sea valida
function validarNota(nota){
	if(isNaN(nota)){
		return false;
	}
	return true;
}

//Esta función se encarga de calcular el promedio entre todos los estudiantes.

document.getElementById("calcularPromedio").addEventListener('click',function(){
	var promedio;
	var totalNotas=0;
	for(i=0;i<estudiantes.length;i++){
		totalNotas+=estudiantes[i].nota;
	}
	promedio=totalNotas/estudiantes.length;
	alert("La nota promedio es: " + promedio);
});

//Esta función se encarga de mostrar la nota mayor.
document.getElementById("notaMayor").addEventListener('click',function(){
	var nombreNotaMayor = ""
	var notaMayor = 0;
	for(i=0;i<estudiantes.length;i++){
		if(estudiantes[i].nota>notaMayor){
			nombreNotaMayor=estudiantes[i].nombre;
			notaMayor=estudiantes[i].nota;
		}
	}
	alert("El estudiante con la mayor nota es: "+nombreNotaMayor+ " y su nota es: "+ notaMayor);
});

//Esta función se encarga de mostrar la nota menor.
document.getElementById("notaMenor").addEventListener('click',function(){
	var nombreNotaMenor = "";
	var notaExist = false;
	for(i=0;i<estudiantes.length;i++){
		//Valido si existe la nota, si no existe la cargo, sino la comparo con la existente.
		if(!notaExist){
			nombreNotaMenor = estudiantes[i].nombre;
			notaMenor = estudiantes[i].nota;
			notaExist = true;
		}else if(estudiantes[i].nota < notaMenor){
			nombreNotaMenor = estudiantes[i].nombre;
			notaMenor = estudiantes[i].nota;
		}
	}
	alert("El estudiante con la menor nota es: "+nombreNotaMenor+ " y su nota es: "+ notaMenor);	
});

