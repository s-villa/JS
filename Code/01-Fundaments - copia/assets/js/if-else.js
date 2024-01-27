

let a  = 5; 

if ( a > 10 ){
    console.log( 'a > 10' );
} else {
    console.log( 'a < 10' );
}

// ------------------------- // --------------------------- //

const hoy = new Date(); // new sirve para asignar un objeto
let dia = hoy.getDay(); // 0: Dom, 1: Lun, 2: Mart, ...

console.log({ dia });

//! Triple Igual:
// --> Si es igual al valor && el tipo de dato

if ( dia === 0 ) { 
    console.log( 'Domingo' );
} else {
    console.log( 'No es domingo' );
}


//! Doble Igual:
// --> Si es igual al valor pero no importa el tipo de dato

if ( dia == '2' ) { 
    //console.log( 'Domingo' );
} else {
    //console.log( 'No es domingo' );
}


//! Un Igual:
// --> Asignacion de valor

//if ( dia = 0 ) { 
//    //console.log( 'Domingo' );
//} else {
//    //console.log( 'No es domingo' );
//}

// ------------------------- // --------------------------- //
//! Else If:

if ( dia === 0 ) {
    console.log( 'Domingo' );
    
} else if ( dia === 1 ) {
    console.log( 'Lunes' );

} else if ( dia === 2 ) {
    console.log( 'Martes' );

} else {
    console.log( 'No es Domingo, ni Lunes o Martes...' );

}

// ------------------------- // --------------------------- //
//? Ejercicio:
//  Sin usar If else, o Switch, unicamento objetos, imprimir el dia de la semana.

// -> forma con Arreglos.

dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
console.log( dias[dia] );


// -> forma con objetos literales.

dias2 = {         
    0: 'Domingo'  , 
    1: 'Lunes'    , 
    2: 'Martes'   , 
    3: 'Miercoles',
    4: 'Jueves'   , 
    5: 'Viernes'  , 
    6: 'Sabado'   ,
}
console.log( dias2[dia] );



  

 


 



   