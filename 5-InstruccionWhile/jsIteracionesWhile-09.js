/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	
	let max;
	let min;
	let numero;
	let seguir;
	let flag=1;
	//iniciar variables
     do{
		 numero=parseInt(prompt("ingrese un numero: "));
		 while(isNaN(numero)){
			 numero=parseInt(prompt("Esto no es un numero. intente nuevamente"));
		 }

		 if(flag || numero>max){
			 max=numero;
		 }if(flag || numero<min){
			 min=numero;
			 flag=0;
		 }

	    seguir=prompt("desea continuar?");
	   }while(seguir=='s');
		
		
	
	document.getElementById("txtIdMaximo").value=max;
	document.getElementById("txtIdMinimo").value=min;
} 
 //FIN DE LA FUNCIÓN
 // 1._declaro una variable (numero, max, min, seguir)
 // 2._genero del bucle del tipo que el usuario quiera
 // ----codigo del bucle----
 // 3._pido numero
 // 4._valido numero
 // 5._identifico si estoy en la primera itaracion o en las siguientes
 //5.2._si estoy en la primera iteracion mi numero va a ser mi max y mi min
 //5.2._si no estoy en la primera iteracion
 //5.2.1._me fijo en el numero es un nuevo max(de ser asi actualizo)
 //5.2.2._me fijo en el numero es un nuevo min(de ser asi actualizo)
 //6._pregunto si ingresa otro numero
 //---------------------------------
 //7._informo el maximo y el minimo