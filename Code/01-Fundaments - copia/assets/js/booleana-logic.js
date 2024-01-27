

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

