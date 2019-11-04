import * as cards from "./cards";

class Model {
    stack = [];
    deck = new cards.Deck();
    constructor() {
        cards.init({table:'#card-table'});
        // The state of the model

    }
    populateCardStack(){

        deck.addCards(cards.all);
        deck.render({immediate:true});
    }

    getCard() {

    }

}