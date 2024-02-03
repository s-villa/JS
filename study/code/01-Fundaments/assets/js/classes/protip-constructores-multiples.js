
class Persona {

    //* Haciendo metodos estaticos puedo crear diferentes tipos de instancias como yo quiera.
    static porObjeto({ nombre, apellido, pais }){       
        return new Persona( nombre, apellido, pais );
    }

    constructor( nombre, apellido, pais ){
        this.nombre   = nombre;
        this.apellido = apellido;
        this.pais     = pais;
    }

    getInfo() {
        console.log( `info: ${ this.nombre }, ${ this.apellido }, ${ this.pais }` );
    }

}

const nombre1   = 'Melisa',
      apellido1 = 'Flores',
      pais1     = 'Colombia';

const snt = {
    nombre   : 'Santiago',
    apellido : 'Jojoa',
    pais     : 'Colombia',
}

const persona1 = new Persona( nombre1, apellido1, pais1 );
const persona2 =  Persona.porObjeto( snt ); // Aca estoy haciendo la sobre carga del constructor y como la instancia ya esta realizada, no hay necesidad de usar el new

persona1.getInfo();
persona2.getInfo();


