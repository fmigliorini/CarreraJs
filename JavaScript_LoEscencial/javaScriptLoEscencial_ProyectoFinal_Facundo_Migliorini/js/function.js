var estudiantes = [
{
	"codigo":"001",
	"nombre":"Pablo",
	"nota":8
},
{
	"codigo":"002",
	"nombre":"Franco",
	"nota":7
},
{
	"codigo":"003",
	"nombre":"Maria",
	"nota":9
},
{
	"codigo":"004",
	"nombre":"Claudia",
	"nota":2
},
{
	"codigo":"005",
	"nombre":"Marcos",
	"nota":4
},
{
	"codigo":"006",
	"nombre":"Fernanda",
	"nota":1
},
{
	"codigo":"007",
	"nombre":"Cintia",
	"nota":7
},
{
	"codigo":"008",
	"nombre":"Fabian",
	"nota":6
},
{
	"codigo":"009",
	"nombre":"Angel",
	"nota":8
},
{
	"codigo":"010",
	"nombre":"Facundo",
	"nota":10
}];

//Esta función se encarga de mostrar todos los datos del JSON.
function mostrarTodo(){
	var info = "";
	for(i=0;i<estudiantes.length;i++){
		info+="Codigo: "+estudiantes[i].codigo+
					" Nombre: "+estudiantes[i].nombre+
					" Nota: "+estudiantes[i].nota+
					"<br>";
	}
	document.getElementById("todo").innerHTML = info;
}

//Esta función se encarga de calcular el promedio entre todos los estudiantes.
function calcularPromedio(){
	var promedio;
	var totalNotas=0;
	for(i=0;i<estudiantes.length;i++){
		totalNotas+=estudiantes[i].nota;
	}
	promedio=totalNotas/10;

	document.getElementById("promedio").innerHTML = "La nota promedio es: " + promedio;
}

//Esta función se encarga de mostrar la nota mayor.
function notaMayor(){
	var nombreNotaMayor = ""
	var notaMayor = 0;
	for(i=0;i<estudiantes.length;i++){
		if(estudiantes[i].nota>notaMayor){
			nombreNotaMayor=estudiantes[i].nombre;
			notaMayor=estudiantes[i].nota;
		}
	}
	document.getElementById("mayor").innerHTML = "El estudiante con la mayor nota es: "+nombreNotaMayor+ " y su nota es: "+ notaMayor;
}

//Esta función se encarga de mostrar la nota menor.
function notaMenor(){
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
	document.getElementById("menor").innerHTML = "El estudiante con la menor nota es: "+nombreNotaMenor+ " y su nota es: "+ notaMenor;	
}


