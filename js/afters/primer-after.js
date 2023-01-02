let savedPIN = "1010";

function Login(){
    let access = false
    
    for (let i = 2; i >= 0; i--) {
        let userPIN = prompt("Ingresá tu pin, tienes " + (i+1) + " intentos.");
        if (userPIN === savedPIN){
            alert("Bienvenido/a!");
            access = true;
            break;
        } else {
            alert("Error. Te quedan " + i + " intentos")
        }
    }

    return access; //ESTO ME RETORNA EL VALOR FUERA DE LA FUNCION.
}


if(Login()){
    let saldo = 200000;
    let option = prompt("Elegí una opción: \n1- Saldo \n2- Retiro \n3- Depósito \nPresiona x para finalizar ")
    while((option != "X")&&(option != "x")){
        switch(option){
            case "1":
                alert("Tu saldo es de " + saldo)
                break;
            case "2":
                let retiro = parseInt(prompt("Ingrese cantidad a retirar"))
                if(retiro <= saldo){
                    saldo = saldo - retiro
                    //saldo -=retiro es lo mismo que lo de aarriba
                    alert("Retiro exitoso, su saldo es de " + saldo)
                } else {
                    alert("Ingreso un monto mayor a su saldo")
                }
                break;
            case "3":
                let ingreso = parseInt(prompt("Ingrese cantidad a ingresar"))
                saldo += ingreso
                alert("Deposito exitoso, su saldo es de " + saldo)
                break;
            default:
                alert("ingreso una opcion incorrecta")
                break;
        }
        option = prompt("Elegí una opción: \n1- Saldo \n2- Retiro \n3- Depósito \nPresiona x para finalizar ")

    }

} else {    
    alert("Retendremos tu tarjeta por seguridad")
}

alert("Hasta luego!")





