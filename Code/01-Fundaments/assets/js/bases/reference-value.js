

let a = 10;
let b = a;
a = 30;

console.log({ a, b });


let juan  = { nombre: 'Juan' };
// let ana = juan;  --> Este seria un error de referencia 
// let ana = {juan}; // -> aca copiamos el objeto pero no es el mismo, ya que es un objeto heredado que lo estamos ampliando
let ana = { ...juan }; // -> con SPREAD, ( SPREAD y REST no son iguales ), podemos separar todas las propiedades y valores de un objeto
ana.nombre = 'ana';
  
console.log({ juan, ana });

// --------------------------------- // ---------------------- // 
//! Problema de referencia

const changeName = ({ ...player }) => { 
    player.nombre = 'Tony';
    return player;
}

let peter = { nombre: 'Peter' }; 
let tony = changeName( peter );

console.log({ peter, tony });

// --------------------------------- // ---------------------- // 
//! Arreglos

const frutas =[ 'Manzanas', 'Pera', 'Uva' ];
// const otrasFrutas = [frutas]; -> un arreglo dentro de otro arreglo
// const otrasFrutas = [ ...frutas ]; // -> con spread separo

console.time( 'slice' );   //*  --> TEMPORIZADOR 
const otrasFrutas = frutas.slice(); // -> .slice corta el arreglo y devuelve los que necesito, pero si no pongo nada rompe la relacion y devuelve el arreglo
console.timeEnd( 'slice' );

console.time( 'Spread' );  //*  --> TEMPORIZADOR 
const otrasFrutasSpread = [ ...frutas ];
console.timeEnd( 'Spread' );



otrasFrutas.push('Mango');
console.table({ frutas, otrasFrutas, otrasFrutasSpread });
