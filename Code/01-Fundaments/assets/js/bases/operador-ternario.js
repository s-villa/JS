//#region Ejercicio 

/** 
 **  En semana abrimos a las 11,
 ** en findes abrimos a las 9
 */

//* Entra a un sitio web, para consultar si esta abierto hoy...
//#endregion

//#region Referencias

const hoy = new Date;
let dia  = hoy.getDay(), horaActual = hoy.getHours(), horaApertura, mensaje;

//#endregion

// if ( dia === 0 || dia === 6 ){
//     horaApertura = 9;
//     console.log( 'Fin de semana' );
// } else {
//     horaApertura = 11;
//     console.log( ' Semana' );
// }
// 
// if ( horaActual >= horaApertura ){
//     mensaje = 'Esta abierto';
// } else {
//     mensaje = `Esta cerrado, hoy abrimos a las ${ horaApertura }`;
// }


//console.log({ horaApertura, mensaje });

//? ------------------------ // --------------------------- // ---------------------------
//? Una forma de hacerlo con .Includes:

// if ([0,6 ].includes(dia)){
//     horaApertura = 9;
//     console.log( 'Fin de semana' );
// 
// } else {
//     horaApertura = 11;
//     console.log( ' Semana' );
// 
// }


//! ------------------------ // --------------------------- // ---------------------------
//! Operador Ternario:

horaApertura = ( [0,6].includes( dia ) ) ? 9 : 11

// if ( horaActual >= horaApertura ){
//     mensaje = 'Esta abierto';
// } else {
//     mensaje = `Esta cerrado, hoy abrimos a las ${ horaApertura }`;
// }


//* ------------------------ // --------------------------- // ---------------------------
//* Tarea: hacer el mismo operador ternario solo que con mensaje

mensaje = ( horaActual >= horaApertura ) ? 'Esta abierto' : `Esta cerrado, abrimos a las ${ horaApertura }`;

console.log({ horaApertura, mensaje });

