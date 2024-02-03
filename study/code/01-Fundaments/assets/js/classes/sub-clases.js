
class PersonaNatural {

    //#region "Referencias"

    static _conteo = 0;     //? Static en propiedad

    static get conteo() {   //? Static en Get
        return PersonaNatural._conteo + ' Instancias';
    }

    static mensaje() {      //? Static en Metodo
        console.log( this.nombre );
        console.log( 'Hola, soy un metodo estatico' );
    }


    nombre = '';    //  ]
    codigo = '';    //    }  --> Propiedades de la clase 
    frase  = '';    //    }
    comida = '';    //  ]

    //#endregion

    //#region "Constructor"

    constructor( nombre = 'Sin nombre', codigo = 'Sin Codigo', frase = 'Sin frase' ){
        console.log('Hola!');

        
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;

        PersonaNatural._conteo ++;
    }
    //#endregion

    //#region "Sets y Gets"

    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return ` La comida favorita de ${ this.nombre } es ${this.comida} `
    }

    //#endregion

    //#region "Metodos"

    // Retorna el nombre y el codigo
    whoIAm() {
        console.log( `Soy: ${ this.nombre } y mi identidad es ${ this.codigo }` );
    }

    // Retorna el codigo y la frase
    miFrase() {
        this.whoIAm();
        console.log( `${ this.codigo } dice: ${ this.frase }` );
    }

    //#endregion
}

class Heroe extends PersonaNatural{
    //#region "Referencias"

    clan = 'Sin clan'

    //#endregion

    //#region "Constructor"

    constructor( nombre, codigo, frase ) {
        super( nombre, codigo, frase );

        this.clan = 'Los Avengers';

    }

    whoIAm() {
        console.log( `Soy: ${ this.nombre }, de ${ this.clan } ` );
        super.whoIAm();
    }

    //#endregion
}

// const spiderman = new PersonaNatural( 'Peter Parker', 'Spiderman', 'TIO BEN!' );
const spiderman = new Heroe( 'Peter Parker', 'Spiderman', 'TIO BEN HPTA!' );
console.log( spiderman );
spiderman.whoIAm();