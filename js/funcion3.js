const btnCalcular = document.getElementById("btnCalcular");
const lblImporte = document.getElementById("digiteImporte");
btnCalcular.onclick = function(){
    // Capturando valor del input
    let texto = lblImporte.value;
    let inTexto = parseInt(texto);
    let resultado = 0;
    let descuento = 0.12;
    let importeFinal = 0;

    if(inTexto>=150){
        resultado = inTexto * descuento;
        importeFinal = inTexto - resultado;
    }else{
        importeFinal = inTexto;
    }
    const importCuent = document.getElementById("importeCuenta");
    const descuentoOtor = document.getElementById("descuentoOtorgado");
    const importCompra = document.getElementById("importeCompra");

    importCuent.innerText = "El importe es: " + inTexto;
    descuentoOtor.innerText = `El descuento que se aplicará es del: ${resultado}`;
    importCompra.innerText = "El importe de compra Final es: " + importeFinal;

}

/* Ejercicio02 */
const btnPro=  document.getElementById("btnPromedio");
const alumNo=  document.getElementById("nombreAlumno");
const notaPar = document.getElementById("notasParcial");
const examFin = document.getElementById("examenFinal");
const promePra = document.getElementById("promedioPractica");
btnPro.onclick = function(){
    let nombre = alumNo.value;
    let notaParcial = parseInt(notaPar.value);
    let examenFinal = parseInt(examFin.value);
    let promedioPractica = parseInt(promePra.value);
    
    let promedioFinal = 0;
    
    promedioFinal = (notaParcial + promedioPractica + 2*(examenFinal))/4;
    
    const nombreAlumno = document.getElementById("nombreAlumnoNota");
    const notaParc = document.getElementById("muestraParcial");
    const examenF = document.getElementById("muestraFinal");
    const promedioP = document.getElementById("promedioPracticaNota");
    const promeF = document.getElementById("promedioFinal");
    
    nombreAlumno.innerText = "Nombre del alumno: " + nombre;
    notaParc.innerText = "Nota Examen Parcial:  " + notaParcial;
    examenF.innerText = "Nota Examen Final: " + examenFinal;
    promedioP.innerText = " Nota del promedio Practicas: " + promedioPractica;
    promeF.innerText = "Nota del promedio Final: " + promedioFinal;
}

