
/**
 * 
 * @param {String} carta
 * @returns {HTMLImageElement} elemento html de retonro
 */
export const crearCartaHTML = ( carta ) => {
    if( !carta ) throw new Error('Necesitamos la carta');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    

    return imgCarta;
}