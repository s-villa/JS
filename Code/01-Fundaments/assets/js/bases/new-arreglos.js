
let games = ['Zelda', 'Mario', 'Lol', 'Valorant'];
console.log('Largo:', games.length );
console.log({games});


let first = games[0];
let last  = games[ games.length -1];
console.log({first,last});


//! ForEach:

games.forEach( (elemento, indice, arr) => {
    console.log({elemento, indice, arr});
})

//! Push: 
//  --> Sirve para agrgar un nuevo elemento al arreglo y ponerlo
// de ultimo en la lista, aparte devuelve el nuevo length del arreglo

let newSize = games.push( 'F-Zero' );
console.log({newSize, games});

//! Unshift:
//  --> Sirve para agrgar un nuevo elemento al arreglo y ponerlo
// de primero en la lista, aparte devuelve el nuevo length del arreglo

newSize =  games.unshift('Fifa');
console.log({newSize, games});


//! Pop:
//  --> Elimina el ultimo elemento de la lista y devuerlve
// el elemento borrado

let gameDeleted = games.pop();
console.log({gameDeleted, games});


//! Splice:
//  --> Elimina tantos elemento del arreglo como una quiera
//  desde una posicion deseada y devuelve un nuevo arreglo con los
//  elementos eliminados.

let pos = 1;
console.log(games);
// console.log({games}); --> Si lo computo me devuelve el arreglo
//                            tal como esta en el ultimo edit de este.

let gamesDeleted = games.splice( pos, 2);
console.log({gamesDeleted, games});
