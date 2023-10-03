const validadores = {
    "nacimiento": ( nodo ) => validarMayorDeEdad( nodo )
}

const tiposDeErrores = [ "valueMissing" , "typeMismatch" , "patternMissmatch" , "customError" ]

const mensajesDeError = {
    nombre: {
        valueMissing: "Este campo no puede estar vacío"
    },
    email: {
        valueMissing: "Este campo no puede estar vacío",
        typeMismatch: "El correo no es válido"
    },
    asunto: {
        valueMissing: "Este campo no puede estar vacío"
    },
    texto: {
        valueMissing: "Este campo no puede estar vacío"
    }
}

export function validarInputs( inputs ){
    /*Esta función se aplica a un array de nodos input con data-tipo*/ 
    inputs.forEach( ( input ) => { 
        input.addEventListener( "blur" , (e) => {
            validarInput( e.target )
        } )
    });
}

function validarInput( nodo ){
    const tipoDeInput = nodo.dataset.tipo

    if (validadores[ tipoDeInput ]){
        validadores[ tipoDeInput ]( nodo )
    }

    if (nodo.validity.valid) {
        nodo.parentElement.classList.remove( "input-container-invalid" );
        nodo.parentElement.classList.add( "input-container-valid" );
        nodo.parentElement.querySelector( ".input-message-error" ).innerHTML = "";
    } else {
        nodo.parentElement.classList.add("input-container-invalid" );
        nodo.parentElement.classList.remove( "input-container-valid" );
        nodo.parentElement.querySelector( ".input-message-error" ).innerHTML = mostrarError( tipoDeInput , nodo );
    }
}

function mostrarError( tipoDeInput, nodo ) {
    let mensaje = "";
    let erroresDelNodo = nodo.validity;

    for (let error of tiposDeErrores){
        if( erroresDelNodo[error] ) {
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    }

    return mensaje;
}



function validarMayorDeEdad( nodo ){
    let fechaNacimientoSring = new Date( nodo.value ) /*Fecha que ingresó en cliente en string*/
    let fechaActual = new Date() /*Fecha de hoy*/ 
    let fechaNacimiento = new Date( fechaNacimientoSring.getUTCFullYear() + 18 , fechaNacimientoSring.getUTCMonth() , fechaNacimientoSring.getUTCDate() )

    let mensajeError = ""

    if( fechaActual < fechaNacimiento ) {
        mensajeError = "Debes tener al menos 18 años de edad cumplidos."
    }

    nodo.setCustomValidity( mensajeError )
}