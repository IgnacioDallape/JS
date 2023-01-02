/*

// OBJETOS LITERALES
// definimos con const o let el objeto, y adentro lo llenamos de datos basicamente, el nombre seguido de un igual, luego llaves, dento se define el nombre del atributo, se ponen 2 puntos , entre comillas se pone la info necesaria, y se termina con una coma.

const lapicera = {
    marca:"toyo",
    color:"negro",
    trazo:"fino",
}
console.log(lapicera)

//para solo elegir un atributo del objeto, necesitamos hacer lo siguiente: por ejemplo : lapicera.color, y ahi nos da el atributo

console.log("el color de la lapicera es " + lapicera.color);

//o de esta forma tambien

console.log("la marca de la lapicera es: " + lapicera["marca"])

//modificar una propiedad, a pesar de que sea una constante, podemos alterar una o unas propiedades de la constante

lapicera.trazo = "grueso";

console.log(lapicera)



//podemos definir diferentes tipos de datos, numericos, boolianos, no solo strings

const producto = {
    nombre: "mousse wireless",
    marca: "logitech",
    cantidad: 34,
    disponibilidad: true,
}

console.log(producto)


//QUE PASA SI TENGO MUCHOS PRODUCTOS POR EJEMPLO

// -----------FUNCION CONSTRUCTORA - molde para crear objetos del mismo tipo

// ACA APARECEN LOS CONSTRUCTORES, QUE MEDIANTES MOLDES, PODEMOS PEDIR SIEMPRE LOS MISMOS PARAMETROS EN UN PRINCIPIO, Y DESPUES LO HACEMOS DE MANERA AUTOMATICA, POR EJEMPLO.
// aparece la palabra this, y la primer letra del nombre del molde va en mayuscula

function Automovil(marca,modelo,color){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
}

const auto1= new Automovil("VW", "Amarok", "gris");           //se llama al molde para poder rellenarlo haciendo lo siguiente, primero definimos la constante, luego un igual y ponemos new, que esto hace identificar que queremos llamar a un molde, luego el nombre del molde y dentro con comillas y comas, los datos ordenados
const auto2= new Automovil("toyota", "hilux", "blanco");

console.log(auto1)
console.log(auto2)

//cambiando un atributo por parte del cliente, importante que sea interactivo

auto1.color=prompt("ingresa el color del vehiculo " + auto1.marca + " " + auto1.modelo);

console.log(auto1)



//pasando un objeto literal como parámetro a constructor

function Mascota(objetoMascota){
    this.nombre=objetoMascota.nombre;
    this.raza=objetoMascota.raza;
}

const miPerro = new Mascota({nombre:"pichicho",raza:"caniche", edad:10});
console.log(miPerro);

//de esta manera, podemos pedir o dar muchos atributos, pero solamente se utilizarán los que necesitamos

const otroPerro = new Mascota({raza:"golden"});
console.log(otroPerro);

//por ejemplo, aca no le damos la raza, y me pone undefinded, y en el anterior le pasamos la edad pero no estaba pedida, por eso la ignoró



// METODOS Y OPERACIONES CON OBJETOS   ---> son funciones para objetos, que nos sirve darle una funcionalidad unicamente a ese constructor o molde

let cadena = "Hola nacho!"

console.log(cadena.toUpperCase()) //poniendo todo en mayuscula
console.log(cadena.toLowerCase()) //poniendo todo en minuscula
console.log(cadena.length) //me da el largo de la string

//utilidad de esto



let mejorJugador = prompt("ingrese el mejor jugador de la historia") //me lo pasa a minuscula,para no tener que poner 10 opciones en el if

if ((mejorJugador.toLowerCase()) == "messi"){
    console.log("Correcto")
}
else{
    console.log("no sabes de futbol")
}



let palabra = prompt("ingrese una frase y te damos la longitud de la misma")

console.log(" el largo de la frase es de: " + palabra.length)



// METODOS PERSONALIZADOS

//De esta manera, hago una funcion dentro de la constructora, y cuando la necesite, la llamo

function Persona(nombre,edad,altura){
    this.nombre = nombre;
    this.edad = edad;
    this.altura = altura;
    //ahora defino el metodo, en infinitivo, y le doy la funcion anonima, que quiero que haga
    this.hablar = function(){console.log("HOLA SOY" + (this.nombre).toUpperCase())}  //aca lo pongo asi para que salga en mayuscula, si no, valdría ponerlo solamente asi: ("HOLA SOY" + this.nombre)}
    //this.hablar = function(){console.log(("HOLA SOY" + this.nombre).toLowerCase())} --> y así pondria todo en minusculas
}

// defino las cnstantes

const persona1 = new Persona(" " + "homero",24,1.90);
const persona2 = new Persona(" " + "marge",20,1.62);

// y por ultimo llamo la funcion

persona1.hablar();
persona2.hablar();



//otro ejemplo

function Rectangulo(base,altura){
    this.base = base;
    this.altura = altura;
    this.calcularArea = function(){
        console.log("el area del rectángulo es de: " + this.base * this.altura)
    }
}

const rectangulo1 = new Rectangulo(10,5);
const rectangulo2 = new Rectangulo(10,2);


rectangulo1.calcularArea();
rectangulo2.calcularArea();

// Operador IN y FOR ... IN , esta nos sirve para saber si hay propiedades dentro de una funcion constructora

// de la siguiente manera sabremos las porpiedades que hay dentro de rectangulo1

for(const propiedad in rectangulo1){
    console.log(propiedad)
}       //de esta manera se el contenido del rectangulo1, no hace falta que se llame propiedad la const, ese nombre lo definimos nosotros

//si ademas quiero saber el valor de las propiedades...
for(const propiedad in rectangulo1){
    console.log(propiedad);
    console.log(rectangulo1[propiedad]) //aca necesito poner rectangulo1 en este caso, y la const, en este caso propiedad, entre corchetes si o si, solo en estos casos, no es super utilizado, el for off se usa mas.
} 

// CLASES

//Otra forma de definir estas variables, ponemos clase y dentro la constructora

class Persona{
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad   = edad;
        this.calle  = calle;
    }
    hablar(){
        console.log(("Hola soy " + this.nombre + ", tengo " + this.edad + " años" + " y vivo en la calle " + this.calle).toLowerCase())
    } //esta metodo solo deja cargado los datos, y lo ejecuto mas abajo -->
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("nacho", 23, "francia 742");

persona1.hablar();  //--> aca los ejecuto, si no, no me muestra nada
persona2.hablar();

//aca pidiendole los datos a la persona

let nombre = prompt("Ingresa tu nombre");
let edad = parseInt(prompt("ingresa tu edad"));
let calle = prompt("ingresa tu direccion")

const persona3 = new Persona(nombre, edad, calle);
persona3.hablar();

console.log(persona3)



//ACTIVIDAD EN CLASE --- BIBLIOTECA DE LIBROS FISICOS.


function Libro(nombreLibro, fechaEntrada){
        this.nombreLibro = nombreLibro;
        this.fechaEntrada = fechaEntrada;
        

} 

let nombreLibro = prompt("ingrese el nombre del libro");
let fechaEntrada = (prompt("ingrese el dia y mes de entrada (dd/mm)"));

const libro1 = new Libro(nombreLibro,fechaEntrada);

nombreLibro = prompt("ingrese el nombre del libro");
fechaEntrada = (prompt("ingrese el dia y mes de entrada (dd/mm)"));

const libro2 = new Libro(nombreLibro,fechaEntrada);

nombreLibro = prompt("ingrese el nombre del libro");
fechaEntrada = (prompt("ingrese el dia y mes de entrada (dd/mm)"));

const libro3 = new Libro(nombreLibro,fechaEntrada);

console.log(libro1);
console.log(libro2);
console.log(libro3);

*/