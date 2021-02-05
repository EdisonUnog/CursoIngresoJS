function mostrar()
{
	//tomo la edad  
	let edad=parseInt(document.getElementById("txtIdEdad").value);
	if(edad<13){
		alert("Aun NO eres adolecente");
	}else if(edad >= 13, edad <= 17){
	  alert("Eres Un Adolecente, BIENVENIDO");	
	}else{
		alert("eres mayor de edad. No un adolecente");
	}


}//FIN DE LA FUNCIÓN