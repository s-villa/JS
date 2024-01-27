
//! Una forma de hacerlo:

const arr = new Array(10);
console.log(arr);


//! Otra forma famosa:

const _arr = [];

let arrCosas = [
    true,
    123,
    'Santiago',
    1 + 2, 
    function(){},
    ()=>{},
    {a: 1},
    ['X', 'Megaman', 'Zero', 'Dr. Light'],
]

// -------------------------------- // -----------------------------


let videoGames = [ 'Pacman', 'Megaman', 'Mario'];
console.log({videoGames});   // ---> Las llaves significa un objeto

console.log(videoGames[0]);  // ---> Indica en que posicion esta

console.log({arrCosas});


// ------------------------------- // -------------------------------
//? Ejercicio:

//* Imprimir en consola Dr. Light:

//! Mi forma de hacerlo:

let getArr = arrCosas[7];
console.log(getArr[3]);


//! otra forma de hacerlo:

console.log( arrCosas[7][3]);