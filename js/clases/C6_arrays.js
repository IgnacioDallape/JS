

// -------   ARRAYS  ---------> SON COMO LISTAS
const arrayVacio = [];
const carrito = [ "pizza" , "cerveza", "papel", "palta", "helado", "pollo", "arroz"];
const mix = ["Messi", "pelota", "argentina", 2, true,["HELADO", 1], 9]; 
const numeros = [1,2,3,4,5,6,7,8,9];
const perros = [ "boxer", "coker", "labrador", "pitbull", "doberman", "mastin napolitano", "dogo de burdeos", "dogo argentino"];
const gatos = ["michi", "fuz", "garfield"];


//como podemos ver, son listas que arrancan del valor 0, donde pueden tener muchos datos y diferentes tipos dentro, hasta otras arrays!

/*

console.log(numeros [2] ); //como podemos ver, llamo al elemento 2, pero me da el numero 3, porque arranca a contar del 0

//SIEMPRE USAMOS EL LENGTH EN ESTE CASO CON EL FOR, A MENOS QUE BUSQUEMOS OTRA COSA

console.log(numeros.length) //cantidad de elementos que hay, 9.
for(let i = 0; i<numeros.length ; i++){  //en length nos da la longitud del arrays, pero siempre me da un numero mas alto que el que es realmente, ya que comienza de 0 el arrays, por eso usamos el menor que vemos en el for, para poder llegar bien a la cantidad de unidades del arrays. en este caso el i llega hasta ser < que 9, es decir 8.
    console.log("el numero ubicado en el casillero " + i + " es: " + numeros[i]);
}

let resultado = numeros[2]*numeros[4];
console.log("el resultado de " + numeros[2] + " x " + numeros[4] + " es de :" + resultado);


// REASIGNANDO VALORES DENTRO DEL ARRAYS.

carrito[0] = "fideos"; //asi la redefino, pero hay una mejor forma.
console.log(carrito); 


// AGREGANDO OTRO ELEMENTO ---> podemos agregar elementos a un arrays existentes

carrito[3] = "magdalenas";
console.log(carrito);   //asi agrego

carrito[20] = "coca";
console.log(carrito); 
for(let i = 0; i<carrito.length; i++){
    console.log(carrito[i]);
}       //tener cuidado con esto porque pueden quedar espacios vacios como aca, por eso no es la mejor opcion.



// LA MEJOR MANERA DE AGREGAR SERIA ASI ---> 

//PUSH agrega uno o mas elementos al final del array

carrito.push("tierra", "ajo" , "cebollas");
console.log(carrito);

//para agregarlos al principio del array usamos el UNSHIFT.

carrito.unshift("arroz", "carne");
console.log(carrito);

//que nos lo de el usuario.

let final = prompt("ingrese un producto a comprar al final de la lista");
carrito.push(final);
console.log(carrito);

let principio = prompt("ingrese un producto al incio de la lista");
carrito.unshift(principio);
console.log(carrito);



// SACAR ELEMENTOS DEL ARRAY ----->

// POP ---> elimina el ultimo elemento del array

let eliminado = carrito.pop();
console.log(carrito);
console.log(eliminado);  // te puede devolver lo quue borró

//SHIFT ---> elimina el primer parametro del array

eliminado = carrito.shift();
console.log(carrito);
console.log(eliminado);

//SPLICE ---> elimina un o mas elementos de una posicion especifica, dentro del parametro deberiamos usar, primero la posicion de donde arranca a borrar, y el segundo, opcional, la cantidad que quiero borrar

console.log(carrito);
carrito.splice(2,4);
console.log(carrito); //aca se ve como elimino un trozo desde la posicion 2

//si no ponemos el segundo numero dentro del parametro, elimina desde donde ponemos, todo en adelante.

carrito.splice(2);
console.log(carrito); //para este eliminar la linea 85, ahi vemos como elimina todo desde la posicion 2.


//TO.STRING ---> convierte todo el array en una string.

const aCadena = carrito.toString();
console.log(aCadena);
console.log(carrito);

//aca se nota como lo convierte en una cadena de caracteres, puede tener muchas utilidades el .to.String

//JOIN ---> igual que el anterior, pero el to.string los une con una coma los elementos, aca podemos elegir que usamos.

const imprimible = carrito.join(" & ");
console.log(imprimible);


//CONCAT ---> concatena los elementos de 2 arrays y los hace 1 sola, el orden en este caso seria, primero el arrays de perros y despues los gatos

const mascotas = perros.concat(gatos);
console.log(mascotas);

const otrasMascotas = perros + gatos;  //y esto seria como el to.string, lo hace una cadena de caracteres
console.log(otrasMascotas);



//SLICE ---> cuando queremos modificar un arrays, lo hacemos desde una copia, esta copia, la realizamos con .slice
console.log(perros);
const otrosPerros = perros.slice(1, 4); //primer numero, desde donde quiero copiar, segundo numero, hasta que posicion quiero copiar, que no la incluye a la misma, en este caso, en vez de ser doberman, es pitbull, porque no incluye la posicion 4, es como que fuera asi: desde 2 hasta <4
console.log(otrosPerros);

//si quiero copiar completamente, solo pongo 0 entre parentesis.
console.log(gatos);
const otrosGatos = gatos.slice(0);
console.log(otrosGatos); 

//aca se copiaron todos los datos, para no modificar el original sirve todo esto, por ejemplo, ordenar alfabeticamente los nombres ingresados en una array, pero no modifico el original



//INDEXOF ---> nos devuelve la posicion de x elemento en un array

console.log(carrito.indexOf("palta"));

//si el elemento no exite, nos devuelve un -1, si no, nos da la posicion, puede servir para borrar un elemento por ej con elemento splice.

//INCLUDES  ---> me dice si esta o no el elemento en el array, devuelve true o false

console.log(carrito.includes("palta"));
console.log(carrito.includes("jamon"));

//REVERSE() ---> da vuelta el array
console.log(carrito);
console.log(carrito.reverse());

// ARRAYS OBJETOS

const librosLeidos = [ {id:1, titulo: "el poder de los habitos", fecha: 1998}, {id:2, titulo: "el club de las 5am", fecha: 1988}];

console.log(librosLeidos);

librosLeidos.push({id:3, titulo: "padre rico padre pobre", fecha: 2000});

console.log(librosLeidos);

//EJEMPLO BUCLE FOR OF ---> ver mejor, pero basicamente se repite hasta que termine el arrays librosLeidos

for( const libro of librosLeidos){
    console.log(libro.titulo)
};
for( const libro of librosLeidos){
    console.log(libro.fecha)
};
for( const libro of librosLeidos){
    console.log(libro.id)
};

//todo esto nos permite recorrer un arrays de objetos, sin saber el numero de los mismos

*/