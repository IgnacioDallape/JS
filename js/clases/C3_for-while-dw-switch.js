/*
// FOR

// TABLA DE MULTIPLICAR DE x numero


let ingresarNumero = parseInt(prompt("ingrese un numero"))

for(let i = 1; i < 11; i++){
    let resultado = ingresarNumero * i
    console.log("El resultado de " + ingresarNumero + " x " + i + " = " + resultado)
}


// TURNOS CON NOMBRE



for(let i = 0 ; i < 21 ; i=i+1){
    let nombrePaciente = prompt("ingrese su nombre")
    console.log( nombrePaciente + " su turno es el numero " + i)
}




//BREAK CON LOGIN



for (let i = 0; i < 3 ; i++){
    let usuario = prompt("ingresa tu usuario")
    let password = prompt("ingresa tu contraseña")

    if ((usuario == "nacho") && (password == "1234")){
        console.log("bienvenido " + usuario + "!!!")
        break;    //EL BREAK SIRVE PARA CORTAR EL FOR
    }
    else {
        console.log("contraseña y/o usuario incorrecto")
    }
    
    
}


// CONTINUE 
//SALTEA LO QUE NOSOTROS LE PIDAMOS, POR EJ

for(let i = 1; i <= 10; i++){
    if( i % 2 == "1"){         //EL % ES MOD
        continue;            //SALTEA LOS QUE TIENEN RESTOS IGAULES A 1
    }
    else{
        console.log("el numero par es: " + i)
    }

}

//CICLOS POR CONDICION

//------WHILE----------



let contador = 0;
let sumadorNotas = 0;
let nota= parseInt(prompt("ingresar nota: (-1 para salir)"))

while(nota != -1){
    contador = contador + 1
    sumadorNotas = sumadorNotas + nota;
    nota= parseInt(prompt("ingresar nota: (-1 para salir)"))

};
let promedio = sumadorNotas/contador;
console.log("se ingreasaron " + contador + " notas");
console.log(" el promedio del curso fue de : " + promedio );



//----------DO WHILE ------- igual que el anterior, pero por lo menos se ejecuta una vez, el anterior primero ve si se cumple la condicion

let equipo;

do{
    equipo = prompt("ingresa tu equipo favorito de futbol, s para salir");
    if(equipo != "s"){                                      //ponemos este if, porque siempre ejecuta el bloque al menos una vez, entonces necesitamos
        console.log("tu equipo favorito fue " + equipo);    //el if para que no aparezca la s al final, en la consola.
    }
}while(equipo != "s");         



// ---------- SWITCH -----------

let producto = prompt("ingresa el producto y te dire el precio por kilo");

switch(producto){
    case "manzana":
        console.log("el precio de la manzana por kilo es $300")
        break;
    case "durazno":
        console.log("el precio de la manzana por kilo es $200")
        break;
    case "banana":
        console.log("el precio de la manzana por kilo es $100")
        break;
    case "naranja":
        console.log("el precio de la manzana por kilo es $150")
        break;
    case "mandarina":
        console.log("el precio de la manzana por kilo es $250")
        break;
    case "frutilla":    
    case "pera":                                                    //de esta manera, se puede usar con 2 productos, es como el or, frutilla o pera
        console.log("el precio de la frutilla o pera es de $400")   //imprime esto    
        break;                                                      //y despues de esto siempre break, para cortar lo que le sigue.
    default:
        console.log("fruta sin stock por el momento")
        break;
}
*/