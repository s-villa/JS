
//! Protips:


// ------------------------------- // ---------------------------------//---------------


function crearPersona( nombre, apellido ){
    return {
        nombre: nombre,
        apellido: apellido,  
    }
}


function crearPersona2( nombre, apellido ){  // Si el argumento y la llave se llaman igual, No hay necesidad de poner el mismo nombre 2 veces 
    return {
        nombre, 
        apellido,
    }
}


const crearPersona3 = ( nombre, apellido ) => ({nombre, apellido}); // Se ponen los parentesis para que la funcion entienda que tiene que retornar el nombre y la llave juntos. 

const player = crearPersona3( 'Santiago', 'Jojoa' );
console.log( player );


// ------------------------------- // ---------------------------------//---------------


function imprimeArgumentos() {
    console.log( arguments );  // El objeto 'arguments' sirve para devolver TODOS los argumentos que se le envian a la funcion.
}
imprimeArgumentos(10, false, true, 'Hola');


//* Nota: El objeto arguments o args no funciona con las funciones lamda.

const imprimeArgumentos2 = () => {  
    console.log( arguments );
}
//console.log( imprimeArgumentos2(10, false, true, 'Hola') );

//* Se tiene que hacer referencia al parametro REST --> ' ... ' o args, si no se usa el REST solo mostrara el primer argumento enviado

//* Despues del parametro REST, no puede ir ningun argumento mas o si pongo un argumento antes del REST este sera independiente a los demas.


const imprimeArgumentos3 = (...args) => {
    //console.log( args );
    return args;
}
const [ edad, casado, vivo, saludo ] = imprimeArgumentos3(10, false, true, 'Hola');
console.log({ edad, casado, vivo, saludo });


// ------------------------------- // ---------------------------------//---------------


//* Si yo pongo en llaves la variable con el mismo nombre del argumento que necesito este se asignara solo 

//* Si le pongo ' : ' al lado de la variable, le puedo cambiar el nombre a la variable sin afectar el valor.

const { apellido: nuevoApellido } = crearPersona3( 'Santiago', 'Jojoa' ); 
console.log({ nuevoApellido });

// ------------------------------- // ---------------------------------//---------------
//! Destructuracion de objetos:

let tony = {
    playerName: 'Tony Stark',
    codeName: 'ironMan',
    life: true,
    age: 40,
    trajesIronman: ['Mark I', 'Mark V', 'Hulkbuster'],
};

const imprimePropiedades = ( { playerName, codeName, life, age = 30, trajesIronman } ) => {
    console.log({playerName});
    console.log({codeName});
    console.log({life});
    console.log({age});
    console.log({trajesIronman});
}
imprimePropiedades( tony );
