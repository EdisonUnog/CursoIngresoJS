function mostrar()
{
	//tomo el mes
	 var mesDelAño =document.getElementById("txtIdMes").value;
	
	 /*if(mesDelAño=="Enero"){
		alert("Que comiences bien el año...!!!");
	}else if(mesDelAño=="Marzo"){
		alert("A clases...!!!");
	}else if(mesDelAño=="Julio"){
		alert("Se vienen las vacaciones");
	}else if(mesDelAño=="Diciembre"){
        alert("Felices fiestas");
	}*/

	 // otra forma de escribir un par de opciones
    switch(mesDelAño){
		case "Enero":
		case "Febrero":
			alert("que comiences bien el año");
			break;
	    case "Marzo":
			alert("A clases");
			break;
		case "Julio":
			alert("Se vienen las vacaciones");
			break;
		case "Diciembre":
			alert("Felices fiestas");
			break;
	}

}//FIN DE LA FUNCIÓN