/*
localStorage.setItem('Apellido','Martinez'); //localStorage es propio de la api, asi se debe escribir, y aca estoy guardando con el setItem, primero defino que quiero guardar, el valor de la key que guardamos, en este caso un apellido, y en el segundo parametro pongo el apellido a guardar, es decir, el parametro de esa key.

sessionStorage.setItem('Apellido', 'Torres');
//aca se almacena en la sesion, hasta q cierre el navegador, y este y el anterior, no se correlacionan

localStorage.setItem('Apellido', 'Messi');
//aca se sobreescribe el de la linea 1, sirve para cambiar clave, usuario, o hasta actualizar el carrito de compras, pisando los localStorage anteriores

//creamos muchos en local y en sesion
localStorage.setItem('nombre','Emiliano');
localStorage.setItem('apellido','Velazquez');
localStorage.setItem('edad',24);
localStorage.setItem('esMayor',true);
sessionStorage.setItem('nombre','Martina');
sessionStorage.setItem('apellido','DiMaria');
sessionStorage.setItem('edad',15);
sessionStorage.setItem('esMayor',false);

//Si vuelvo a guardar una clave que ya existe, voy a sobreescribir su valor
sessionStorage.setItem('edad',16);

let emailUsuario = document.getElementById('emailAddress');
let btnLogin = document.getElementById('btnLogin');


btnLogin.addEventListener('click', ()=>{
    localStorage.setItem('Email', emailUsuario.value)
}) //de esta manera, cuando le den click a login, el valor que le dio el usuario al emailUsuario, se va a guardar en una variable llamada email, dentro del almacenamiento local

console.log(localStorage.getItem('Email')) 
//con getItem traigo lo que habia alacenado con setItem en el amacenamiento local, en este caso, el mail traigo

let titulo = document.getElementById('titulo');
titulo.innerText = `Bienvenido ${(localStorage.getItem('nombre'))}`

//por ejemplo, aca cambiamos el titulo principal, con un innerText, que escribe con una plantilla literal la palabra bienvenido, y del almacenamiento, busca el nombre almacenado

for (let i = 0; i < sessionStorage.length; i++) {
    let clave =sessionStorage.key(i);
    let valor = sessionStorage.getItem(clave);
    console.log('Clave: ' + clave);
    console.log('Valor: ' +valor);
} 
//el FOR recorre todas las key, justamente con el metodo .key(i), y para la clave de esa key, simplemente hacemos getItem(clave)


//---------- JSON ------------

//Todos los elementos se me guardan en string en el storage, para poder pasarlos a numero, necesitamos el formato JSON( JAVASCRIPT OBJECT NOTATION), es independiente de JS, voy a poder usarlos con phyton por ej, JSON nos sirve para mover informacion



let nacho = {
    user: 'Ignacio',
    edad: 24,
    casado: false,
}

// sessionStorage.setItem('user', nacho); En vez de esto, hacemos esto
sessionStorage.setItem('user', JSON.stringify(nacho))

let usuarioYo = JSON.parse(sessionStorage.getItem('user'));
console.log(usuarioYo); 

//USANDO JSON PARA PASAR EL OBJETO NACHO A UN STRING DE OBJETO PLANO PARA QUE NO ME SALGA [object Object]

// console.log(JSON.stringify(nacho));
// de esta manera, te muestra todo el objeto de manera plana(en una linea), usamos el metodo JSON de JavaScript, y me lo convierte a formato json(formato plano), que es lo que sale en la consola, que es diferente al metodo usado aca

// -------- explicacion -----------

//Tenemos un objeto, de ese objeto, queremos guardarlo en el almacenamiento de la sesion, si lo guardamos de una, se guarda con [object Object], por eso usamos JSON, su atributo stringify nos convierte en string ese objeto, y luego lo volvemos a hacer objeto, pero esta vez visible, con JSON.parse, de igual manera esto en el almacenamiento es siempre en string, por eso lo debemos pasar a string y a objeto

//con ARRAY 
let carrito = [{
    nombre: 'papas',
    cantidad: 3,
    marca: 'Pringles'
},
{
    nombre: 'cerveza',
    cantidad: 2,
    marca: 'Andes'
}]

localStorage.setItem('carritoEnStorage', JSON.stringify(carrito));
let carritoString = JSON.parse(localStorage.getItem('carritoEnStorage'))
console.log(carritoString)

//Borrando solo una clave

localStorage.removeItem('carritoEnStorage')

//borrando todo lo que hay en el almacenamiento en el storage

localStorage.clear()
sessionStorage.clear()

*/

let recordarmeEnElNavegador = document.getElementById('rememberMe');
let btnLogin = document.getElementById('btnLogin');
let btnBorrarParcial = document.getElementById('btnVaciarSessionStorage');
let btnBorrarTotal = document.getElementById('btnVaciarLocalStorage');

//funcion para guardar datos

function guardarDatos(storage){
    let correoElectronico = document.getElementById('emailAddress').value;
    let password = document.getElementById('password').value;
    
    const usuario = {
        'user': correoElectronico,
        'pass': password,
    }

    storage.setItem('user', JSON.stringify(usuario))
}

//funcion ara borrar datos

function borrarDatos(storage){
    storage.clear()
}

btnBorrarTotal.addEventListener('click', ()=>{
    borrarDatos(sessionStorage);
    borrarDatos(localStorage)
})

btnBorrarParcial.addEventListener('click', ()=>{
    borrarDatos(sessionStorage)
})

btnLogin.addEventListener('click', () => {
    if (recordarmeEnElNavegador.checked) {
        guardarDatos(localStorage)
    }else{
        guardarDatos(sessionStorage)
    }

})

