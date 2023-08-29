window.addEventListener("load", init);

let total_notas;
let total_UV;
total_notas = 0;
total_UV = 0;
const totalnotas = total_notas.reduce((a, b) => a + b, 0);
const totaluv = total_UV.reduce((c, d) => c + d, 0);
console.log(totalnotas);

function init(){
    var boton = document.getElementById("boton_calcular");
    var resultados = document.getElementById("boton_resultados");
 
    boton.addEventListener("click", calcularCUM);
    resultados.addEventListener("click", resultados);
}

function calcularCUM(){
 var materia = document.getElementById("nombre_materia").value;
 var nota = document. getElementById("nota_total").valueAsNumber;
 var UVs = document.getElementById("UV_Materia").valueAsNumber;
 var salida_box = document.getElementById("salida_Datos");

 var NotaGanada = nota * UVs;

 total_notas = total_notas + NotaGanada;
 total_UV = total_UV + UVs;
 


 console.log(total_notas);

 var Cum = total_notas / total_UV;

 salida_box.value = "Su CUM es " + Cum;

 if(salida_box.value != "")
 {
 var agregar = confirm("¿Desea agregar otra materia?")
 if( agregar == true){
     calcularCUM;
 }
}
}