function mostrar()
{

	let numero;
	let mayor;
	let posMayor;
   
	  for(let i=0; i<3; i++){
		  numero=parseInt(prompt("ingrese un numero: "));
		  if(i==0 || numero>mayor){
			  mayor=numero;
			  posMayor=i+1
		  }
	  }
	  alert("el mayor es: "+ mayor+ " en la posicion " + posMayor)
;	

}//FIN DE LA FUNCIÓN