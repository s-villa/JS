
const elMayor = (a, b) => ( a > b) ? a : b;

const tieneMembresia = ( miembro ) => (miembro) ? '2 Dolares' : '10 Dolares';


console.log( elMayor( 20, 15) );
console.log( tieneMembresia(false) );


const amigo = false;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    (() => 'Nick Fury')(),     //TODO: --> Funcion anonima Auto Invocada ( Mas adelante... )
    elMayor(10, 15),
];

console.log( amigosArr );


const nota = 82.5;
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 80 ? 'B+' :
              nota >= 70 ? 'B'  :
              nota >= 60 ? 'C+' :
              nota >= 50 ? 'C'  : 'F';

console.log({ nota, grado });
