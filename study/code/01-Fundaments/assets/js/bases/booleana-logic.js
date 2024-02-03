

const regresaTrue = () => {
    console.log('Regresa True');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa False');
    return false;
}

// --------------------- // ------------------------- // ------------------------- // ------
//! Not o la negacion:

console.warn(' Not o la negacion ');
console.log( true );    // true
console.log( !true );   // false
console.log( !false );  // true
console.log( !!false ); // false

console.log( !regresaFalse() );

// --------------------- // ------------------------- // ------------------------- // ------
//! And && :

console.warn(' And ');
console.log( true && true );     // True      
console.log( true && false );    // False    
console.log( false && false );   // False

console.log( regresaTrue() && regresaFalse() ); // False -> Regresa ambos return
console.log( regresaFalse() && regresaTrue() ); // False -> Regresa solo false porque && ya para la logica



// --------------------- // ------------------------- // ------------------------- // ------
//! Or || :

console.warn(' Or ');
console.log( true || false );     // True      
console.log( false || false );   // False

console.log( regresaTrue() || regresaFalse() );  // True -> Solo regresa el True

// --------------------- // ------------------------- // ------------------------- // ------

console.warn( 'Asignaciones' );

const soyUndefine = undefined;
const soyNull = null;
const soyFalso = false;

//* --> asignaciones con && --------------------- // -----------

const a1 = false && 'Hola Mundo' && 150;  //* -> Que devuelve esto?
// ---> Una variable contiene la ultima asignacion, en este caso como el primer valor es un false, se detiene ahi, pero si fuera un true el valor de ' a1 ' = 150
const a2 = 'Hola' && 'Mundo' && soyFalso; 

//* --> Asignaciones con ||  ------------ // --------------------

const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefine || soyNull || 'Ya no soy falso';

console.log({a1, a2, a3, a4, });
