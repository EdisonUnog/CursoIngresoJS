/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero;
	let acumPos=0;
	let acumNeg=1;
	let seguir;
	let contNeg=0;
	do{
       numero=parseInt(prompt("Ingrese un numero: "));
	   while(isNaN(numero)){
		  numero=parseInt(prompt("Eso no es numero. Ingrese numero: ")); 
	   }
         if(numero>=0){
			 //positivo
			 acumPos=acumPos+numero;
		 }else{ 
			 acumNeg=acumNeg*numero;
			 contNeg++;
		  }
         
        seguir=prompt("Quiere continuar: ");
	}while(seguir=='s');

	 if(contNeg==0){
		acumNeg=0;
    }


	document.getElementById("txtIdSuma").value=acumPos;
	document.getElementById("txtIdProducto").value=acumNeg;

}//FIN DE LA FUNCIÓN
// Estrategia de resolucion:_
// 1._variables (numero, acumulador de positivos y negativos)
// 2._generar un bucle del tipo mieentras el ususario quiera
// ---- lineas de codigo de lo que debo hacer dentro del bucle----
// 3._pido un numero
// 4._validar que sea un numero
// 5._analizar el signo del numero
// 6._actualizo el acumulador que corresponde
// 7._preguntar si quiere continuar, si contunua se retrocede hasta el punto 3 y vuelve a repatir el bucle
// ----hasta que el ususario ya no quiera continuar-----
// 8._mostar los resultados