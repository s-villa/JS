
//#region //? Referencias

const carros = ['Ford','Mazda','Honda','Mercedes'];
let i = 0;

//#endregion

//#region //* While:

while( carros[i] ) {
    if ( i === 1) {
        //break;     //* --> al hacer esto, para el while
        i++;
        continue;    //! --> con el continue se salta el cicla para otro
    }
    console.log( carros[i] );
    i++;
}

//#endregion

//#region //! Do While:

console.warn('Do While');
let j = 0;

do{
    console.log( carros[j] );
    j++;

}while( carros[j] );

//#endregion