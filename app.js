/* TO DO LIST

- COMO SUMAR EL PUNTAJE A CADA EQUIPO DEPENDIENDO DEL RESULTADO.
- COMO ORDENAR EL ARRAY POR PUNTAJE.
- 

*/

// ------------ VARIABLES Y CONSTANTES ----------------
/* 
const user= prompt ("Ingrese su usuario");
const pass= 1234; */


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
    localStorage.setItem ("golesp1e1", JSON.stringify(`${golesp1e1}`));
    localStorage.setItem ("golesp1e2", JSON.stringify(`${golesp1e2}`));
    localStorage.setItem ("golesp2e1", JSON.stringify(`${golesp2e1}`));
    localStorage.setItem ("golesp2e2", JSON.stringify(`${golesp2e2}`));
    localStorage.setItem ("golesp3e1", JSON.stringify(`${golesp3e1}`));
    localStorage.setItem ("golesp3e2", JSON.stringify(`${golesp3e2}`));
    localStorage.setItem ("golesp4e1", JSON.stringify(`${golesp4e1}`));
    localStorage.setItem ("golesp4e2", JSON.stringify(`${golesp4e2}`));
    localStorage.setItem ("golesp5e1", JSON.stringify(`${golesp5e1}`));
    localStorage.setItem ("golesp5e2", JSON.stringify(`${golesp5e2}`));
    localStorage.setItem ("golesp6e1", JSON.stringify(`${golesp6e1}`));
    localStorage.setItem ("golesp6e2", JSON.stringify(`${golesp6e2}`));
    }

    /* RECUPERAR LOCAL STORAGE */
    const recuperar = document.querySelector ("#recuperar");

    recuperar.addEventListener("click", recuperarPron);

    function recuperarPron (){
    document.querySelector("#pronosticop1e1").innerHTML = parseInt(JSON.parse(localStorage.getItem ("golesp1e1")));
    document.querySelector("#pronosticop1e2").innerHTML = parseInt(JSON.parse(localStorage.getItem ("golesp1e2")));
    document.querySelector("#pronosticop2e1").innerHTML = parseInt(JSON.parse(localStorage.getItem ("golesp2e1")));
    document.querySelector("#pronosticop2e2").innerHTML = parseInt(JSON.parse(localStorage.getItem ("golesp2e2")));
    document.querySelector("#pronosticop3e1").innerHTML = parseInt(JSON.parse(localStorage.getItem ("golesp3e1")));
    document.querySelector("#pronosticop3e2").innerHTML = parseInt(JSON.parse(localStorage.getItem ("golesp3e2")));
    document.querySelector("#pronosticop4e1").innerHTML = parseInt(JSON.parse(localStorage.getItem ("golesp4e1")));
    document.querySelector("#pronosticop4e2").innerHTML = parseInt(JSON.parse(localStorage.getItem ("golesp4e2")));
    document.querySelector("#pronosticop5e1").innerHTML = parseInt(JSON.parse(localStorage.getItem ("golesp5e1")));
    document.querySelector("#pronosticop5e2").innerHTML = parseInt(JSON.parse(localStorage.getItem ("golesp5e2")));
    document.querySelector("#pronosticop6e1").innerHTML = parseInt(JSON.parse(localStorage.getItem ("golesp6e1")));
    document.querySelector("#pronosticop6e2").innerHTML = parseInt(JSON.parse(localStorage.getItem ("golesp6e2")));
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
    const resultadop1e1 = 1;
    const resultadop1e2 = 2;
    const resultadop2e1 = 0;
    const resultadop2e2 = 0;
    const resultadop3e1 = 2;
    const resultadop3e2 = 0;
    const resultadop4e1 = 2;
    const resultadop4e2 = 0;
    const resultadop5e1 = 1;
    const resultadop5e2 = 2;
    const resultadop6e1 = 0;
    const resultadop6e2 = 2;

    comparar.addEventListener ("click", compararResultados);

    function compararResultados (){
        document.querySelector("#resultadop1e1").innerHTML = resultadop1e1;
        document.querySelector("#resultadop1e2").innerHTML = resultadop1e2;
        document.querySelector("#resultadop2e1").innerHTML = resultadop2e1;
        document.querySelector("#resultadop2e2").innerHTML = resultadop2e2;
        document.querySelector("#resultadop3e1").innerHTML = resultadop3e1;
        document.querySelector("#resultadop3e2").innerHTML = resultadop3e2;
        document.querySelector("#resultadop4e1").innerHTML = resultadop4e1;
        document.querySelector("#resultadop4e2").innerHTML = resultadop4e2;
        document.querySelector("#resultadop5e1").innerHTML = resultadop5e1;
        document.querySelector("#resultadop5e2").innerHTML = resultadop5e2;
        document.querySelector("#resultadop6e1").innerHTML = resultadop6e1;
        document.querySelector("#resultadop6e2").innerHTML = resultadop6e2;
    }

    
    
    /* GENERACION DEL PUNTAJE */

       function partido1 (){
        if (parseInt(JSON.parse(localStorage.getItem ("golesp1e1"))) === resultadop1e1 && parseInt(JSON.parse(localStorage.getItem ("golesp1e2"))) === resultadop1e2) {
            let resultado1 = 3;
            return resultado1;
   
        } else {
            let resultado1 = 0;
            return resultado1;
        }
    }

       function partido2 (){
        if (parseInt(JSON.parse(localStorage.getItem ("golesp2e1"))) === resultadop2e1 && parseInt(JSON.parse(localStorage.getItem ("golesp2e2"))) === resultadop2e2) {
            let resultado2 = 3;
            return resultado2;
   
        } else {
            let resultado2 = 0;
            return resultado2;
        }
    }
   
       function partido3 (){
       if (parseInt(JSON.parse(localStorage.getItem ("golesp3e1"))) === resultadop3e1 && parseInt(JSON.parse(localStorage.getItem ("golesp3e2"))) === resultadop3e2) {
           let resultado3 = 3;
           return resultado3;
   
       } else {
           let resultado3 = 0;
           return resultado3;
       }
   }
   
       function partido4 (){
       if (parseInt(JSON.parse(localStorage.getItem ("golesp4e1"))) === resultadop4e1 && parseInt(JSON.parse(localStorage.getItem ("golesp4e2"))) === resultadop4e2) {
           let resultado4 = 3;
           return resultado4;
   
       } else {
           let resultado4 = 0;
           return resultado4;
       }
   }
   
       function partido5 (){
       if (parseInt(JSON.parse(localStorage.getItem ("golesp5e1"))) === resultadop5e1 && parseInt(JSON.parse(localStorage.getItem ("golesp5e2"))) === resultadop5e2) {
           let resultado5 = 3;
           return resultado5;
   
       } else {
           let resultado5 = 0;
           return resultado5;
       }
   }
   
       function partido6 (){
       if (parseInt(JSON.parse(localStorage.getItem ("golesp6e1"))) === resultadop6e1 && parseInt(JSON.parse(localStorage.getItem ("golesp6e2"))) === resultadop6e2) {
           let resultado6 = 3;
           return resultado6;
   
       } else {
           let resultado6 = 0;
           return resultado6;
       }
   }
   
    /* MOSTRAR PUNTAJE */

    let puntajeuser = document.querySelector ("#mostrarpuntaje");
    mostrarpuntaje.addEventListener ("click", sumaPuntaje);

    function sumaPuntaje (){
        puntajeuser = partido1 () + partido2() + partido3 () + partido4 () + partido5 () + partido6 ();
        let div = document.createElement(`div`);
        div.innerHTML = `<h1>Tu puntaje es de ${puntajeuser}</h1>`
    }
    
    
    

    

   
       
   
    /* puntajeuser = document.querySelector ("#mostrarpunaje");
    puntajeuser.addEventListener ("click", mostrarPuntaje)

    function mostrarPuntaje (){
        puntajeuser = resultado1;
        console.log(puntajeuser);
        return puntajeuser;
    }
 */
    

        //  -----------FLUJO--------------
    /* 
     login();
     */

    // -----ACA HAGAMOS DE CUENTA QUE SE ESTAN JUGANDO LOS PARTIDOS ------
    /* 
     alert (`Tu puntaje final es de ${puntajeuser}`);
    
    
    let equipoConsulta = prompt ("De que equipo quiere consultar el puntaje ? Argentina/Arabia/Polonia/Mexico (solo en minusculas)");
    
    console.log (grupoc.find ((grupo) => grupo.nombre === equipoConsulta)); */