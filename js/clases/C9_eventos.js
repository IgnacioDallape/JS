/*

// accion + reaccion = evento, el usuario hace una accion, el programa reacciona ante eso y la suma es el evento.

// --------- 3 FORMAS DE DEFINIR EVENTOS ----------- (2 bien, una mal pq se considera mala practica)

//DEFINO LAS CONSTANTES PARA QUE QUEDE TODO MAS ORDENADO
*/
const btnSaludoGenerico = document.getElementById('generico'),
btnSaludoPersonalizado = document.getElementById('personalizado'),
btnTest = document.getElementById('prueba'),
titulo = document.querySelector('.codertitulo')
fotoBotellas = document.getElementById('imgBotellas'),
caja = document.querySelector('.embajada')
inputNombre = document.querySelector('#inputNombre'),
inputPassword = document.querySelector('#inputPassword')

//CREO UNA FUNCION CON UN NOMBRE RELACIONADO

function saludarGenerico(){
    alert('Hola!')
}

// function alerta(nombre){
//     alert("hiciste click " + nombre)
// }


// btnTest.onclick = () =>{
//     let nombre = prompt("Ingresa tu nombre")
//     alerta(nombre)
// }
// Y ACA VIENE LO CHIDO, LLAMO AL BOTON DE SALUDO GENERICO DEFINIDO PREVIAMENTE, A ESO LE APLICO ESTA VARIABLE, QUE DENTRO TIENE LO QUE TIENE QUE HACER EL USUARIO PARA QUE PASE ALGO, EN ESTE CASO, SI HACE CLICK, QUE ESE NOMBRE YA LO ENTIENDE EL PROGRAMA, NO SE LO DOY PORQUE SI (INVESTIGAR LOS DIFERENTES COMANDOS COMO CLICK EN MDN) , EJECUTAR EL SALUDAR GENERICO, SIN LOS "()", PORQUE SI LOS PONGO, NO ESPERA A QUE HAGA CLICK PARA EJECUTAR LA FUNCION, POR ESO VA SIN PARENTESIS!!! Se aplica por unidad, no se puede hacer con arrays

// btnSaludoGenerico.addEventListener('click',saludarGenerico);

//PERO SI QUIERO USAR CON PARAMETROS COMO HAGO? SI NO PUEDO USAR PARENTESIS, BUENO, DE LA SIGUIENTE MANERA:

//creamos una nueva function
/*
function saludarPersonalizado(nombre){
    alert('Hola, ' + nombre)
}

//y hacemos lo mismo, NADA MAS QUE PARA EL PARAMETRO, HACEMOS UNA FUNCTION FLECHA Y AHI DENTRO LLAMAMOS LA FUNCTION



btnSaludoPersonalizado.onclick = ()=>{
    let nombrepedido = prompt('ingresa tu nombre');
    saludarPersonalizado(nombrepedido) //prompt para pedirselo al usuario arriba
}

btnSaludoGenerico.onclick = saludarGenerico //lo mismo que la primera del metodo anterior

// btnSaludoPersonalizado.ondblclick = ()=>{
//     let nombrepedido = prompt('ingresa tu nombre');
//     saludarPersonalizado(nombrepedido)
// }  //siempre que no podamos usar los parentesis pq la llamaria directamente, usamos una funcion flecha, y ademas uso el dobleclick

btnTest.onclick = ()=> {
    console.log('hiciste click')
}


btnTest.onmousemove = ()=>{
    console.log('moviste el mouse por aca')
} //aca registra los pixeles por los que se movio el mousse, por ejemplo puede servir para una zona de calor 

caja.onmouseover = ()=>{ //se va a disparar solo una vez cuando ingrese a la caja
    caja.style.backgroundImage = 'url("./img/estados.jpg")'; //style es una propiedad de js que me permite modificar el css del elemento, en este caso el backgroundimage
    console.log('eeuu')
}

//recien hice cambiar la imagen porque entro el mousse, pero cuando salga puedo hacerlo cambiarla tambien de la sgte manera

caja.onmouseout = ()=>{
    caja.style.backgroundImage = 'url("./img/australia.jpg")';
    console.log('australia');
}

let radios = document.querySelectorAll('input[type = "radio"]')
console.log(radios);

// con un for of (buscar diferencia con el for in) podemos aplicarlo al array completo
for (const elemento of radios) { //importante el const para que no me cambie el valor del elemento cada vez que haga la vuelta
    elemento.addEventListener('click', ()=>{
        console.log('hiciste click en radiobutton ' + elemento.value)
    })
}

//LA TERCER FORMA ES HACER EL ONCLICK DENTRO DEL HTML, ES MALA PRACTICA ESO, NO HACER!!! NO MEZCLAR LOGICA CON CODIGO



//PONIENDO LA IMAGEN DE LA BOTELLA DEL COLOR SELECIONADO

function cambiarImagen(elemento, source){
    elemento.src = source;
}

const botellas = [{
    id: 1,
    nombre: 'Tupperware Twist 500',
    color: 'rosa',
    imagen: './img/rosa.webp'
}, {
    id: 2,
    nombre: 'Tupperware Twist 500',
    color: 'azul',
    imagen: './img/azul.webp'
}, {
    id: 3,
    nombre: 'Tupperware Twist 500',
    color: 'naranja',
    imagen: './img/naranja.webp'
}, {
    id: 4,
    nombre: 'Tupperware Twist 500',
    color: 'verde',
    imagen: './img/verde.webp'
}]

radios.forEach(item=>{
    item.addEventListener('click', ()=>{
        let colorUsuario = item.value;
        let variante = botellas.find(botella=>botella.color == colorUsuario); //find guarda TODO EL OBJETO que encuentra lo que le pedimos
        cambiarImagen(fotoBotellas, variante.imagen)

    })

})

//EVENTOS TECLADO

// inputPassword.addEventListener('keyup', ()=>{
//     console.log(inputPassword.value) //EL VALUE SE CAPTURA EN EL MOMENTO QUE PASA EN EL EVENTO, NO ANTES, EN ESTE CASO, CUANDO SUELTO LA TECLA. TENER EN CUENTA CUANDO SE CAPTURA EL VALUE.
// })
// inputPassword.addEventListener('keydown', ()=>{
//     console.log(inputPassword.value) //EL VALUE SE CAPTURA EN EL MOMENTO QUE PASA EN EL EVENTO, NO ANTES, EN ESTE CASO, CUANDO APRETO LA TECLA. TENER EN CUENTA CUANDO SE CAPTURA EL VALUE.
// })

inputNombre.onchange = ()=>{
    console.log(inputNombre.value)
}

inputPassword.addEventListener('keypress', (evento)=>{
    let codCaracter = evento.charCode; //charcode nos da el dato en codigo ascii de la tecla que presionamos
    console.log(evento.key)

    if(codCaracter != 0){

        if(codCaracter < 97 || codCaracter > 122 ){ //las minusculas empiezan en 97 y terminan en 122, entonces si el charcode, que es en codigo ascii la tecla que uso, no pasa nada, pero si es mayor o menor, quiere decir que esta escribiendo en mayusculas o con otros caracteres
            evento.preventDefault() //si entra en este if no se escribe la letra
            alert("ESCRIBI EN MINUSCULAS PELOTUDO")
        }
    }

}) */