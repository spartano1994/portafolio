import { validarInputs } from "./validacion.js";


/*Validar formulario de contacto*/
const inputs = document.querySelectorAll( "[data-tipo]" );

validarInputs( inputs );


/*Fecha del celular en desktop*/

let telefono = document.querySelector(".formulario-imagen-phone");

function actualizarTelefono() {

    const months = {
        0 : "enero",
        1 : "febrero",
        2 : "marzo" ,
        3 :"abril" ,
        4 : "mayo",
        5 : "junio" ,
        6 : "julio" ,
        7 : "agosto" ,
        8 : "septiembre" , 
        9 : "octubre" , 
        10 : "noviembre" ,
        11 : "diciembre"
    }

    const days = {
        0 : "Domingo",
        1 : "Lunes",
        2 : "Martes",
        3 : "Miércoles" , 
        4 : "Jueves" ,
        5 : "Viernes" ,
        6 : "Sábado"
    }



    let fechaHoy = new Date();
    let dia = fechaHoy.getDate();
    let diaNombre = fechaHoy.getDay()
    let mes = fechaHoy.getUTCMonth();
    let anio = fechaHoy.getFullYear();

    let fechaTelefono = days[diaNombre] + " " + dia + " , " + months[mes] + " " + anio;
    let fechaPantallaTelefono = document.querySelector(".date")

    fechaPantallaTelefono.innerHTML = fechaTelefono;


    /*Hora del celular en desktop*/ 
    let hora = fechaHoy.getHours()
    let minutos = fechaHoy.getMinutes()
    let horaPantallaTelefono = document.querySelector(".time")

    function corregirMinutos( minutos ){
        minutos = minutos.toString()
        let resultado = ""

        if ( minutos.length === 1 ){
            resultado = "0" + minutos ;
        } else {
            resultado = minutos;
        }

        return resultado;
    }

    horaPantallaTelefono.innerHTML = hora + ":" + corregirMinutos( minutos );

}

telefono.addEventListener( "mouseover" , actualizarTelefono )



/*
console.log(pantallaTelefono)
console.log(fechaHoy)
console.log(fechaHoy.getDay())

var resolvedOptions = Intl.DateTimeFormat().resolvedOptions()
console.log('El nombre de tu zona horaria es ', resolvedOptions.timeZone);
*/