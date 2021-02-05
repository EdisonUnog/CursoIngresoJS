function mostrar()
{
	//tomo la edad  
	let edad=parseInt(document.getElementById("txtIdEdad").value);
	let estado=document.getElementById("estadoCivil").value;
	if(edad < 18 && estado!="Soltero"){
		alert("es muy pequeño para NO ser soltero");
	}else{
		alert("Sigue asi jj")
	}
	


}//FIN DE LA FUNCIÓN