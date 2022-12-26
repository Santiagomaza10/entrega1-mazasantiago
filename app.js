/* TO DO LIST

- COMO SUMAR EL PUNTAJE A CADA EQUIPO DEPENDIENDO DEL RESULTADO.
- COMO ORDENAR EL ARRAY POR PUNTAJE.
- 

*/

// ------------ VARIABLES Y CONSTANTES ----------------
/* 
const user= prompt ("Ingrese su usuario");
const pass= 1234; */
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
/* 
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
 */
    let ganador1 = document.querySelector ("#resultado1");

    function partido1 (){
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



    

    /* EVENTOS */
    
 
    /* PARTIDO 1 */

    const restabtnp1e1 = document.querySelector("#btnrestap1e1");
    const sumabtnp1e1 = document.querySelector("#btnsumap1e1");
    
    
    restabtnp1e1.addEventListener("click",restap1e1);
    sumabtnp1e1.addEventListener("click",sumap1e1);
    
    let golesp1e1 = 0;
    
        function restap1e1 (){
        golesp1e1 -= 1;
        document.querySelector("#pronosticop1e1").innerHTML = golesp1e1;
        }
        function sumap1e1 (){
        golesp1e1 += 1;
        document.querySelector("#pronosticop1e1").innerHTML = golesp1e1;
        }
    
        /* PARTIDO 1 EQUIPO 2 */
    
        const restabtnp1e2 = document.querySelector("#btnrestap1e2");
        const sumabtnp1e2 = document.querySelector("#btnsumap1e2");
        
        
        restabtnp1e2.addEventListener("click",restap1e2);
        sumabtnp1e2.addEventListener("click",sumap1e2);
        
        let golesp1e2 = 0;
        
        function restap1e2 (){
            golesp1e2 -= 1;
            document.querySelector("#pronosticop1e2").innerHTML = golesp1e2;
            }
        function sumap1e2 (){
            golesp1e2 += 1;
            document.querySelector("#pronosticop1e2").innerHTML = golesp1e2;
            }
        
        /* PARTIDO 2 */
    
    const restabtnp2e1 = document.querySelector("#btnrestap2e1");
    const sumabtnp2e1 = document.querySelector("#btnsumap2e1");
    
    
    restabtnp2e1.addEventListener("click",restap2e1);
    sumabtnp2e1.addEventListener("click",sumap2e1);
    
    let golesp2e1 = 0;
    
        function restap2e1 (){
        golesp2e1 -= 1;
        document.querySelector("#pronosticop2e1").innerHTML = golesp2e1;
        }
        function sumap2e1 (){
        golesp2e1 += 1;
        document.querySelector("#pronosticop2e1").innerHTML = golesp2e1;
        }
    
        /* PARTIDO 2 EQUIPO 2 */
    
        const restabtnp2e2 = document.querySelector("#btnrestap2e2");
        const sumabtnp2e2 = document.querySelector("#btnsumap2e2");
        
        
        restabtnp2e2.addEventListener("click",restap2e2);
        sumabtnp2e2.addEventListener("click",sumap2e2);
        
        let golesp2e2 = 0;
        
        function restap2e2 (){
            golesp2e2 -= 1;
            document.querySelector("#pronosticop2e2").innerHTML = golesp2e2;
            }
        function sumap2e2 (){
            golesp2e2 += 1;
            document.querySelector("#pronosticop2e2").innerHTML = golesp2e2;
            }
    
        /* PARTIDO 3 */
    
        const restabtnp3e1 = document.querySelector("#btnrestap3e1");
        const sumabtnp3e1 = document.querySelector("#btnsumap3e1");
        
        
        restabtnp3e1.addEventListener("click",restap3e1);
        sumabtnp3e1.addEventListener("click",sumap3e1);
        
        let golesp3e1 = 0;
        
            function restap3e1 (){
            golesp3e1 -= 1;
            document.querySelector("#pronosticop3e1").innerHTML = golesp3e1;
            }
            function sumap3e1 (){
            golesp3e1 += 1;
            document.querySelector("#pronosticop3e1").innerHTML = golesp3e1;
            }
        
            /* PARTIDO 3 EQUIPO 3 */
        
            const restabtnp3e2 = document.querySelector("#btnrestap3e2");
            const sumabtnp3e2 = document.querySelector("#btnsumap3e2");
            
            
            restabtnp3e2.addEventListener("click",restap3e2);
            sumabtnp3e2.addEventListener("click",sumap3e2);
            
            let golesp3e2 = 0;
            
            function restap3e2 (){
                golesp3e2 -= 1;
                document.querySelector("#pronosticop3e2").innerHTML = golesp3e2;
                }
            function sumap3e2 (){
                golesp3e2 += 1;
                document.querySelector("#pronosticop3e2").innerHTML = golesp3e2;
                }
    
        /* PARTIDO 4 */
    
        const restabtnp4e1 = document.querySelector("#btnrestap4e1");
        const sumabtnp4e1 = document.querySelector("#btnsumap4e1");
        
        
        restabtnp4e1.addEventListener("click",restap4e1);
        sumabtnp4e1.addEventListener("click",sumap4e1);
        
        let golesp4e1 = 0;
        
            function restap4e1 (){
            golesp4e1 -= 1;
            document.querySelector("#pronosticop4e1").innerHTML = golesp4e1;
            }
            function sumap4e1 (){
            golesp4e1 += 1;
            document.querySelector("#pronosticop4e1").innerHTML = golesp4e1;
            }
        
            /* PARTIDO 4 EQUIPO 2 */
        
            const restabtnp4e2 = document.querySelector("#btnrestap4e2");
            const sumabtnp4e2 = document.querySelector("#btnsumap4e2");
            
            
            restabtnp4e2.addEventListener("click",restap4e2);
            sumabtnp4e2.addEventListener("click",sumap4e2);
            
            let golesp4e2 = 0;
            
            function restap4e2 (){
                golesp4e2 -= 1;
                document.querySelector("#pronosticop4e2").innerHTML = golesp4e2;
                }
            function sumap4e2 (){
                golesp4e2 += 1;
                document.querySelector("#pronosticop4e2").innerHTML = golesp4e2;
                }
    
        /* PARTIDO 5 */
    
        const restabtnp5e1 = document.querySelector("#btnrestap5e1");
        const sumabtnp5e1 = document.querySelector("#btnsumap5e1");
        
        
        restabtnp5e1.addEventListener("click",restap5e1);
        sumabtnp5e1.addEventListener("click",sumap5e1);
        
        let golesp5e1 = 0;
        
            function restap5e1 (){
            golesp5e1 -= 1;
            document.querySelector("#pronosticop5e1").innerHTML = golesp5e1;
            }
            function sumap5e1 (){
            golesp5e1 += 1;
            document.querySelector("#pronosticop5e1").innerHTML = golesp5e1;
            }
        
            /* PARTIDO 5 EQUIPO 2 */
        
            const restabtnp5e2 = document.querySelector("#btnrestap5e2");
            const sumabtnp5e2 = document.querySelector("#btnsumap5e2");
            
            
            restabtnp5e2.addEventListener("click",restap5e2);
            sumabtnp5e2.addEventListener("click",sumap5e2);
            
            let golesp5e2 = 0;
            
            function restap5e2 (){
                golesp5e2 -= 1;
                document.querySelector("#pronosticop5e2").innerHTML = golesp5e2;
                }
            function sumap5e2 (){
                golesp5e2 += 1;
                document.querySelector("#pronosticop5e2").innerHTML = golesp5e2;
                }
    
        /* PARTIDO 6 */
    
        const restabtnp6e1 = document.querySelector("#btnrestap6e1");
        const sumabtnp6e1 = document.querySelector("#btnsumap6e1");
        
        
        restabtnp6e1.addEventListener("click",restap6e1);
        sumabtnp6e1.addEventListener("click",sumap6e1);
        
        let golesp6e1 = 0;
        
            function restap6e1 (){
            golesp6e1 -= 1;
            document.querySelector("#pronosticop6e1").innerHTML = golesp6e1;
            }
            function sumap6e1 (){
            golesp6e1 += 1;
            document.querySelector("#pronosticop6e1").innerHTML = golesp6e1;
            }
        
            /* PARTIDO 6 EQUIPO 2 */
        
            const restabtnp6e2 = document.querySelector("#btnrestap6e2");
            const sumabtnp6e2 = document.querySelector("#btnsumap6e2");
            
            
            restabtnp6e2.addEventListener("click",restap6e2);
            sumabtnp6e2.addEventListener("click",sumap6e2);
            
            let golesp6e2 = 0;
            
            function restap6e2 (){
                golesp6e2 -= 1;
                document.querySelector("#pronosticop6e2").innerHTML = golesp6e2;
                }
            function sumap6e2 (){
                golesp6e2 += 1;
                document.querySelector("#pronosticop6e2").innerHTML = golesp6e2;
                }
    


        /* GUARDAR LOCAL STORAGE */
    const guardar = document.querySelector ("#guardar");

    guardar.addEventListener("click", guardarPron);

    function guardarPron () {
    localStorage.setItem ("golesp1e1", `${golesp1e1}`);
    localStorage.setItem ("golesp1e2", `${golesp1e2}`);
    localStorage.setItem ("golesp2e1", `${golesp2e1}`);
    localStorage.setItem ("golesp2e2", `${golesp2e2}`);
    localStorage.setItem ("golesp3e1", `${golesp3e1}`);
    localStorage.setItem ("golesp3e2", `${golesp3e2}`);
    localStorage.setItem ("golesp4e1", `${golesp4e1}`);
    localStorage.setItem ("golesp4e2", `${golesp4e2}`);
    localStorage.setItem ("golesp5e1", `${golesp5e1}`);
    localStorage.setItem ("golesp5e2", `${golesp5e2}`);
    localStorage.setItem ("golesp6e1", `${golesp6e1}`);
    localStorage.setItem ("golesp6e2", `${golesp6e2}`);
    }

    /* RECUPERAR LOCAL STORAGE */
    const recuperar = document.querySelector ("#recuperar");

    recuperar.addEventListener("click", recuperarPron);

    function recuperarPron (){
    document.querySelector("#pronosticop1e1").innerHTML = localStorage.getItem ("golesp1e1");
    document.querySelector("#pronosticop1e2").innerHTML = localStorage.getItem ("golesp1e2");
    document.querySelector("#pronosticop2e1").innerHTML = localStorage.getItem ("golesp2e1");
    document.querySelector("#pronosticop2e2").innerHTML = localStorage.getItem ("golesp2e2");
    document.querySelector("#pronosticop3e1").innerHTML = localStorage.getItem ("golesp3e1");
    document.querySelector("#pronosticop3e2").innerHTML = localStorage.getItem ("golesp3e2");
    document.querySelector("#pronosticop4e1").innerHTML = localStorage.getItem ("golesp4e1");
    document.querySelector("#pronosticop4e2").innerHTML = localStorage.getItem ("golesp4e2");
    document.querySelector("#pronosticop5e1").innerHTML = localStorage.getItem ("golesp5e1");
    document.querySelector("#pronosticop5e2").innerHTML = localStorage.getItem ("golesp5e2");
    document.querySelector("#pronosticop6e1").innerHTML = localStorage.getItem ("golesp6e1");
    document.querySelector("#pronosticop6e2").innerHTML = localStorage.getItem ("golesp6e2");
    };

    
    /* ELIMINAR LOCAL STORAGE */

    const eliminar = document.querySelector ("#reiniciar");

    reiniciar.addEventListener ("click", reiniciarPronosticos);

    function reiniciarPronosticos (){
    localStorage.clear();
    document.querySelector("#pronosticop1e1").innerHTML = 0;
    document.querySelector("#pronosticop1e2").innerHTML = 0;
    document.querySelector("#pronosticop2e1").innerHTML = 0;
    document.querySelector("#pronosticop2e2").innerHTML = 0;
    document.querySelector("#pronosticop3e1").innerHTML = 0;
    document.querySelector("#pronosticop3e2").innerHTML = 0;
    document.querySelector("#pronosticop4e1").innerHTML = 0;
    document.querySelector("#pronosticop4e2").innerHTML = 0;
    document.querySelector("#pronosticop5e1").innerHTML = 0;
    document.querySelector("#pronosticop5e2").innerHTML = 0;
    document.querySelector("#pronosticop6e1").innerHTML = 0;
    document.querySelector("#pronosticop6e2").innerHTML = 0;

    }

    /* COMPARAR RESULTADOS */

    const comparar = document.querySelector ("#comparar");

    comparar.addEventListener ("click", compararResultados);

    function compararResultados (){
        document.querySelector("#resultadop1e1").innerHTML = 1;
        document.querySelector("#resultadop1e2").innerHTML = 2;
        document.querySelector("#resultadop2e1").innerHTML = 0;
        document.querySelector("#resultadop2e2").innerHTML = 0;
        document.querySelector("#resultadop3e1").innerHTML = 2;
        document.querySelector("#resultadop3e2").innerHTML = 0;
        document.querySelector("#resultadop4e1").innerHTML = 2;
        document.querySelector("#resultadop4e2").innerHTML = 0;
        document.querySelector("#resultadop5e1").innerHTML = 1;
        document.querySelector("#resultadop5e2").innerHTML = 2;
        document.querySelector("#resultadop6e1").innerHTML = 0;
        document.querySelector("#resultadop6e2").innerHTML = 2;
    }

        //  -----------FLUJO--------------
    
     /* login();
    
     alert (`Bienvenido ${user} al prode del Mundial Qatar 2022. Por cada pronostico acertado sumaras 3 puntos`)
    
     puntajeuser = partido1() + partido2() + partido3() + partido4() + partido5() + partido6();
     */
        // -----ACA HAGAMOS DE CUENTA QUE SE ESTAN JUGANDO LOS PARTIDOS ------
    /* 
     alert (`Tu puntaje final es de ${puntajeuser}`);
    
    
    let equipoConsulta = prompt ("De que equipo quiere consultar el puntaje ? Argentina/Arabia/Polonia/Mexico (solo en minusculas)");
    
    console.log (grupoc.find ((grupo) => grupo.nombre === equipoConsulta)); */