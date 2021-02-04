/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	/*let num1=document.getElementById("txtIdNumeroUno").value;
	let num2=document.getElementById("txtIdNumeroDos").value;
	suma = parseInt(num1) + parseInt(num2);
	alert("Su respuesta es: " + suma);*/

	let num1= parseInt(document.getElementById("txtIdNumeroUno").value);
	let num2= parseInt(document.getElementById("txtIdNumeroDos").value);
	suma= num1 + num2 ;
	alert(suma);
}

