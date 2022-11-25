
// ------------ VARIABLES Y CONSTANTES ----------------

const user= prompt ("Ingrese su usuario");
const pass= 1234;
let puntaje= 0;
let equipo1= "Qatar";
let equipo2= "Ecuador";
let equipo3= "Inglaterra";
let equipo4= "Iran";

// ----------- FUNCIONES ----------

    function login (){
    while (pass == "1234") {
    let passlogin = prompt (`Bienvenido ${user} ! Ingrese su contraseña`);{
    if (passlogin == pass ) {
        alert ("Iniciando sesión");
        break;
    } else {
        alert ("Contraseña incorrecta, intente nuevamente")
    }
    }
    }
}


    function partido1 (){
    let partido1= prompt (`Quien será el ganador entre ${equipo1} vs ${equipo2} ? qatar/ecuador/empate`);
    if (partido1 === "ecuador") {
        let resultado1 = 3;
        return resultado1;

    } else {
        let resultado1 = 0;
        return resultado1;
    }
    
}

    function partido2 (){
    let partido2= prompt (`Quien será el ganador entre ${equipo3} vs ${equipo4} ? inglaterra/iran/empate`);
    if (partido2 === "inglaterra") {
        let resultado2 = 3;
        return resultado2;

    } else {
        let resultado2 = 0;
        return resultado2;
    }
}

// -----------FLUJO--------------

    login();

    alert (`Bienvenido ${user} al prode del Mundial Qatar 2022. Por cada pronostico acertado sumaras 3 puntos`)

    alert ("IMPORTANTE ! Completar los resultados todo en minuscula como figura en las opciones.")

    puntaje = partido1() + partido2();

    // -----ACA HAGAMOS DE CUENTA QUE SE ESTAN JUGANDO LOS PARTIDOS ------

    alert (`Tu puntaje final es de ${puntaje}`);
