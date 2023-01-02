
let total = 0;

for(let i = 1; i <= 10; i++){
    total += i
}

console.log(total)

//Abstraerse de como funcionan las cosas, solo se que me va a funcionar para cierto momento, por eso es muy importante el nombre de las funciones

function sumarNumerosEntre(inicio,fin){
    let total = 0;

for(let i = inicio; i <= fin; i++){
    total += i
}

return(total)
}

sumarNumerosEntre(1,10)
console.log(sumarNumerosEntre(100,1000))


/*

//funcion de orden superior ---> recibe como parametros funciones

function sumar(numA,numB){
    return numA+numB
}

console.log(sumarNumerosEntre(sumar(10,80),1000)) //llamo a la funcion dentro de sumar numeros entre. tambien puede estar directamente una funcion flecha dentro de los parametros


//FOR EACH ---> le das un arrays y para cada objeto del arrays ejecuta una tarea

const numeros = [1,2,3,4,5,6,7,8,9]
const triplicados = []

numeros.forEach(element => {  //no tiene q ser si o si element, puede ser numeros o libros, etc, no se declara este parametro, parte de la abstraccion, tambien le podemos poner el index por ejemplo, para saber la posicion del elemento, de esta manera --> ((element,index) => ... ,
    element = element * 3;
    triplicados.push(element)
}); // es de orden superior porque le pasaamos una funcion flecha como parametro
console.log(numeros)
console.log(triplicados)

*/

//find(). Retorna el primer elemento que cumple con la condición. Si no hay ninguno, retorna undefined

const cursos = [{
    nombre : "javaScript",
    precio : 12000
},
{
    nombre : "desarrollo Web",
    precio : 10000
},
{
    nombre : "React Us",
    precio : 21000
},
{
    nombre : "Java",
    precio : 25000
}]

/*

const encontrado = cursos.find(cursos => cursos.precio>20000) // se leeria, en la variable cursos, buscame( un curso que el precio del mismo sea mayor a 20000), este retorna el PRIMER ELEMENTO QUE CUMPLA LA FUNCION, a pesar de que haya mas cursos que hayan sido de mas de 20000, por ejemplo, retorna el elemento, en este caso, React Us, y no java, si no encuentra ninguno, devuelve undefined
const noEncontrado = cursos.find((curso) => curso.precio == 12000);

console.log(encontrado)

console.log(noEncontrado)

let java = cursos.find((curso) => curso.nombre.includes("Java")); //o puedo buscar directamente si esta incluido cierto nombre, por ejemplo, esto lo puedo usar en un carrito, si tengo cierto producto ya en el carrito, identifico de esta manera que lo tengo, entonces si el consumidor quiere agregar otro producto igual, simplemente lo sumo, y no pongo 2 veces el mismo producto
console.log(java)

//some(). Retorna true si algún elemento cumple la condición, o false si ninguno lo hace, por ejemplo, en steam, si tengo un juego descargado, que puedo hacerlo con este some, me devuelve un false, y si me devuelve false, no le dejo descargar de nuevo el juego pq ya lo tiene

const alguno = cursos.some((curso) => curso.precio > 20000);
console.log(alguno);



//filter(). Retorna un array con todos los elementos que cumplen la condición. Si no hay ninguno, devuelve un array vacío. por ejemplo aca me devuelve react us y java, que son los dos que cumplen con la condicion, y me da el arrays completo, como se ve en el inspeccionar

const filtrado = cursos.filter(curso => curso.precio >20000);
console.log(filtrado)

// y aca el filter usando un prompt, como si un usuario buscara algo en un buscador.

let keyword = prompt("ingresa un curso")
const otroFiltrado = cursos.filter(cursos => cursos.nombre.includes(keyword))
console.log(otroFiltrado)


//map(). Retorna un array con la misma cantidad de elementos que el array original, pero con la operación aplicada

const cursosConDescuento = cursos.map(cursos =>{
    return {
        nombre: cursos.nombre,
        precio: cursos.precio*0.30
    }                                          // abrir llaves en una funcion flecha le hace saber que quiere que nos retorne
})

console.log(cursosConDescuento);
console.log(cursos)

//reduce(). Retorna un único valor que es la suma de todos los valores detallados, en la variable acumulador, va acumulando la suma parcial, es muy importante, y el 0 final es desde donde empieza a sumar
const numeros = [1,2,3,4,5,6,7,8,9,10,11]
const totalNums = numeros.reduce((acumulador,numero) => acumulador + numero, 0);
console.log(totalNums)
*/
/*
//y para esto es muy util, por ejemplo, puedo sumar todos los precios de la variable de objetos curso, por ejemplo, cuanto pagaria por los 4 cursos?

const totalCuenta = cursos.reduce((acumulador,elemento) => acumulador + elemento.precio, 0);
console.log(totalCuenta)

//estos eran metodos constructivos, ahora viene uno destructivo.

//sort(). Ordena el array original según la función elegida (menor a mayor, mayor a menor). METODO DESTRUCTIVO
const desordenados = [1, 5, 23, 45, 2, 78, 4];
const ordenados = desordenados.slice(); //hacemos un slice debido a q es destructivo, entonces de esta manera, no perdemos los datos.

ordenados.sort((a,b) => a-b)
console.log(ordenados)
ordenados.sort((a,b) => b-a)
console.log(ordenados)  //al hacer b - a, nos ordena de mayor a menor, si hacemos a - b, nos ordena de menor a mayor


//Objeto Math, en este objeto, ya tiene ciertas constantes matematicas declaradsas
console.log(Math.PI)
console.log(Math.max(22,33,44,11,55,123))
console.log(Math.min(22,33,44,11,55,123))

//por ejemplo, podemos ver que producto es el mas caro o mas barato, NO se le puede pasar arrays.

let azar = Math.random()*10;
console.log(azar); //este metodo te da un numero al azar entre 0 y 1, si quiero que me de mas alto, lo multiplico

//si quiero redondear mi numero, tengo estas opciones

console.log(Math.ceil(azar)); //este me redondea el numero entero cercano mas alto
console.log(Math.floor(azar)); //este me redondea el numero entero cercano mas bajo
console.log(Math.round(azar)); //este tiene en cuenta los decimales, y redondea al entero mas cercano
console.log(Math.trunc(azar)); //se queda solo con el entero, elimina los decimales

console.log(parseFloat( azar.toFixed(2))); //este nos da los decimales que queremos, pero no los da en string, por eso lo parseo, para mantenerlo como numero


let fechaActual = new Date();
console.log(fechaActual);

let  fechaSimple = new Date(2022,6,13);
console.log(fechaSimple)
let fechaConHora = new Date(22,6,13,23,59,59);
console.log(fechaConHora)

// el mes 6 en js script en julio, porque enero comienza en 0, a tener en cuenta, ademas, lo que no defino, se pone automaticamente en 0, por ejemplo la hora. En cambio, en el segundo, le doy la hora y la pone.


//cuenta regresiva

let infartoDeMiocardio = new Date(2022, 11, 18, 12);
console.log(infartoDeMiocardio);

console.log("La final del mundial se juega en " + infartoDeMiocardio.getFullYear())

console.log(infartoDeMiocardio.getFullYear());
console.log(infartoDeMiocardio.getMonth());
console.log(infartoDeMiocardio.getDate());
console.log(infartoDeMiocardio.getTime()); // este me lo da en milisegundos  desde x inicio de tiempo
console.log(infartoDeMiocardio.toString());

console.log(infartoDeMiocardio.getDay()); //este me da el dia de la semana en numero, empezando en 0 el domingo y terminando en 6 el sabado
*/
