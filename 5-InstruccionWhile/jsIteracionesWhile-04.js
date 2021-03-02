/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero=parseInt(prompt("ingrese un número entre 0 y 10."));
    
	// while(numero<0 || numero>9 || isNaN(numero)) fuera del rango
	
	while(!(numero>=0 && numero<=9)){ //mientras no estoy dentro
         numero=parseInt(prompt("Error, vuelve a intentar"));
		//informo error y lo vuelvo a pedir
	}
	document.getElementById("txtIdNumero").value=numero;
	
}
// si el while es falso, no entro y continuo. Si es verdadero entro al bucle y vuelvo a repetir la misma opcion.
//  FIN DE LA FUNCIÓN
//  isNaN(numero)==true: para cuando en ves de numero ponen un nombre.