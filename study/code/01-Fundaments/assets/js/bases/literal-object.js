

let player = {
    playerName: 'IronMan',
    codeName: '10',
    life: true,
    age: 40,
    coords: {
        lat: 34.00,
        lng: 38.67
    },
    trajesIronman: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infiity War',// -> de esta forma para poner caracteres especiales.

};

console.log( player );

console.log( 'name:', player.playerName ); // ------> Forma de acceder a las propiedades.
console.log( 'age:', player['age']);       // ------> Otra forma de acceder.

console.log( 'Coords:', player.coords );
console.log( 'Latitud:', player.coords.lat );

// ------------------------------- // ---------------------------------//---------------
//? Ejercicio:  --> Numero de trajes que tiene IronMan?

console.log( 'No. Trajes:', player.trajesIronman.length );

// ------------------------------- // ---------------------------------//----------------

console.log( 'Ultimo Traje:', player.trajesIronman[player.trajesIronman.length -1] );

const x = 'life';                  // <--
console.log( 'vivo', player[x] );  // --> Puedo "quemar" un valor para buscarlo
console.log( 'ultima Pelicula:', player["ultima-pelicula"]);//--> Unica manera de este tipo.


//* --------------//------------- Mas detalles -------------//--------------//-----------


//! Eliminar Propiedad ( delete ):

delete player.age;
console.log( player );

//! Forma de agregar una llave

player.casado = true; // Para bloquear las propieda o modificaciones se usa: Object.freeze()

//! Entries Pares 
// Pares de Valores, son una forma de organizar el array para barrerlo 

const entriesPares = Object.entries( player ); 
console.log( entriesPares );

//! Metodo .freeze()
// bloquea las propiedades o modificaciones de un objeto

Object.freeze( player );

player.money = 100000000;  // Ahi ya no aparece por estar bloqueado.
console.log( player );


//! Metodos utiles de los Objetos:

const propiedades = Object.getOwnPropertyNames( player );
const valores     = Object.values( player );
console.log({ propiedades, valores });
