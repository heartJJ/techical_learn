let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        return () => { // 此处若 return function() {}, 则 this 将指向 window, 严格模式下 this 为 undefined
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);


/**
 * 重载
 */
 let suits = ["hearts", "spades", "clubs", "diamonds"];

 function pickCard(x: {suit: string; card: number; }[]): number;
 function pickCard(x: number): {suit: string; card: number; };
 function pickCard(x): any {
     // Check to see if we're working with an object/array
     // if so, they gave us the deck and we'll pick the card
     if (typeof x == "object") {
         let pickedCard = Math.floor(Math.random() * x.length);
         return pickedCard;
     }
     // Otherwise just let them pick the card
     else if (typeof x == "number") {
         let pickedSuit = Math.floor(x / 13);
         return { suit: suits[pickedSuit], card: x % 13 };
     }
 }
 
 let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
 let pickedCard1 = myDeck[pickCard(myDeck)];
 console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);
 
 let pickedCard2 = pickCard(15);
 console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);