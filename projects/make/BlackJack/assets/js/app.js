
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

//#region 'Eventos'

btnNewGame.addEventListener('click', () => {
    startGame();
});

btnRequest.addEventListener('click', () => {
    changeValue( true );
});

btnStopGame.addEventListener('click', () => {
    stopTwoButtons();
    computerShift();
});

//#endregion

//#region 'Metodos'

const startGame = () => {
    deck = [];
    deck = newDeck();

    btnRequest.disabled  = false;
    btnStopGame.disabled = false;

    playerPoints   = 0;
    computerPoints = 0;

    poitnsHTML[0].innerText = 0;
    poitnsHTML[1].innerText = 0;

    playerCards.innerHTML   = '';
    ComputerCards.innerHTML = '';

}

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

        if(playerPoints > 21){
            stopTwoButtons();
            computerShift();
            
        } else if ( playerPoints === 21 ){
            stopTwoButtons();
            computerShift();
        }

    } else {
        computerPoints = computerPoints + valueCard( isPlayer );
        poitnsHTML[1].innerText = computerPoints;
    }

}

const stopTwoButtons = () => {
    btnRequest.disabled  = true;
    btnStopGame.disabled = true;
}

const computerShift = () => {
    do{
        changeValue( false );

        if( playerPoints > 21 || computerPoints === 21 ){
            break;
        }

    } while( (computerPoints <= playerPoints) && (playerPoints <= 21) );

    setTimeout(() => {
        if( computerPoints > 21 ){
            alert(' Player 1 win! ');
            
        } else if ( computerPoints === playerPoints ){
            alert(' Draw! ');

        } else if ( computerPoints > playerPoints ){
            alert(' Computer win!! ') 

        } else if ( playerPoints > 1 ){
            alert(' You lose, Computer win! ') 

        }

    }, 10 );

}
//#endregion

//#region 'Brand'

/* 
     @  S.villa_
    \|\
    /\
*/

//#endregion

