const arrayDeClubes = ["independiete","racing","boca","river","san lorenzo"];
const arrayDeColores = ["rojo","amarillo","azul","verde","naranja"];
const arrayDePrendas = ["remera","short","camisa","pantalon","bermuda"];
const arrayDeComida = ["hamburguesa","pancho","choripan","pizza"];
const arrayDeNumeros = [1,2,3,4,5,6,7,8];

/*

arrayDeClubes.push("newells");
console.log(arrayDeClubes);

// ----- LONGITUD DEL ARRAY -----

console.log("La longitud del arrays de comida es de " + arrayDeComida.length + " elementos");
arrayDeComida.push("Doritos");
console.log("La longitud del arrays de comida es de " + arrayDeComida.length + " elementos");

//mostrando cierto elemento en especifico

console.log(arrayDeClubes[5])

//usando el de numeros para sumar
console.log(arrayDeNumeros[5]);
console.log(arrayDeNumeros[2]);
console.log(arrayDeNumeros[5] + arrayDeNumeros[2])

//reasignando valores dentro del array
console.log(arrayDePrendas[3]);
console.log(arrayDePrendas);
arrayDePrendas[3] = "gorra";
console.log(arrayDePrendas[3]);
console.log(arrayDePrendas);



//La mejor manera de agregar al final es con PUSH

arrayDeClubes.push("rosario central","central cordoba", "patronato")
console.log(arrayDeClubes);

//el usuario ingresando mas y usando slice para copiar un array en otro

let seguir = true;
const arrayDeClubesNuevo = arrayDeClubes.slice(0)
while(seguir){
    let ingreso = prompt("ingrese mas clubes, pulse x para salir");
        if(ingreso.toUpperCase() == "X"){
            seguir = false;
            break;
        } else {
            arrayDeClubesNuevo.push(ingreso)
            
        }

}

console.log(arrayDeClubesNuevo);
console.log(arrayDeClubes);


//ingresando al principio del array con UNSHIFT

console.log(arrayDeColores);
arrayDeColores.unshift("morado", "celeste");
console.log(arrayDeColores);

arrayDeColores.unshift(prompt("ingrese un color al inicio de la lista"))
console.log(arrayDeColores)


// sacar elementos al FINAL array con POP

console.log(arrayDeComida);
let eliminado = arrayDeComida.pop();
console.log(arrayDeComida);
console.log(eliminado);


//sacar elementos al INICIO del arrays con SHIFT

console.log(arrayDeComida);
let eliminado = arrayDeComida.shift();
console.log(arrayDeComida);
console.log(eliminado);



//sacar elementos dentro de un RANGO especifico con SPLICE

console.log(arrayDeColores);
let eliminado = arrayDeColores.splice(1,3);
console.log(arrayDeColores);
console.log(eliminado);



//hacerlo cadena de caracteres con TOSTRING, lo separa con comas

console.log(arrayDeClubes);
console.log(arrayDeClubes.toString());


//hacer una cadena de caracteres el arrays con JOIN, lo separa con lo que queramos

console.log(arrayDeClubes);
console.log(arrayDeClubes.join(" - "));

//concatenar elementos de colores y comida en un solo array con CONCAT

const concatenado = arrayDeColores.concat(arrayDeComida)
console.log(concatenado);
console.log(concatenado.join(" - "));

//copiando un arrays parcial o totalmente con SLICE

const arrayNuevo = arrayDeColores.slice(0) //todo
const arrayNuevo2 = arrayDeNumeros.slice(2,5) //del elemento 2 al 5 nomas
console.log(arrayNuevo);
console.log(arrayNuevo2)


//averiguando la posicion de un color con INDEXOF

console.log(arrayDeColores.indexOf("verde"));

//viendo si esta existe un color en el array con INCLUDES
console.log(arrayDeColores.includes("morado"));
console.log(arrayDeColores.includes("rojo"));


//dar vuelta el array con REVERSE
console.log(arrayDeClubes);
console.log(arrayDeClubes.reverse())


//Fumcion  con return y preguntandole al usuario

function calcularMasa(peso,altura){
    let masaTotal = peso * altura ; 
    return masaTotal
}
function decirMasa(total){
    alert("la masa total es de: " + total)
}
let a = parseInt(prompt("ingrese un numero"));
let b = parseInt(prompt("ingrese otro numero"));
let masa = calcularMasa(a,b);
decirMasa(masa)

//funcion Flecha para sacar el iva
let iva = (total) => total * 1.21;
alert(iva(1000))
alert(iva(2000))



//Objetos

const jugadoresProfesionales = {
    nombre: "leo",
    apellido: "messi",
    numero: 10,
}
console.log(jugadoresProfesionales.numero)
console.log(jugadoresProfesionales["nombre"])


function Goats(nombre, apellido, posicionRanking){
    this.nombre = nombre;
    this.apellido = apellido;
    this.posicionRanking = posicionRanking;
}

const messi = new Goats("Leo", "Messi", "1");
const maradona = new Goats("diego", "maradona", "2")
console.log(messi)
console.log(maradona)

//cambiando parametro

maradona.nombre = "Diego Armando"
maradona.apellido = "Maradona"
console.log(maradona)


//aca un objeto que posee una funcion dentro, ingreso parametros y puedo ejecutar la funcion
function Camion(marca,modelo,color){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.describir = function(){console.log(("El camion marca " + (this.marca) + ", del año " + (this.modelo) + ", tiene un color " + (this.color)).toUpperCase())}
}

const camion1 = new Camion("Volvo",2002,"gris")
camion1.describir()
//para saber el contenido de Camion
for(const parametros in camion1){
    console.log(parametros)
}
//para saber el contenido de camion1
for(const parametros in camion1){
    console.log(camion1[parametros])
}

//clases
class Estudiante{
    constructor(nombre,carrera,anio){
        this.nombre = nombre;   
        this.carrera = carrera;
        this.anio = anio;
    }
    hablar(){
        console.log("Mi nombre es " + (this.nombre) + ", estudio " + (this.carrera) + " y estoy en " + (this.anio) + " año.")
    }
}

const estudiante1 = new Estudiante("Ignacio", "Administración de empresas", "5")
estudiante1.hablar()
*/