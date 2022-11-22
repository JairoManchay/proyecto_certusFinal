/*Elaborar un programa que permita ingresar el nombre del trabajador, su sueldo básico y el número de hijos, se deberá mostrar su bonificación y el sueldo final. Tenga en cuenta que la empresa está dando una bonificación del 7% del sueldo básico sólo en el caso el trabajador tuviese hijos */


const btnEnviar = document.getElementById("btnEnviar");
btnEnviar.onclick = function(){
    let nombreE = prompt("¿Cual es el nombre?: ");
    let sueldoB = parseFloat(prompt("¿Cuál es su sueldo?: "));
    let numHijo = parseInt(prompt("¿Cuantos hijos tiene?: "));

    const nombreEmp = document.getElementById("nombreEmpleado");
    const sueldoBas = document.getElementById("sueldoBasico");
    const numeHijos = document.getElementById("numeroHijos");
    const bonificac = document.getElementById("bonificacion");
    const sueldoFin = document.getElementById("sueldoFinal");

    let boni = 0;
    let sueldoF = 0;
    /* Bonificacion sueldo * 0.7, luego sueldo Basico mas bonificacion*/
    if(numHijo>=1){
        boni = sueldoB * 0.7;
        sueldoF = sueldoB + boni;
    }else{
        sueldoF = sueldoB;
    }

    nombreEmp.innerText = "El nombre del empleado es: " + nombreE;
    sueldoBas.innerText = "El sueldo ingresado es: " + sueldoB;
    numeHijos.innerText = "La cantidad de hijos es: " + numHijo;
    bonificac.innerText = "La bonificación es de: " + boni;
    sueldoFin.innerText = "El sueldo Final es de: " + sueldoF;
}


/* Construir un programa que permita ingresar un número, si el número es mayor de 500, se debe calcular y mostrar en pantalla el 18% de este. */
const btnporcentaje = document.getElementById("btnPorcentaje");
const entradaNum = document.getElementById("txtNumero");
btnporcentaje.onclick = function(){
    let numEn = entradaNum.value;
    let num = parseInt(numEn);
    let calcularDato =0;
    const numeroIng = document.getElementById("numeroIngresado");
    const porcentaje = document.getElementById("porcentajeNumero");

    if(numEn>500){
        calcularDato = num * 0.18;
    }else{
        calcularDato = num;
    }

    numeroIng.innerHTML = "El número ingresado es: " + num;
    porcentaje.innerHTML = "El número calculado con el 18% da como respuesta: " + calcularDato;
}

/* Crea una aplicación que pida un número y calcule su factorial (El factorial de un número es el producto de todos los enteros entre 1 y el propio número y se representa por el número seguido de un signo de exclamación. Por ejemplo 5! = 1x2x3x4x5=120) */

/*Factorial */
function factorial(num){
    let dato = num;
    let r = 1;
    for(let i=dato; i>0; i--){
        r*=i;
    }
    return r;
}

/* Crea una aplicación que pida un número y calcule su factorial (El factorial de un número es el producto de todos los enteros entre 1 y el propio número y se representa por el número seguido de un signo de exclamación. Por ejemplo 5! = 1x2x3x4x5=120) */

const btnFacto = document.getElementById("btnFactorial");
const ingresarNum = document.getElementById("txtNumeroF");
btnFacto.onclick = function(){

    let numeroF = ingresarNum.value;
    let numFac = parseInt(numeroF);
    
    const numeroI = document.getElementById("numeroIngresado2");
    const fact = document.getElementById("FactorialN");
    let factorialD = factorial(numeroF);

    numeroI.innerText = "El número ingresado es: " + numFac;
    fact.innerText = `EL factorial de ${numFac} es: ` + factorialD;
}