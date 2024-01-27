

const carros = [ 'Ford', 'Mazda', 'Honda', 'Mercedes' ];
let i = 0;

console.warn('While');

while( carros[i] ){
    if( i === 1 ) {
        i++;
        continue;
    }

    console.log( carros[i] );
    i++;
}


// -------------------------- // --------------------- // -----------
//! Do While:

console.warn('Do While');
let j = 0;

do{
    console.log( carros[j] );
    j++;

}while( carros[j] );
