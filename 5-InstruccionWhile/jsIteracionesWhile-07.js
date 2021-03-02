/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numero;
	let acumulador=0;
	let contador=0;
	let seguir;

	do{
		seguir=parseInt(prompt("Ingrese un numero: "));
        while(isNaN(numero)){
			numero=parseInt(prompt("Eso no es un numero. Ingrese numero"));
		}
		acumulador=acumulador+numero;  //(acumulados += numero)
		contador++;

		seguir=prompt("Quieres ingresar otro numero: ");
	}while(seguir=="s");
	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador/contador;

}//FIN DE LA FUNCIÓN
//estrategia de resolucion
//1- declarar variables