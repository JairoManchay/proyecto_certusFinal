/* Métodos de cadena -> objeto String */

const result = document.getElementById("resultado");

// datos
let cadena = "Hola mundo";
let buscarCadena = "m";

// procesos
cadena = cadena.toLowerCase();
buscarCadena = buscarCadena.toLowerCase();

let pos = cadena.indexOf(buscarCadena);

// Resultado
result.innerText="La posicion del arreglo es: " + pos;

// ejemplo 02
let usuario = "jperez";
let mensaje="";
const txtUser = document.getElementById("txtUsuario");
const btnEnviar = document.getElementById("btnEnviar");
const textoMostrar = document.getElementById("resultado2");

btnEnviar.onclick = function(){
    // Procesos
    // capturar el valor
    let user = txtUser.value;

    usuario = usuario.toLowerCase();
    user = user.toLowerCase();

    if(usuario == user){
        mensaje=" Usuario existe";
    }else{
        mensaje = "Usuario no existe";
    }
    textoMostrar.innerText=mensaje;
}



// Ejemplo 3: cortar cadenas
// Datos
const cadenaOriginal = document.getElementById("txtCadena");
const btnCortar = document.getElementById("btnCortar");
const result3 = document.getElementById("resultado3");

btnCortar.onclick = function(){
    // Proceso
    let cadOriginal  = cadenaOriginal.value;
    let cadCortada = cadOriginal.split(" ");
    // Salida
    result3.innerText = "La cadena cortado es de: " 
    + cadCortada.length +
    "\n" + "Indice 0: " + cadCortada[0] + 
    "\n" + "Indice 1: " + cadCortada[1] +
    "\n" + "Indice 2: " + cadCortada[2];
}


/*Ejemplo 4: Array */

let mensaje2 ="";
// Datos 
const btnArray = document.getElementById("btnArray");
const result4 = document.getElementById("resultado4");

// declarar un array
let cadArray = "Hola cmo estas";
let numArray = [100,200,300,400];

// * Archivo de datos
let users = ["jperez", "nmarcos", 1];
let pass = ["certus@", "123certus", 0];
let estado = [1,0];


btnArray.onclick=function(){

    if(estado[0] ==1){
        mensaje2 =  "El usuario esta activo";
        result4.innerText="El mensaje es: " + mensaje2 +"\n" +
        "Tamaño cadArray: " + cadArray.length + "\n" +
        "Tamaño numArray: " + numArray.length + "\n" + 
        "Tamaño users: " + users.length + "\n" +
        "Indice 7 de cadArray: " + cadArray[7] + "\n" + 
        "Pass de jperez: " + pass[0];
    }else{
        mensaje2="El usuario esta bloqueado"
    }
}