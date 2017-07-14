function makeArrayWithNumberRange(low, high, asStrings = false) {
  const arr = [];
  while(low <= high) {
    let val = low++;
    if (asStrings) {
      val = val + '';
    } 
    arr.push(val);
  }
  return arr;
}

const cardValues = [
  'a',
  ...makeArrayWithNumberRange(2, 10, true),
  'j',
  'q',
  'k'
];

const cardSuits = ['spade', 'club', 'heart', 'diamond'];

const deckOfCards = cardSuits.reduce((deck, suit) => {
  cardValues.forEach((val) => {
    deck.push({
      suit,
      val
    });
  });
  return deck;
}, []);
console.log(deckOfCards);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(0, deckOfCards.length));

function shuffle(deck, shuffleCount) {
  while(shuffleCount--) {
    const removedRandomCard = deck.splice(getRandomInt(0, deckOfCards.length - 1), 1);
    console.log('removedRandomCard', removedRandomCard[0]);
    deck.splice(getRandomInt(0, deckOfCards.length), 0, removedRandomCard[0]);
  }
  return deck;
}

function shuffle2(deck) {
  let counter = deck.length;
  let i = 0;
  while(counter--) {
    const randomIndex = getRandomInt(0, deckOfCards.length - 1);
    const lastCard = deck[deck.length - 1];
    const randomCard = deck[randomIndex];
    deck[randomIndex] = lastCard;
    deck[deck.length - 1] = randomCard;
  }
  return deck;
}
console.log(shuffle2(deckOfCards, 100));