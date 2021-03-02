function mostrar()
{
	let acumulador=0;
	let numero;
	let promedio;
	let i=0;
	    
     while(i<5){
		 numero=parseInt(prompt("ingrese un numero; "));
		 acumulador=acumulador+numero;
		 i++; // variable de control 
	 }	

	  promedio=acumulador/5;
	
    document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=promedio;

 }  //FIN DE LA FUNCIÓN