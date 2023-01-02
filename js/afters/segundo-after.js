class Libro{
    constructor(titulo,autor,anio,genero,valoracion,id){
        this.titulo = titulo;
        this.autor = autor;
        this.anio = parseInt(anio);     //lo paso a numero para poder ordenarlo mas adelante
        this.genero = genero;
        this.valoracion = parseInt(valoracion); //lo mismo aca
        this.id = id;
    }

    asignadId(array){     //esta dentro de la clase porque solo lo voy a poder utilizar en los objetos que sean libros
        this.id = array.length; //para saber el id, lo sacamos con la longitud del arrays, ya que a medida qeu agregue libros, va a crecer el arrays y nos va a dar un id diferente para cada libro, pero no contempla eliminar libros
        
    }

    /*
    asignarValoracion(valoracion){
        this.valoracion = valoracion;
    }
    */
}

// -------------- BASE DE DATOS -------------

const libros = [ 
    new Libro("American gods","Neil gaiman",2001,"Fantasía",6,1),
    new Libro("Némesis","Aghata Christie",1971,"Misterio",8,2),
    new Libro("Los elegantes pueden recordar","Aghata Christie",1972,"Misterio",7,3),
    new Libro("David Copperfield","Charles Dickens",1950,"Novela",8,4),
    new Libro("Narciso y Golmudo","Hermann Hesse",1930,"Novela",9,5),
    new Libro("Los Borgia","Mario Puzo",2001,"Novela Historica",8,6),
    new Libro("El hobbit","J.R.R Tolkien",1937,"Novela fantástica",10,7),

]

//--------------------Pedir que se ingresen libros nuevos y sumarlos al array-----------------------//

let continuar = true;

while(continuar){
    let ingreso = prompt('Ingresa los datos del libro: titulo, autor, año, género, puntaje de 1 a 10, separados por una coma ( , ). Ingresa X para finalizar');
    if(ingreso.toUpperCase() == "X"){
        continuar = false;
        break;
    }

    let datos = ingreso.split(","); //con este metodo, cuando el usuario pone una coma, pasa a ingresar el siguiente dato del arrays
    const libro = new Libro(datos[0],datos[1],datos[2],datos[3],datos[4]);
    libros.push(libro);
    libro.asignadId(libros);

}

//------------------Fin de pedir que se ingresen libros nuevos y sumarlos al array---------------------//


//--------------------------Ordenar el array de acuerdo a lo que se elija-----------------------------//


let criterio = prompt('Elegí el criterio deseado:\n1 - Título (A a Z) \n2 - Título (Z a A)\n3 - Mejor a peor puntuado \n4 - Fecha de publicación (Más viejo a más nuevo), para salir presione X');

function ordenar(criterio,array){
    let arrayOrdenado = array.slice(0); //le pongo un 0 porque necesita saber desde que posicion debe copiar

while(criterio.toUpperCase() != "X"){
        switch(criterio){
            case "1":
                let nombreAscendente = arrayOrdenado.sort((a,b) => a.titulo.localeCompare(b.titulo)); //el metodo sort es principalmente para numeros, para alfabeto, nos ordena por el metodo ascii, pero este no es igual que el diccionario, por ejemplo, si tiene acento una a, la pone despues que casi todo, entonces en la funcion flecha, lo que hacemos es decirle, el titulo a, comparamelo(localeCompare) con el titulo b basandose en el diccionario y no en el ascii. Dentro del localeCompare(le ponemos a lo que queremos que lo compare)
                return nombreAscendente;
            case "2":
                let nombreDescendente = arrayOrdenado.sort((a,b) => b.titulo.localeCompare(a.titulo));
                return nombreDescendente;
            case "3":
                let mejorPuntuado = arrayOrdenado.sort((a,b) => b.valoracion - a.valoracion );
                return mejorPuntuado;
            case "4":
                let fechaPublicacion = arrayOrdenado.sort((a,b) => a.anio - b.anio);
                
                return fechaPublicacion;
            default:
                alert("no es un criterio valido");
                criterio = prompt('Elegí el criterio deseado:\n1 - Título (A a Z) \n2 - Título (Z a A)\n3 - Mejor a peor puntuado \n4 - Fecha de publicación (Más viejo a más nuevo), para salir presione X');

                break;
        }
    }
}

//----------------------Fin de ordenar el array de acuerdo a lo que se elija----------------------//

function crearStringResultado(array){
    let info = "";

    array.forEach(elemento => {
        info += "Titulo: " + elemento.titulo + "\nAutor: " + elemento.autor + "\nAño de publicacion: " + elemento.anio + "\nGenero: " + elemento.genero + "\nValoración: " + elemento.valoracion + " Puntos. \n\n"
        
    });

    return info;
}

//--------------------------Fin de crear el string con los resultados-----------------------------//


alert(crearStringResultado(ordenar(criterio, libros)));


