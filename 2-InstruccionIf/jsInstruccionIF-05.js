function mostrar()
{
	//tomo la edad  
	let edad=parseInt(document.getElementById("txtIdEdad").value);
	if(edad >=13 && edad<=17){
		alert("Eres Adolecente");
	}else{
		alert("No Eres Adolecente");
	}

}//FIN DE LA FUNCIÓN