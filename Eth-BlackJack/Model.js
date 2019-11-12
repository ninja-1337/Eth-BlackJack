//import * as cards from "./cards";

class Model {
    deck = new cards.Deck();
    constructor() {

        }

   function populateCardStack(){
        deck.addCards(cards.all);
        deck.render({immediate:true});
    }

    getCard() {

    }

    shuffleCards() {

    }

}