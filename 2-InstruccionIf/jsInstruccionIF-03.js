function mostrar()
{
	//tomo la edad  
	let edad=parseInt(document.getElementById("txtIdEdad").value);
	if(edad>=18){
		alert("Usted es mayor de edad, Adelante");
	}else{
		alert("Eres menor de edad no puedes ingresar");
	}

}//FIN DE LA FUNCIÓN