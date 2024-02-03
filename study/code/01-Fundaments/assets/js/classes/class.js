
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

    whoIAm() {
        console.log( `Soy: ${ this.nombre } y mi identidad es ${ this.codigo }` );
    }

    miFrase() {
        this.whoIAm();
        console.log( `${ this.codigo } dice: ${ this.frase }` );
    }

    //#endregion
}


const spiderman = new PersonaNatural( 'Peter Parker', 'Spiderman', 'TIO BEN!' );
// const ironMan   = new PersonaNatural( 'Tony Stark', 'Iron Man', 'I`m Iron Man' );

spiderman.miFrase();

spiderman.setComidaFavorita = 'El pie de cereza de la tia May'
// spiderman.comida = 'El duende verde'  --> Aberracion

// console.log( spiderman.getComidaFavorita );
// console.log( spiderman );

// PersonaNatural._conteo = 2;
console.log( 'Conteo statico:', PersonaNatural._conteo );
console.log( PersonaNatural.conteo );
PersonaNatural.mensaje();

PersonaNatural.propiedadExterna = 'Hola mundo';
console.log( PersonaNatural.propiedadExterna );