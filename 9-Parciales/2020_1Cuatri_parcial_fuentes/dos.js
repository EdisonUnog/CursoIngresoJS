function mostrar()
{
  let precio;
  let cantidad;
  let importe;
  let importeBruto;
  let seguir;
  let acumC=0;
  let acumCal=0;
  let acumA=0;
  let tipoMax;
  let descuento;
  let neto;
  let maxPrecio;
  let tipo;
  let caro;
  flag=0;
    
  do{
      tipo=prompt("ingrese tipo cal/arena/cemento: ");
      while(tipo!="cal" && tipo!=camento && tipo!=arena){
        tipo=prompt("este producto no existe. vuelva a ingresar cal/arena/cemento:");
      }
      cantidad=parseInt(prompt("ingrese cantidad"));
      while(isNaN(cantidad) || cantidad<=0){
        cantidad=parseInt(prompt("error. ingrese cantidad"));
      }
      precio=parseInt(prompt("ingrese precio")){
        while(isNaN(precio) || precio<=0){
          precio=parseInt(prompt("error. ingrese precio")); 
        }
      }
      importe=precio*cantidad;
      sub




    seguir=prompt("quiere comprar algo mas")
  }while(seguir=='s');


}
// 1 declaracion de variables (tipo, cantidad, precio, importeB, importe)
