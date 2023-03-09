function Cuadrados() {
    let ArregloFinal = [];//Arreglo final de R's
    let myFunc = num => Number(num);//funcion que convierte arreglo a numero
    //intArr = Array.from(String(final), myFunc);//Convierte un numero entero en un arreglo
    
    //Paso 1 tomar los valores del html
    var x0 = document.getElementById("x0").value;
    var iteraciones = document.getElementById("resultados").value;

    //Declaracion de variables
    var resulOper;//guarda el resultado de la operacion cuadrado
    var tam;
    var FinalR;

    //Paso 2 verificar que no esten vacios
    if (x0!=""||resu!="") {
        //Imprimos el valor de nuestra semilla
        document.write('<p>La semilla es: '+x0+'</p>');
        //Hacemos el calculo con nuestra funcion cuadrado(x0);
        for (let ciclo = 0;ciclo<=iteraciones;ciclo++) {
            resulOper = cuadrado(x0);
            var ArraySinFiltros = Array.from(String(resulOper), myFunc);
            tam = ArraySinFiltros.length;
            if (tam==8) {
                FinalR = Ocho(ArraySinFiltros);
            }else if(tam==7){
                FinalR = Siete(ArraySinFiltros);
            }else if(tam==6){
                FinalR = Seis(ArraySinFiltros);
            }
            //document.write("0."+ConvertArrayaNum(FinalR)+"<br>");
            //Lo agregamos al arreglo final
            ArregloFinal.push(FinalR);
            //Escribimos R
            document.write("Posicion"+ciclo+": "+ArregloFinal[ciclo]+"<br>");
            //Cambiamos el valor de la semilla
            x0 = FinalR;
            }
            
        }else {
        confirm("No debe haber campos vacíos");
        window.location.reload();
        
    }//fin del else vacios
}















//Funcion para calcular el cuadrado de un numero
function cuadrado(x) {
    var final = Math.pow(x,2);
    return final;
}
function ConvertArrayaNum(Arreglo) {
    var Numero = Arreglo.join();
    Numero = Numero.replace(/,/g, "");
    return Numero;
}
function Ocho(Arreglo) {
    Arreglo.shift();//elimina el primer elemento
    Arreglo.shift();
    Arreglo.pop();//elimina el ultimo elemento
    Arreglo.pop();
    return Arreglo;
}
function Siete(Arreglo) {
    Arreglo.unshift(0);//Agrega cero al inicio
    Arreglo.shift();
    Arreglo.shift();//Elimina el primer elemento del arreglo
    Arreglo.pop();//elimina el ultimo elemento
    Arreglo.pop();
    return Arreglo;
}
function Seis(Arreglo) {
    Arreglo.unshift(0);//Agrega un cero al inicio
    Arreglo.unshift(0);
    Arreglo.shift();//Elimina el primer elemento del arreglo
    Arreglo.shift();
    Arreglo.pop();//elimina el ultimo elemento
    Arreglo.pop();
    return Arreglo;
}