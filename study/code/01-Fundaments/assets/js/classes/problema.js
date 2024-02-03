
const snt = {
    nombre: 'Santiago',
    edad  : 18,
    imprimir(){
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);
    },
}

const sml = {
    nombre: 'Samuel',
    edad  : 17,
    imprimir(){
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);
    },
}

// -> El UperCamelCase es utilizado para hacer referencia a las instancias.

function Persona( nombre, edad ) {
    console.log( 'Se ejecuto esta linea' );

    this.nombre = nombre;
    this.edad   = edad;
    
    this.imprimir = () => {
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);
    }

}

const maria  = new Persona('Maria', '19');
const melisa = new Persona('melisa', '38');

maria.imprimir();
melisa.imprimir();