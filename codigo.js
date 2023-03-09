function calcular(){
    var semilla, resu;
    var constante;
    var final;
    var tamaño;
    var momen;
    var Contenido = new Array();
    //Funcion para pasar un string a un numero
    let myFunc = num => Number(num);
    constante = document.getElementById("const").value;
    semilla = document.getElementById("semilla").value;
    resu = document.getElementById("resultados").value;
    if (constante==""||semilla==""||resu=="") {
        confirm("No debe haber campos vacíos");
        window.location.reload();
    } else {
        document.write('<p>La constante es: '+constante+'</p>');
        document.write('<p>La semilla fue: '+semilla+'</p>');
        for (var i=1;i<=resu;i++) {
            final = constante*semilla;

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
                        momen = intArr.join();
                        momen = momen.replace(/,/g, "");
                        //insertar el valor en otra lista
                        for (let index = 0; index < Contenido.length; index++) {
                            if (momen == Contenido[index]) {
                                alert("No puede haber valores repetidos en la secuencia");
                            }else{
                                Contenido.push(momen);
                            }
                        }
                        
                        document.write('<p class ="resultados">R'+i+' = 0.'+momen+'</p>');
                        break;
                    case 6:
                        intArr.unshift(0);
                        intArr.unshift(0);
                        intArr.shift();
                        intArr.shift();
                        intArr.pop();
                        intArr.pop();
                        momen = intArr.join();
                        momen = momen.replace(/,/g, "");
                        //insertar el valor en otra lista
                        for (let index = 0; index < Contenido.length; index++) {
                            if (momen == Contenido[index]) {
                                alert("No puede haber valores repetidos en la secuencia");
                            }else{
                                Contenido.push(momen);
                            }
                        }
                        document.write('<p class ="resultados">R'+i+' = 0.'+momen+'</p>');
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
                var momen = intArr.join();
                momen = momen.replace(/,/g, "");
                //insertar el valor en otra lista
                for (let index = 0; index < Contenido.length; index++) {
                    if (momen == Contenido[index]) {
                        alert("No puede haber valores repetidos en la secuencia");
                    }else{
                        Contenido.push(momen);
                    }
                }
                document.write('<p class ="resultados">R'+i+' = 0.'+momen+'</p>');
            }
            semilla = Number(momen);
        }
        //intArr.unshift(0); //agrega un 0 al inicio del arreglo
    }
}
