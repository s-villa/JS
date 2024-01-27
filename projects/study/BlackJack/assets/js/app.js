/**
 * 2C = Two of Clubs ( Treboles )  
 * 2C = Two of Diamonds
 * 2C = Two of Hearts
 * 2C = Two of Spades ( espadas ) 
 */

//#region Referencias
let deck = [];
const letters = ['C','D','H','S'];
const specials = ['A', 'J', 'Q', 'K'];
//#endregion

//#region functions
const newDeck = () => {

    for( let i = 2; i <= 10 ; i++ ){
        for( let letter of letters ){
            deck.push(i + letter);
        }
    }
    
    for( let letter of letters ){
        for( let special of specials){
            deck.push( special + letter );
        }
    }
    deck = _.shuffle( deck );
    console.log(deck);

    return deck;
}
newDeck();


const newCard = () => {

    if( deck.length === 0){
        throw 'No hay cartas en el deck'
    }
    
    let card = deck.pop();
    return card;
    
}
console.log(newCard());
console.log(deck);

//#endregion