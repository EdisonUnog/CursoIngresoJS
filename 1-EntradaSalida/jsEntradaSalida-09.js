/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo=parseFloat(document.getElementById("txtIdSueldo").value);
	let aumento= (sueldo * 10) /100;
	let respuesta=sueldo + aumento ;
	//let respuesta= (sueldo  + aumento).toFixed(nuemro de decimales "2"); 
	document.getElementById("txtIdResultado").value ="El sueldo que te corresponde es: US $" +respuesta.toFixed(2);
}
