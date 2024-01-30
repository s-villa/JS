
const miModulo = (() => {
    'use strict'    // -->  le dice a js que sea estricto

    const tipos       = ['C','D','H','S'],
          especiales  = ['A','J','Q','K'];
    
    let puntosJugadores = [],
        deck            = [];

    // Referencias del HTML
    const btnPedir   = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),
          btnNuevo   = document.querySelector('#btnNuevo');

    const divCartasJugadores   = document.querySelectorAll('.divCartas'),
          puntosHTML           = document.querySelectorAll('small');

    // Esta funcion inicializa el juego
    const startGame = ( numJugadores = 2 ) => {
        deck = crearDeck();
        puntosJugadores = [];

        for( let i = 0; i < numJugadores; i++ ){
            puntosJugadores.push(0);
        }
        deck = [];
        deck = crearDeck();
 
        puntosHTML.forEach( elem => elem.innerText = 0 );
        divCartasJugadores.forEach( elem => elem.innerHTML = '' );

        btnPedir.disabled   = false;
        btnDetener.disabled = false;
    }
    
    // Esta función crea un nuevo deck
    const crearDeck = () => {

        deck = [];
        for( let i = 2; i <= 10; i++ ) {
            for( let tipo of tipos ) {
                deck.push( i + tipo);
            }
        }

        for( let tipo of tipos ) {
            for( let esp of especiales ) {
                deck.push( esp + tipo);
            }
        }
        return _.shuffle( deck );
    }

    // Esta función me permite tomar una carta
    const pedirCarta = () => {

        if ( deck.length === 0 ) {
            throw 'No hay cartas en el deck';
        }
        return deck.pop();
    }

    // Esta funcion sirve para obtener el valor de la carta
    const valorCarta = ( carta ) => {

        const valor = carta.substring(0, carta.length - 1);
        return ( isNaN( valor ) ) ? 
                ( valor === 'A' ) ? 11 : 10
                : valor * 1;
    }

    // Turno: 0 = primer jugador y el ultimo sera la computadora
    const acumularPuntos = ( carta, turno ) => {

        puntosJugadores[ turno ] = puntosJugadores[ turno ] + valorCarta( carta );
        puntosHTML[ turno ].innerText = puntosJugadores[ turno ];
        return puntosJugadores[ turno ];
    }

    // Esta funcion crea y agraga la carta al html
    const crearCarta = (carta, turno) => {

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
        divCartasJugadores[ turno ].append( imgCarta );

    }

    // Esta funcion determina el ganador
    const determinarGanador = () => {

        const [ puntosMinimos, puntosComputadora ] = puntosJugadores;

        setTimeout(() => {
            if( puntosMinimos === puntosComputadora ) {
                alert('Nadie gana :(');
            } else if ( puntosMinimos > 21 ) {
                alert('Computadora gana')
            } else if( puntosComputadora > 21 ) {
                alert('Jugador Gana');
            } else {
                alert('Computadora Gana')
            }
        }, 100 );

    }

    // turno de la computadora
    const turnoComputadora = ( puntosMinimos ) => {

        let puntosComputadora = 0;

        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
            crearCarta( carta, puntosJugadores.length - 1 );

            if( puntosMinimos > 21 ) {
                break;
            }

        } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

        determinarGanador();

    }

    // Eventos
    btnPedir.addEventListener('click', () => {

        const carta   = pedirCarta(),
        puntosJugador = acumularPuntos(carta, 0);
        crearCarta( carta, 0 );

        if ( puntosJugador > 21 ) {
            console.warn('Lo siento mucho, perdiste');
            btnPedir.disabled   = true;
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador );

        } else if ( puntosJugador === 21 ) {
            console.warn('21, genial!');
            btnPedir.disabled   = true;
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador );
        }

    });

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        
        turnoComputadora( puntosJugadores[0] );
    });

    btnNuevo.addEventListener('click', () => {
        console.clear();
        startGame();

    });

    // Siempre que se usa el patron Modulo, es necesario poner un return de lo que sea, y si quiero hacer algo publico hago desde ese return
    return {
        nuevoJuego: startGame
    };

})(); 


