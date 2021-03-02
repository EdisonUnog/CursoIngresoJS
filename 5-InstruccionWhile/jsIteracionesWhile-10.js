/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let numero;
	let seguir;
	let acumNeg=0;
	let acumPos=0;
	let contPos=0;
	let contNeg=0;
	let contCeros=0;
	let contPares=0;
	let promPos;
	let promNeg;
	let diferencia;
	do{
		numero= parseInt(prompt("ingrese un numero: "));
		while(isNaN(numero)){
			numero= parseInt(prompt("Error. ingrese un numero: "));
		}
		//cosas que dependen del signo del numero
		if(numero>0){
			//positivo
			acumPos= acumPos+numero; //acumPos += numero
			contPos++;
		}
		else if(numero<0){
		   //negativo
		   acumNeg+= numero;
		   contNeg++;
		}
		else{
		  //cero
		  contCeros++;
		}
		//cosas que dependen de la paridad del numero
		if(numero % 2 == 0){
			contPares++;
		}


		//alert(numero);
		seguir= prompt("Quiere ingresar otro numero:");
	}while(seguir=='s');

	promPos= acumPos / contPos;
	promNeg= acumNeg / contNeg;

	diferencia= contPos - contPares;
	document.write("1._ Suma de los negativos: "+ acumNeg + "<br>");
	document.write("1._ Suma de los positivos: "+ acumPos + "<br>");
	document.write("1._ cantidad de positivos: "+ contPos + "<br>");
	document.write("1._ cantidad de negativos: "+ contNeg + "<br>");
	document.write("1._ cantidad de ceros: "+ contCeros + "<br>");
	document.write("1._ Cantidad de numeros pares: "+ contPares + "<br>");
	document.write("1._ promedio de positivos: "+ promPos + "<br>");
	document.write("1._ promedio de negativos: "+ promNeg + "<br>");
	document.write("1._ diferencia entre positivos y negativos: "+ diferencia + "<br>");

	



}
//FIN DE LA FUNCIÓN
// Estartegia de solucion
// 1._declaro una variable (numero, max, min, seguir)
 // 2._genero del bucle del tipo que el usuario quiera
 // ----codigo del bucle----
 // 3._pido numero
 // 4._valido numero
 // 5._analizar el signo del numero (generar un bloque de codigo para pos y tro para neg y otro para ceros)
 // 5.1._hago lo que tengo que hacer para los positivos (acumulo y cuento)
 // 5.2._hago lo que tengo que hacer para los negativos (acumulo y cuento)
 // 5.3._hago lo que tengo que hacer para los ceros (cuento)
 // 6._analizar el numero si es par