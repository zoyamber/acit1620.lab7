export function shuffle(list) {
    /**
     * Scramble the order of items in a list
     */
    const templist = list;

    let currentIndex = templist.length;
    let randomIndex;

    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        const temp = templist[currentIndex];
        templist[currentIndex] = templist[randomIndex];
        templist[randomIndex] = temp; 
    }
    return templist;
}

export function getCard() {
    return getCardNode().alt;
}

export function getCardNode() {
    return document.querySelector('img');
}

export function getCheckbox() {
    return document.querySelector('#tries-checkbox');
}

export function getContinueBtn() {
    return document.querySelector('#continue');
}

export function getNumberInput() {
    return document.querySelector('input[type="number"]');
}

export function getOutput() {
    return document.querySelector('output');
}

export function getPanel() {
    return document.querySelector('main > div:last-child');
}

export function getTiles() {
    return document.querySelectorAll('.tiles input');
}

export function getTries() {
    return getNumberInput().value;
}

export function getRestartBtn() {
    return document.querySelector('#restart');
}

export function getShowBtn() {
    return document.querySelector('#show-btn');
}

export function setCard() {
    /**
     * Randomly choose a card and load it into
     * the answer image element.
     * Initially, hide the card from the player
     */
    const cards = [ 
        "2 of spades", 
        '3 of diamonds', 
        '6 of clubs', 
        '10 of hearts', 
        'ace of clubs', 
        'jack of hearts', 
        'jack of spades', 
        'king of diamonds', 
        'queen of spades'
    ];

    const idx = Math.floor(Math.random() * 9);
    const card = cards[idx];
    const cardNode = getCardNode();
    const path = card.split(' ').join('_');
    cardNode.src = `images/${path}.svg`;
    cardNode.alt = card;

    // hide the card
    cardNode.classList.toggle('hidden', true);
    const CardNode = getCardNode();
    const parentElement = CardNode.parentElement;

    CardNode.classList.remove('fade');
    parentElement.classList.remove('flip');

     // cancel the animation
}

export function showCard() {
    /**
     * Show the answer card and disable the 'show' button
     */
    getCardNode().classList.toggle('hidden', false);
    getShowBtn().toggleAttribute('disabled', true);

    // animate the card

    const CardNode = getCardNode();
    const parentElement = CardNode.parentElement;

    CardNode.classList.add('fade');
    parentElement.classList.add('flip');



}

export function toggleInputState(e) {
    /**
     * Toggle active state of the number input node
     * This depends on whether the checkbox is checked or note.
     * The information is available in the event object passed to the
     * function at call time.
     */

    // getNumberInput().toggleAttribute('disabled', !e.target.checked);
    if (e.target.checked == true){
        getNumberInput().removeAttribute('disabled');
    } else {
        getNumberInput().setAttribute('disabled'); 
    }
}

