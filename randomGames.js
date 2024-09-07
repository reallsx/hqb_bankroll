// Function 1: Throwing 3 coins (returns 3 random integers between 0 and 1)
function throwCoins() {
    let coinResults = [];
    for (let i = 0; i < 3; i++) {
      // Generate random integer 0 or 1 (heads or tails)
      let coin = Math.floor(Math.random() * 2);
      coinResults.push(coin);
    }
    return coinResults;
  }
  
  // Function 2: Throwing 2 dice (returns 2 random numbers between 1 and 6)
function throwDice() {
    let diceResults = [];
    for (let i = 0; i < 2; i++) {
        // Generate random number between 1 and 6
        let dice = Math.floor(Math.random() * 6) + 1;
        diceResults.push(dice);
    }
    return diceResults;
}
  

// Function 3: Drawing 3 playing cards (returns 3 unique random numbers between 1 and 52)
function drawCards() {
    // Create an array representing a deck of cards (0 to 51)
    let deck = Array.from({ length: 52 }, (_, i) => i);
    // let deck = Array.from({ length: 52 }, (_, i) => i + 1);
    let cardResults = [];
  
    for (let i = 0; i < 3; i++) {
      // Generate a random index to pick a card from the deck
      let randomIndex = Math.floor(Math.random() * deck.length);
      // Add the card at the random index to the result
      cardResults.push(deck[randomIndex]);
      // Remove the drawn card from the deck to avoid replacement
      deck.splice(randomIndex, 1);
    }
  
    return cardResults;
  }

  
// Helper functions
function gaussianRandom(mean=0, stdev=1) {
    const u = 1 - Math.random(); // Converting [0,1) to (0,1]
    const v = Math.random();
    const z = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    // Transform to the desired mean and standard deviation:
    return z * stdev + mean;
}
  
function round_(value) {
  return Math.round(value * 10) / 10;
}