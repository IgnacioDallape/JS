
/*
let elementID = document.getElementById("parrafoEspecial"); 
console.log(elementID);
//de esta manera, me traigo un solo id a js y lo guardo en la variable elemnet para poder interactuar con ella, puedo verlo en la consola. 


let elementsClass = document.getElementsByClassName("resaltado");
console.log(elementsClass)
 //aca lo mismo pero para las clases. Me trae un html collection que es un tipo de arrays



let elementTag = document.getElementsByTagName("p")
console.log(elementTag)
// aca me trae todos los tag que sea p (parrafos), y tambien es un gtml collection


for (const element of elementTag) {
    console.log(element)
}

//Asi lo recorremos a los elementos y nos dice cada uno donde se ubica dentro del array generado previamente arriba

// QUERY SELECTOR ---> cuando quiero que cumpla dos condiciones, por ejemplo que sea un span y que sea de clase resaltado tambien, solo es para UN elemento, me trae el primer elemento que cumpla con las condiciones

let elementoQS = document.querySelector("span.resaltado")
console.log(elementoQS)

//QUERY SELECTOR ALL ---> si quiero que me traiga todo elemento que cumpla ambas condiciones, uso este

let todosQS = document.querySelectorAll("span.resaltado");
console.log(todosQS);


//QUERY SELECTOR ALL MAS ESPECIFICO ---> puedo ampliar la especificidad muchisimo de este modo

let especificoQS = document.querySelectorAll("input[type =´text´]")
// console.log(especificoQS)

// ----- APLICACIONES QUE PUEDO HACER --------> siempre tengo que llamar al elemento primero

let titulo = document.getElementById("tituloPrincipal");

titulo.innerText = "hola soy un nuevo título"  //con este le cambio el nombre
titulo.className = "bg-info text.ligth" //con este le cambio la clase, puedo poner clases de BBootstrap o propias como backRojo, que no puse pero podria poner

//puedo interactuar con el usuario para modificar cosas en el html, por ej el titulo

let nuevoTitulo = prompt("Ingresa un nuevo titulo");
titulo.innerText = nuevoTitulo;


let imagen = document.getElementById("imagen");
let colorElegido = prompt('Elegí una imagen: \n1-Info sobre DOM en fondo blanco \n2-Info sobre DOM en fondo negro');
if (colorElegido == '1') {
    imagen.src = './img/domWhite.png';
} else if (colorElegido == '2') {
    imagen.src = "./img/domBlack.jpg";
} else{
    imagen.src = "./img/404.webp"
}




let contenedor = document.querySelector("#teoria");
contenedor.innerHTML += "<p>Soy un nuevo párrafo agregado a través del método innerHTML. Debería aparecer luego de la imagen de DOM. </p>" 
//la etiqueta ----innerHTML---- me permite con el += poner cosas en el html que no estan escritas en el mismo, si le pongo solo =, todos los parrafos se van a reemplazar por lo que puse en el inner <p>

// CREANDO DIV con createElement al final del html

let nuevoDiv = document.createElement("div")
document.body.appendChild(nuevoDiv);
nuevoDiv.innerHTML = '<footer class="container-fluid bg-warning text-light py-5"><span>Flor Hendel 2022</span></footer>'

// aca lo que estoy haciendo es, crear una nueva variable que se llama nuevo div, donde creo, con createElement, un div que no esta en el html, luego llamo al ya exitente body, con document.body, y con .appendChild, le agrego el nuevo div que acabo de crear de la sig manera document.body.appendChild(nuevo div). Despuiies con innerHTML lo que hago es agregarle al elemento creado previamente (div) lo que yo quiero, en este caso un footer con su respectiva clase, que tiene un span dentro

//CREANDO DIV con createElement, pero al inicio del HTML
nuevoDiv = document.createElement("div")
document.body.prepend(nuevoDiv);
nuevoDiv.innerHTML = '<footer class="container-fluid bg-warning text-light py-5"><span>Flor Hendel 2022</span></footer>'




//ELIMINANDO ELEMENTOS, en este caso la imagen
let imagen = document.getElementById("imagen");
imagen.remove()


let producto ={
    id: 1,
    nombre: 'SMART TV SAMSUNG 32"HD',
    codigo: 'UN32T4300AGCZB',
    precio: 65000,
    imagen: './img/TV32.jpg',
    descripcion_corta: 'Led Smart TV 32"',
    descripcion: 'Led Smart TV 32" HD. Resolucion 1366x768PX. Sintonizador TDA. Brilllo 250 CD/M2. Frecuencia de barrido 60HZ. Sonido Stereo. Potencia RMS 10W. Wi Fi. HDMI. USB. Salidas de audio Optical. Entrada de video componente.'
}

console.log(producto)
//Usando concatenacion de strings
let concatenado = "ID: " + producto.id + " - Producto: " + producto.nombre + " - $" + producto.precio;
console.log(concatenado);
let plantilla = `ID: ${producto.id}, nombre ${producto.nombre}, codigo ${producto.codigo}, descripcion ${producto.descripcion}`
console.log(plantilla)

//con las comillas invertidas (``) me sirve para no concatenar todo con el signo +, entonces deberia seguir el sgte orden:
// let nombre = `id ${nombre.id} esto se vería en la consola, el precio es ${nombre.precio}`

plantilla = `ID: ${producto.id}-
nombre ${producto.nombre}-
codigo ${producto.codigo}-
descripcion ${producto.descripcion_corta}`
alert(plantilla)


let producto ={
    id: 1,
    nombre: 'SMART TV SAMSUNG 32"HD',
    codigo: 'UN32T4300AGCZB',
    precio: 65000,
    imagen: './img/TV32.jpg',
    descripcion_corta: 'Led Smart TV 32"',
    descripcion: 'Led Smart TV 32" HD. Resolucion 1366x768PX. Sintonizador TDA. Brilllo 250 CD/M2. Frecuencia de barrido 60HZ. Sonido Stereo. Potencia RMS 10W. Wi Fi. HDMI. USB. Salidas de audio Optical. Entrada de video componente.'
}

//ADEMAS puedo hacer lo que hice anteriormente, separarla en diferentes lineas, y me va a salir como la escribi arriba, en diferentes lineas, buenisimo

let contenedorTarjetas = document.querySelector('.contenedorTarjetas')
let tarjeta = document.createElement('div');
tarjeta.className = 'card my-5 bg-light';
tarjeta.id = `${producto.id}`;
tarjeta.innerHTML = `<h2 class="backRojo">${producto.nombre} </h2>
<img src="${producto.imagen}" class="card-img-top imagenProducto" alt="${producto.descripcion_corta}">
<div class="card-body ">
    <p class="card-text">${producto.descripcion}</p>
    <span class="resaltado" id="precio">$ ${producto.precio}</span>
</div>
<div class="card-footer "><a href="#" class="btn btn-primary ">Comprar</a></div>`;
contenedorTarjetas.append(tarjeta)

*/