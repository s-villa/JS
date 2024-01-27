
let name1 = 'Juan';
console.log(name1);

name1 = 'deDios'  // ------> es mejor usar la comilla simple
console.log(name1)

name1 = "Su mama";
name1 = `Su mama`;

console.log( typeof name1);  //* typeof es para saber el tipo de variable 
                                    //! string       
    

let esMarvel = false;
console.log( typeof esmarvel );     //! Boolean



let age = 33.001
console.log(age);
console.log( typeof age );          //! Number



let superPower;
console.log( typeof superPower );   //! Undefined



let amNull = null;
console.log( typeof amNull );       //! Object



let mySymbol1 = Symbol('a');
let mySymbol2 = Symbol('a');
console.log( typeof mySymbol1 );       //! Symbol
console.log( mySymbol1 === mySymbol2); // Son diferentes 

