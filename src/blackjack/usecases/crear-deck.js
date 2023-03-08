import _ from 'underscore';

/**
 * This function creates a new deck
 * @param {array<String>} tiposDeCarta  Example: ['C','D','H','S']
 * @param {array<String>} tiposEspeciales Example: ['A','J','Q','K']
 * @returns {array<String>} returns new deck
 */

// Esta función crea un nuevo deck
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if ( !tiposDeCarta || tiposDeCarta.lenght === 0) throw new Error('tiposDeCarta es obligatorio');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }

    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}

// export default creardeck;