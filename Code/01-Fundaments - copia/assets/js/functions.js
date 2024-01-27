
//! Funciones: -------------------------//----------------------------------//---------------

function hello() {              // --> funcion Original
    console.log( 'Hola Mundo' );
};
hello();

const saludar = function(){       // --> Funcion Anonima, se usa el const para bloquear la funcion 
    console.log( 'Hola Mundo.' );
}
saludar();


//! Argumentos: -------------------------//----------------------------------//---------------

function argument( name ){
    console.log( 'Hola ' + name );
}
argument( 'Santiago' );   // --> le estamos entregando un argumento a la funcion

const newArgument = function( name ){
    console.log( 'Hola de nuevo ' + name);
}
newArgument( 'Santiago ' );


//! Lamda Functions: -------------------------//----------------------------------//---------

const lamdaFunction = () => {
    console.log( 'Hola Mundo!' );
}
lamdaFunction();

const lamdaFunction2 = ( nombre ) => {
    console.log( 'Hola de nuevo ' + nombre);
}
lamdaFunction2( 'Isma' );


//! Return functions: -------------------------//----------------------------------//------------

const returnFunctions = ( nombre ) => {
    console.log( 'Funcion Retorno de ' + nombre );
    return 1;
}


const valueFunction = returnFunctions( 'mi pana Miguel' );
console.log({ valueFunction });


function sumar( a, b ){
    return a + b;
}
console.log( sumar( 1, 2 ) );


const sumar2 = ( a, b ) => {     // --> Funcion de flecha si es amplia.
    a = a + 1;
    return a + b;
}
console.log( sumar2( 1, 2 ) );


const sumar3 = ( a, b ) => a + b; // --> si la funcion de flecha es corta
console.log( sumar3( 1, 4 ) );


function getRandom() {
    return Math.random();
}
console.log( getRandom() );


// ------------------------------- // ---------------------------------//---------------
//? Ejercicio:  --> hacer getRandom en una funcion de flecha que no tenga llaves:

const getRandom2 = () => Math.random();
console.log( 'No.Random:', getRandom2() );

//#region 
//  \/illa.03
//#endregion
