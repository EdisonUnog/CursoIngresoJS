/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo = prompt("ingrese f ó m .").toLowerCase();// de mayuscula a minuscula
	
	// (sexo != f && sexo != m && sexo != 'F' && sexo != 'M') es otra opcion
    while(!(sexo=='f' || sexo=='m')){
		sexo = prompt("Error. Ingrese f ó m .").toLowerCase();;
	}
	document.getElementById("txtIdSexo").value=sexo;
}//FIN DE LA FUNCIÓN