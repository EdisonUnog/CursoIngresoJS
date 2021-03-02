/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave=prompt("ingrese el número clave.");

	while(clave != "utn750"){ //dato no es valido, dato es invalido
       clave=prompt("clave invalida.reingrese clave: ");
	}

	alert("clave valida");
// ingreso al while cuando el dato es invalido		
} //FIN DE LA FUNCIÓN
