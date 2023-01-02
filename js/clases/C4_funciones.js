/*
//FUNCIONES SIN PARAMETROS

// PRIMERO LA CREO

function darBienvenida(){
    alert("bienvenidos a las funciones!")
}

// DESPUES LA INVOCO A ESA FUNCION

darBienvenida();

// PIDIENDO EL NOMBRE 3 VECES

function pedirNombre(){
    let nombre = prompt("ingrese su nombre");
    alert ("el nombre ingresado es " + nombre)
}

pedirNombre();
pedirNombre();
pedirNombre();  

//ESTO ES MAS FACIL QUE HACERLO SIN LA FUNCION, YA QUE CREO LA FUNCION Y LA LLAMO 3 VECES Y LISTO, EN CAMBIO SIN LA FUNCION, DEBERIA CREAR UN PARA POR EJ. Y TE AHORRAS ACA LINEAS DE CODIGO.

//OTRO EJ, EDAD.

function calcularEdad(){
    const anio = 2022;
    let nacimiento = parseInt(prompt("ingrese su año de nacimiento"));
    let edad = anio - nacimiento;
    alert("su edad actual es de: " + edad)
}

calcularEdad();



// PARAMETROS DE FUNCIONES

function calcularMultiplicacion(num1, num2){
    let rdo = num1 * num2;
    alert("El resultado de multiplicar " + num1 + " X " + num2 + " es igual a: " + rdo)
}

calcularMultiplicacion(100,21); //100 seria num1 y 21 num2


// De esta manera, solo poniendo los datos dentro de los parentesis, cuando llamo a la funcion, hace que se ejecute el resto de la funcion correctamente, muy bueno.

//ahora lo mismo, pero el usuario los ingresa a los num
let primerNum = parseInt(prompt("ingrese el primer numero a multiplicar"));
let segundoNum = parseInt(prompt("ingrese el segundo numero a multiplicar"));

calcularMultiplicacion(primerNum,segundoNum);

//de esta manera la hago interactiva, y primerNum se convierte en el primer parametro que es num1 y lo mismo con segundoNum y num2, es decir, no importa el nombre del parametro que usemos, no hace falta que se llamen igual, es decir, se renombran.





function calcularIva(precio){
    let precioConIva = precio * 1.21
    alert("su precio mas iva es de " + precioConIva)
}
//usando el parseFloat, me permite ver los decimales en el rdo

for( let i=1; i<=4 ; i++){
    let precioProd = parseFloat(prompt("ingrese el precio de su producto"));
    calcularIva(precioProd);
}
//aca con el for, usamos una funcion dentro de un ciclo de repeticion.

let precioProd = parseFloat(prompt("ingrese el precio de su producto para calcular su precio mas iva, ingrese 0 para salir"))

while(precioProd != 0){
    calcularIva(precioProd);
    precioProd = parseFloat(prompt("ingrese el precio de su producto para calcular su precio mas iva, ingrese 0 para salir"))
}

//aca lo hicimos con un while, no hay que olvidarse de pedir de nuevo el dato dentro del mismo, para no hacer un ciclo infinito, por ejemplo aca, el precioProd



//RETURN ---------> Lo que hace, es sacar el valor de dentro de la funcion hacia afuera.

function CalcularM2(largo, ancho){
    let metrosCuad = largo * ancho;
    return metrosCuad
}
// aca me retorna el rdo de metros cuadrados
//hago una funcion para mostrar el resultado
function mostrarResultado(result){
    alert("el rdo es " + result + " mts cuadrados")
}
//aca saco fuera de la funcion el return en una vaariable
let resultado = CalcularM2(4,7);
//y aca hago que esas dos funciones se correlacionen, debido a que el resultado de la otra funcion, lo ingreso, mediante el return, a otra, para eso sirve el return por ejemplo.
mostrarResultado(resultado)


// FUNCIONES ANONIMAS -----> se usan para reducir la cantidad de lineas de codigo, no tienen nombre, su nombre es el de suma en este caso.

const suma = function(a, b){
    return a + b
}
alert(suma(2,7))


// FUNCIONES FLECHAS ----> es mas sumplificada, sin la palabra function.
//por ej, calcular el 10% de descuento sobre el precio. No se usa el return ni las llaves, si llego a tener mas parametros, las necesito.
let descuento = (precio) => precio * 0.1;
//se pone la flecha en las funciones flechas "=>"
alert(descuento(1000));
*/

