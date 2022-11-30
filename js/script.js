//ESTO ES UN COMENTARIO "CTRL + K + C", ESTO ES PARA UNA LINEA
/* ASI SE HACE UN MULTILINEA
O CON EL ATAJO SELECCIONANDO VARIAS 
LINEAS */

/*  --------- LET -----------
let nos permite modificar su valor
en algun momento determinado, es decir, la 
reasigno, usando la palabra let de nuevo.
*/
 let catar = ""

//let miNombre = "ignacio"; //declaro la variable y la inicializo.
//let minombre = "igna";  //esta es diferente a la de arriba, ya que la mayuscula modifica todo
//let miApellido = "dallape";


/* ---------- CONST ---------
Permite declarar datos
que no se van a modificar a 
lo largo del proyecto 
*/

//const IVA = 0.21;
//const TATUAJE = "me tatue";  //SE SUELEN PONER EN MAYUSCULA, PARA SABER Q SON CONSTANTES.

// --------- IMPORTANTE, NO USAR CARACTERES ESPECIALES PARA NOMBRAR VARIABLES, TAMPOCO NUMEROS AL INICIO, POR EJ "1TAZA", SI SE PUEDE AL FINAL.


//let ciudad; // puedo crearla sin ningun valor
//ciudad = "mendoza" //y puedo asignarla mas adelante

// ------ OPERACIONES ARITMETICAS --------- 
//let numeroA = 5;
//let numeroB = 8;
//const PI = 3.14;
//
//let suma = numeroA + numeroB;
//let resta = numeroB - numeroA;
//let multiplicacion = numeroA * numeroB;
//let division = numeroB / numeroA;
//
//let modulo = numeroB % numeroA ; //Este es el famoso mod de pseint, que nos da el resto de la division

//--------- CONCATENAR ------------

//let palabra1 = "Hola";
//let palabra2= "Mundo";
//let remate = "A la grande le puse Cuca";
//let numero = 27;
//let numeroString = "39";
//
//let concatenar1y2 = palabra1+palabra2; //esto queda HolaMundo, sin espacios
//
//let concatenarConEspacio = palabra1 + " " + palabra2; // console.log(concatenar1y2conEspacio) = Hola Mundo, quedaria así

//--------- COMO INTERACTUAR CON EL USUARIO -----------


/*
let nombreUsuario = prompt("ingresa tu nombre");   // lo pongo dentro de un let asi me queda guardado en la variable, el prompt siempre lo guarda como cadena de caracteres.

alert ("bienvenido " + nombreUsuario); //alerta en el navegador.
*/


//---------- Console.log -------------

/*
console.log(division); // de esta manera nos lo muestra en la consola del navegador

console.log("el resultado es = " + suma) // de esta manera agregamos un string antes del rdo

let edadUsuario = parseInt(prompt("ingresa tu edad")); //me pasa string a numero
let alturaUsuario = parseFloat(prompt("ingresa tu altura")); //me pasa numero decimal a entero
console.log(edadUsuario);
console.log(alturaUsuario);
*/


//et edadActual = parseInt(prompt("ingresa tu edad actual"));
//let edadEn5anios = edadActual + 5;
//console.log(edadEn5anios);
//alert("en 5 años tendras " + edadEn5anios + " años.");



/*  -------- IF -------- */


/*
let nombre = prompt("ingresa tu nombre")            //le pregunto al usuario el nombre
if(nombre=="pepe"){                                 //si su nombre es igual a pepe
    console.log("bienvenido pepe")                  //me dice esto
}
else if(nombre==""){                                //si no cumple el if, el else if es como un si dentro del si
    console.log("no ingresaste nombre de usuario")
}
else{                                               //y el else es un un sino
        console.log( "hola " + nombre)
}

// con parseInt (transfrorma lo ingresado en numero)



let calorias = parseInt (prompt(" ingrese las calorias consumidas en el dia"))
    if(calorias<1500){
        console.log("usted esta consumiendo muy pocas caloras")
    }
    else if (calorias < 2000){
        console.log("usted consume en un rango moderado")
    }
    else if (calorias < 2500){
        console.log("esta en un rango medio alto de consumo")
    }
    else(calorias > 2500)
    {
        console.log("esta en un rango excesivo de consumo")
    }
*/

/*
// ------------- BOOLEANOS ----------
let conEnvio = false
let envio = prompt("quiere que le enviemos su pedido? Pulse 1 para si, y 2 para no");
if (envio == 1){
    conEnvio = true
}
else{
    conEnvio = false
};

if(conEnvio=true){
    let direccion = prompt ("ingrese su direccion")
    console.log("el paquete será enviado mañana a " + direccion)
}
else{
    console.log("su producto podrá ser retirado del local el dia de mañana")
}
*/

/*
// OPERADOR && - AND
let usuario = prompt("ingrese usuario")
let contrasenia = prompt("ingrese contraseña")

if ((usuario == "nacho") && (contrasenia == "1234")){
    console.log("bienvenido " + usuario)
}
else{
    console.log("usuario incorrecto")
}
*/

// OPERADOR OR
/*
let pregunta1 = prompt("donde se esta jugando el mundial de futbol 2022?")

if ((pregunta1 == "Qatar") || (pregunta1 == "Catar") || (pregunta1 == "catar") || (pregunta1 == "qatar")){
    console.log("Correcto!")
}
else{
    console.log("Incorrecto :(")
}
*/


// ------------- FOR(PARA) ------------

