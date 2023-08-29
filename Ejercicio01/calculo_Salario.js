window.addEventListener("load", init);

function init(){
   
    var boton = document.getElementById("boton_calcular");

    boton.addEventListener("click", calculo);

    
}

function calculo(){
    var nombre = document.getElementById("nombre_input").value;
    var cargo = document.getElementById("cargo_input").value;
    var horas_trabajo = document.getElementById("horasTrabajo_input").valueAsNumber;
    var pago_hora = document.getElementById("pago_input").valueAsNumber; 
    var salida_box = document.getElementById("salida_Datos");

    var salario_bruto = horas_trabajo * pago_hora;
    console.log(salario_bruto);

    var ISSS_descuento = salario_bruto * (salario_bruto * 0.03);

    if (ISSS_descuento > 30){
        ISSS_descuento = 30;
    }

    console.log(ISSS_descuento);
    var AFP_descuento = ISSS_descuento * (ISSS_descuento * 0.0725);
    var renta_descuento;
    if(salario_bruto < 472){
        renta_descuento = 0;
    } else if (salario_bruto < 895.24){
        renta_descuento = 0.10;
    } else if (salario_bruto < 2038.10 ){
        renta_descuento = 0.20;
    } else if (2038.11 < salario_bruto){
        renta_descuento = 0.30;
    } else {
         console.log("error en renta");
    }
    var total = AFP_descuento * (AFP_descuento * renta_descuento);


    salida_box.value = "Hola," + nombre + " en el cargo de " + cargo + "\nSu salario base es de " + salario_bruto 
    + "\n Su descuento de ISSS es de $" + ISSS_descuento +
     "\n Su descuento de AFP es de $" + AFP_descuento + 
     "\n Su descuento de rentas es " + renta_descuento + " porciento, \nSu salario total es $" + total;
    }



