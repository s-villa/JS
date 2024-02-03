//#region //? Referencias

const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

//#endregion

//#region  //! For
// For clasico y robusto

console.warn('For tradocinal');
for( let i = 0; i < heroes.length; i++ ){
    console.log( heroes[i] );

}

//#endregion

//#region //* For in
// El for in, barre el arrey

console.warn('For in');
for( let i in heroes ){
    console.log( heroes[i] );
    for( let j in heroes ){
        
    }

}

//#endregion

//#region //? For of
// El for of, las variables se declara en plural y como la variable.

console.warn('For of');
for( let heroe of heroes){
    console.log( heroe );

}

//#endregion