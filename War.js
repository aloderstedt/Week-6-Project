//Constants and variables listed below
const SUITS = ["of Spades", "of Hearts", "of Clubs", "of Diamonds"];
const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const CARD_VALUES = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    "J": 11,
    "Q": 12,
    "K": 13,
    "A": 14
}
let playerOneDeck, playerTwoDeck;
let playerOneScore = 0;
let playerTwoScore = 0;
//Constants and variables listed above

class Deck {
    constructor(cards = newDeck()) {
        this.cards = cards;
    }
    /**
     * Just for the sake of getting deck lengths easier
     */
    get deckLength() {
        return this.cards.length;
    }
    /**
     * 
     * @returns Gives top card from deck
     */
    flip() {
        return this.cards.shift();
    }

    shuffle() {
        for (let i = 0; i < this.deckLength; i++) {
            const newCard = Math.floor(Math.random() * (i + 1));
            const oldCard = this.cards[newCard];
            this.cards[newCard] = this.cards[i];
            this.cards[i] = oldCard;
        }
    }
}

class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }
}

/**
 * Runs through a round to determine winning card/player and disperses points accordingly.
 */
function playRound() {
    const playerOneCard = playerOneDeck.flip();
    const playerTwoCard = playerTwoDeck.flip();
    console.log(`${playerOneCard.rank} ${playerOneCard.suit} VS ${playerTwoCard.rank} ${playerTwoCard.suit}`);
    if (winsRound(playerOneCard, playerTwoCard)) {
        playerOneScore += 1;
        console.log(`Player One wins the round! 
        Score: [Player One - ${playerOneScore}] [Player Two - ${playerTwoScore}]`);
    } else if (winsRound(playerTwoCard, playerOneCard)) {
        playerTwoScore += 1;
        console.log(`Player Two wins the round! 
        Score: [Player One - ${playerOneScore}] [Player Two - ${playerTwoScore}]`);
    } else {
        console.log(`No point awarded for this round.
        Score: [Player One - ${playerOneScore}] [Player Two - ${playerTwoScore}]`);
    }
}
/**
 * 
 * @param {string} cardOne Converts        into         to           winning
 * @param {string} cardTwo          string      integer    determine         card.
 * @returns 
 */
function winsRound(cardOne, cardTwo) {
    return CARD_VALUES[cardOne.rank] > CARD_VALUES[cardTwo.rank];
}
//magical code for creating a deck of cards using two arrays
function newDeck() {
    return SUITS.flatMap(suit => {
        return RANKS.map(rank => {
            return new Card(suit, rank);
        })
    })
}
/**
 * Runs game
 */
function newGame() {
    //Create a deck, shuffle deck, deal half to each player
    const deck = new Deck();
    
    deck.shuffle();
    
    const deckMiddle = deck.deckLength / 2;
    playerOneDeck = new Deck(deck.cards.slice(0, deckMiddle));
    playerTwoDeck = new Deck(deck.cards.slice(deckMiddle, deck.deckLength));
    //Loop to iterate through the game and determine winner
    for (let i = 0; i < 26; i++) {
        playRound();
    } if (playerOneScore > playerTwoScore) {
        console.log(`Player one wins with ${playerOneScore} points!!`);
    } else if (playerTwoScore > playerOneScore) {
        console.log(`Player two wins with ${playerTwoScore} points!!`);
    } else {
        console.log(`It was a tie!! ${playerOneScore} to ${playerTwoScore}!!`);
    }
}

newGame();