function Medios(){
    var x1, resu;
    var x0;
    var final;
    var tamaño;
    var resultadoFinal;
    var Contenido = new Array();
    //Funcion para pasar un string a un numero
    let myFunc = num => Number(num);
    x0 = document.getElementById("x0").value;
    x1 = document.getElementById("x1").value;
    resu = document.getElementById("resultados").value;
    if (x0==""||x1==""||resu=="") {
        confirm("No debe haber campos vacíos");
        window.location.reload();
    } else {
        document.write('<p>La x0 es: '+x0+'</p>');
        document.write('<p>La x1 fue: '+x1+'</p>');
        for (var i=1;i<=resu;i++) {
            final = x0*x1;

            //otro arreglo
            var intOtro = Array.from(String(final),myFunc);
            //parte modificada
            tamaño = intOtro.length;
            if (tamaño < 8) {
                //En caso de que no sea de longitud == 8
                var intArr = Array.from(String(final), myFunc);//Convierte un arreglo a un numero entero
                
                
                switch (tamaño) {
                    case 7:
                        intArr.unshift(0);//en caso de faltar un elemento
                        intArr.shift();
                        intArr.shift();
                        intArr.pop();
                        intArr.pop();
                        resultadoFinal = intArr.join();
                        resultadoFinal = resultadoFinal.replace(/,/g, "");
                        //insertar el valor en otra lista
                        for (let index = 0; index < Contenido.length; index++) {
                            if (resultadoFinal == Contenido[index]) {
                                alert("No puede haber valores repetidos en la secuencia");
                            }else{
                                Contenido.push(resultadoFinal);
                            }
                        }
                        
                        document.write('<p class ="resultados">R'+i+' = 0.'+resultadoFinal+'</p>');
                        //aqui se hizo el cambio
                        //de valores
                        x0 = x1;
                        x1 = resultadoFinal;
                        break;
                    case 6:
                        intArr.unshift(0);
                        intArr.unshift(0);
                        intArr.shift();
                        intArr.shift();
                        intArr.pop();
                        intArr.pop();
                        resultadoFinal = intArr.join();
                        resultadoFinal = resultadoFinal.replace(/,/g, "");
                        //insertar el valor en otra lista
                        for (let index = 0; index < Contenido.length; index++) {
                            if (resultadoFinal == Contenido[index]) {
                                alert("No puede haber valores repetidos en la secuencia");
                            }else{
                                Contenido.push(resultadoFinal);
                            }
                        }
                        //aqui se hizo el cambio
                        //de valores
                        x0 = x1;
                        x1 = resultadoFinal;
                        document.write('<p class ="resultados">R'+i+' = 0.'+resultadoFinal+'</p>');
                        break;

                    default:
                        //alert("Debes agregar un numero mayor a 8");
                        break;
                }
            }else{
                var intArr = Array.from(String(final), myFunc);
                intArr.shift();//elimina el primer elemento del arreglo
                intArr.shift();
                intArr.pop();
                intArr.pop();
                var resultadoFinal = intArr.join();
                resultadoFinal = resultadoFinal.replace(/,/g, "");
                //insertar el valor en otra lista
                for (let index = 0; index < Contenido.length; index++) {
                    if (resultadoFinal == Contenido[index]) {
                        alert("No puede haber valores repetidos en la secuencia");
                    }else{
                        Contenido.push(resultadoFinal);
                    }
                }
                //aqui se hizo el cambio
                //de valores
                x0 = x1;
                x1 = resultadoFinal;
                document.write('<p class ="resultados">R'+i+' = 0.'+resultadoFinal+'</p>');
            }
            x1 = Number(resultadoFinal);
        }
        //intArr.unshift(0); //agrega un 0 al inicio del arreglo
    }
}
