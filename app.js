
/* TO DO LIST

- COMO SUMAR EL PUNTAJE A CADA EQUIPO DEPENDIENDO DEL RESULTADO.
- COMO ORDENAR EL ARRAY POR PUNTAJE.
- 

*/

// ------------ VARIABLES Y CONSTANTES ----------------

const user= prompt ("Ingrese su usuario");
const pass= 1234;
let puntajeuser= 0;

function Equipo(nombre, puntajeEquipo) {
    this.nombre = nombre;
    this.puntajeEquipo = puntajeEquipo;
    
};

const argentina = new Equipo ("argentina", 6);
const mexico = new Equipo ("mexico", 4);
const polonia = new Equipo ("polonia", 4);
const arabia = new Equipo ("arabia", 3);

let grupoc = [argentina, mexico, polonia, arabia];

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
     let partido1= prompt (`Quien será el ganador entre Argentina vs Arabia ? argentina/arabia/empate`); /* MINUSCULAS */
     if (partido1.toLowerCase() === "arabia") {
         let resultado1 = 3;
         return resultado1;

     } else {
         let resultado1 = 0;
         return resultado1;
     }
    
 }

     function partido2 (){
     let partido2= prompt (`Quien será el ganador entre Mexico vs Polonia ? mexico/polonia/empate`);
     if (partido2.toLowerCase() === "empate") {
         let resultado2 = 3;
         return resultado2;

     } else {
         let resultado2 = 0;
         return resultado2;
     }
 }

    function partido3 (){
    let partido3= prompt (`Quien será el ganador entre Argentina vs Mexico ? argentina/mexico/empate`);
    if (partido3.toLowerCase() === "argentina") {
        let resultado2 = 3;
        return resultado2;

    } else {
        let resultado2 = 0;
        return resultado2;
    }
}

function partido4 (){
    let partido4= prompt (`Quien será el ganador entre Polonia vs Arabia ? polonia/arabia/empate`);
    if (partido4.toLowerCase() === "polonia") {
        let resultado2 = 3;
        return resultado2;

    } else {
        let resultado2 = 0;
        return resultado2;
    }
}

function partido5 (){
    let partido5= prompt (`Quien será el ganador entre Polonia vs Argentina ? polonia/argentina/empate`);
    if (partido5.toLowerCase() === "polonia") {
        let resultado2 = 3;
        return resultado2;

    } else {
        let resultado2 = 0;
        return resultado2;
    }
}

function partido6 (){
    let partido6= prompt (`Quien será el ganador entre Arabia vs Mexico ? arabia/mexico/empate`);
    if (partido6.toLowerCase() === "mexico") {
        let resultado2 = 3;
        return resultado2;

    } else {
        let resultado2 = 0;
        return resultado2;
    }
}

    //  -----------FLUJO--------------

 login();

 alert (`Bienvenido ${user} al prode del Mundial Qatar 2022. Por cada pronostico acertado sumaras 3 puntos`)

 puntajeuser = partido1() + partido2() + partido3() + partido4() + partido5() + partido6();

    // -----ACA HAGAMOS DE CUENTA QUE SE ESTAN JUGANDO LOS PARTIDOS ------

 alert (`Tu puntaje final es de ${puntajeuser}`);


let equipoConsulta = prompt ("De que equipo quiere consultar el puntaje ? Argentina/Arabia/Polonia/Mexico (solo en minusculas)");

console.log (grupoc.find ((grupo) => grupo.nombre === equipoConsulta));