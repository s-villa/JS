
//#region 'Referencias'

 // Let
let deck = [];
let playerPoints   = 0,
    computerPoints = 0;

 // Const
const letters  = ['C','D','H','S'];
const specials = ['A', 'J', 'Q', 'K'];

 // Dom botones
const btnNewGame  = document.querySelector('#btnNewGame');
const btnRequest  = document.querySelector('#btnRequest');
const btnStopGame = document.querySelector('#btnStopGame');

 // Dom 
const poitnsHTML    = document.querySelectorAll('small');
const playerCards   = document.querySelector('#player-cards');
const ComputerCards = document.querySelector('#computer-cards');

//#endregion

//*#region 'Eventos'

btnNewGame.addEventListener('click', () => {
    console.log('click new game');

});

btnRequest.addEventListener('click', () => {
    changeValue( true );

});

btnStopGame.addEventListener('click', () => {
    stopTwoButtons();
    computerShift();
    
});

//#endregion

//*#region 'Metodos'
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

const valueCard = ( isPlayer ) => {
    
    card = newCard();

    // Add card: 
    const addImgCard = document.createElement('img');
    addImgCard.src = `assets/cards/${card}.png`
    addImgCard.classList.add('cards');

    isPlayer = ( isPlayer ) ? 
                playerCards.append( addImgCard ) 
                : ComputerCards.append( addImgCard );

    const value = card.substring(0, card.length - 1);

    return ( isNaN( value ) ) ?
             ( value === 'A') ? 11 : 10
             : value * 1;
} 

const changeValue = ( isPlayer ) => {

    if ( isPlayer ){
        playerPoints = playerPoints + valueCard( isPlayer );
        poitnsHTML[0].innerText = playerPoints;
        cheackValues( playerPoints, isPlayer );

    } else {
        computerPoints = computerPoints + valueCard( isPlayer );
        poitnsHTML[1].innerText = computerPoints;
        cheackValues( computerPoints, isPlayer );
    }

}

const cheackValues = ( value, isPlayer ) => {

    if( isPlayer ){

        if(value > 21){
            console.warn(' Lo siento mucho, perdiste! ');
            stopTwoButtons();
            computerShift();

        } else if ( value === 21 ){
            console.warn('21, Genial!');
            stopTwoButtons();
            computerShift();
        }

    } else {
        if( value > 21 ){
            console.warn(' Player 1 Gana! ');

        } else if ( value === 21 ){
            value = (value > playerPoints) ? 
                     console.warn(' Computadora Gana! ') 
                     : console.warn(' Emapate! ');

        } else if ( value > playerPoints ){
            console.warn(' Computadora Gana! ') 
        }
    }
}

const stopTwoButtons = () => {
    btnRequest.disabled = true;
    btnStopGame.disabled = true;
}

const computerShift = () => {
    do{
        changeValue( false );

        if( playerPoints > 21 || computerPoints === 21 ){
            break;
        }

    } while( (computerPoints <= playerPoints) && (playerPoints <= 21) );
}
//#endregion