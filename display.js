let click_count = 0;

document.getElementById('generateButton').addEventListener('click', function() {
    const coins = throwCoins();
    const dice = throwDice();
    const cards = drawCards();

    const suits = ['♣', '♦', '♥', '♠'];
    const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

    const cardNames = cards.map(card => {
      const suit = suits[Math.floor((card) / 13)];
      const rank = ranks[(card) % 13];
      return `${suit} ${rank}`;
    });

    const coinFaces = coins.map(coin => coin ? 'H' : 'T');

    // Display results in respective columns
    document.getElementById('coins-result').innerHTML = coinFaces.join(' ');
    document.getElementById('dice-result').innerHTML = dice.join(' | ');
    document.getElementById('cards-result').innerHTML = cardNames.join(' | ');

    // Calculate the total PnL for the coins game
    let totalPnl = 0;
    totalPnl += coinResults(coins, oddsA);
    totalPnl += diceResults(dice, oddsB);
    totalPnl += cardResults(cards, oddsC);

    document.getElementById('total-pnl-value').textContent = totalPnl.toFixed(2);
    balance += totalPnl;

    if (click_count === 0) {
        document.getElementById('c3').style.display = "table-row";
        document.getElementById('b7').style.display = "table-row";
        document.getElementById('a5').style.display = "table-row";
    }

    if (click_count === 1) {
      document.getElementById('c4').style.display = "table-row";
      document.getElementById('b8').style.display = "table-row";
      document.getElementById('a6').style.display = "table-row";
    }

    click_count += 1;
    generateOdds();
  });

function coinResults(coins, odds_a) {
    let totalPnl = 0
    let tempPnl = 0
    if ((coins[0] === 1 && coins[1] === 0 && coins[2] === 1) || (coins[0] === 0 && coins[1] === 1 && coins[2] === 0)) {
        tempPnl = odds_a[0] + 2
    }
    const inputa1Value = document.getElementById('bets-a1').value || 0;
    const inputa1 = parseFloat(inputa1Value);
    totalPnl += (tempPnl - 1) * inputa1;
    document.getElementById('pnl-a1').innerHTML = (tempPnl - 1) * inputa1;

    tempPnl = 0
    if ((coins[0] === 1 && coins[1] === 1 && coins[2] === 1) || (coins[0] === 0 && coins[1] === 0 && coins[2] === 0)) {
        tempPnl = odds_a[1] + 2
    }
    const inputa2Value = document.getElementById('bets-a2').value || 0;
    const inputa2 = parseFloat(inputa2Value);
    totalPnl += (tempPnl - 1) * inputa2;
    document.getElementById('pnl-a2').innerHTML = (tempPnl - 1) * inputa2;

    tempPnl = 0
    if (coins[0]+ coins[1] + coins[2] > 1 ) {
        tempPnl = odds_a[2] + 2
    }
    const inputa3Value = document.getElementById('bets-a3').value || 0;
    const inputa3 = parseFloat(inputa3Value);
    totalPnl += (tempPnl - 1) * inputa3;
    document.getElementById('pnl-a3').innerHTML = (tempPnl - 1) * inputa3;

    tempPnl = 0
    if (coins[2] === 1){
        tempPnl = odds_a[3] + 2
    }
    const inputa4Value = document.getElementById('bets-a4').value || 0;
    const inputa4 = parseFloat(inputa4Value);
    totalPnl += (tempPnl - 1) * inputa4;
    document.getElementById('pnl-a4').innerHTML = (tempPnl - 1) * inputa4;

    tempPnl = 0
    if (coins[0] + coins[1] === 0 || coins[2] + coins[1] === 0) {
        tempPnl = odds_a[4] + 2
    }
    const inputa5Value = document.getElementById('bets-a5').value || 0;
    const inputa5 = parseFloat(inputa5Value);
    totalPnl += (tempPnl - 1) * inputa5;
    document.getElementById('pnl-a5').innerHTML = (tempPnl - 1) * inputa5;

    tempPnl = 0
    if (coins[0] + coins[3] === 1) {
        tempPnl = odds_a[5] + 2
    }
    const inputa6Value = document.getElementById('bets-a6').value || 0;
    const inputa6 = parseFloat(inputa6Value);
    totalPnl += (tempPnl - 1) * inputa6;
    document.getElementById('pnl-a6').innerHTML = (tempPnl - 1) * inputa6;

    return totalPnl;
}

function diceResults(dice, odds_b) {
    let totalPnl = 0
    const sum2 = dice[0] + dice[1];

    let tempPnl = 0
    if (sum2 < 4) {
        tempPnl = odds_b[0] + 2
    }
    const inputb1Value = document.getElementById('bets-b1').value || 0;
    const inputb1 = parseFloat(inputb1Value);
    totalPnl += (tempPnl - 1) * inputb1;
    document.getElementById('pnl-b1').innerHTML = (tempPnl - 1) * inputb1;

    tempPnl = 0
    if (sum2 === 4) {
        tempPnl = odds_b[1] + 2
    }
    const inputb2Value = document.getElementById('bets-b2').value || 0;
    const inputb2 = parseFloat(inputb2Value);
    totalPnl += (tempPnl - 1) * inputb2;
    document.getElementById('pnl-b2').innerHTML = (tempPnl - 1) * inputb2;

    tempPnl = 0
    if (sum2 ===5) {
        tempPnl = odds_b[2] + 2
    }
    const inputb3Value = document.getElementById('bets-b3').value || 0;
    const inputb3 = parseFloat(inputb3Value);
    totalPnl += (tempPnl - 1) * inputb3;
    document.getElementById('pnl-b3').innerHTML = (tempPnl - 1) * inputb3;

    tempPnl = 0
    if (sum2 > 5 && sum2 < 9) {
        tempPnl = odds_b[3] + 2
    }
    const inputb4Value = document.getElementById('bets-b4').value || 0;
    const inputb4 = parseFloat(inputb4Value);
    totalPnl += (tempPnl - 1) * inputb4;
    document.getElementById('pnl-b4').innerHTML = (tempPnl - 1) * inputb4;

    tempPnl = 0
    if (sum2 === 9 || sum2 === 10) {
        tempPnl = odds_b[4] + 2
    }
    const inputb5Value = document.getElementById('bets-b5').value || 0;
    const inputb5 = parseFloat(inputb5Value);
    totalPnl += (tempPnl - 1) * inputb5;
    document.getElementById('pnl-b5').innerHTML = (tempPnl - 1) * inputb5;

    tempPnl = 0
    if (sum2 > 10) {
        tempPnl = odds_b[5] + 2
    }
    const inputb6Value = document.getElementById('bets-b6').value || 0;
    const inputb6 = parseFloat(inputb6Value);
    totalPnl += (tempPnl - 1) * inputb6;
    document.getElementById('pnl-b6').innerHTML = (tempPnl - 1) * inputb6;

    tempPnl = 0
    if (sum2 > 7) {
        tempPnl = odds_b[6] + 2
    }
    const inputb7Value = document.getElementById('bets-b7').value || 0;
    const inputb7 = parseFloat(inputb7Value);
    totalPnl += (tempPnl - 1) * inputb7;
    document.getElementById('pnl-b7').innerHTML = (tempPnl - 1) * inputb7;

    tempPnl = 0
    if (dice[0] * dice[1] < 20) {
        tempPnl = round_(odds_b[7]) + 2
    }
    const inputb8Value = document.getElementById('bets-b8').value || 0;
    const inputb8 = parseFloat(inputb8Value);
    totalPnl += (tempPnl - 1) * inputb8;
    document.getElementById('pnl-b8').innerHTML = (tempPnl - 1) * inputb8;

    return totalPnl;
}

function cardResults(cards, odds_c) {
    let totalPnl = 0

    console.log(cards);

    const sum3 = cards[0]%13 + cards[1]%13 + cards[2]%13 + 3;
    const longCardValue = document.getElementById('cardLong').value || 0;
    const shortCardValue = document.getElementById('cardShort').value || 0;
    const longCard = parseFloat(longCardValue);
    const shortCard = parseFloat(shortCardValue);
    document.getElementById("pnl-mm").innerHTML = (sum3-MMC[1]) * longCard + (MMC[0]-sum3) * shortCard;
    totalPnl += (sum3-MMC[1]) * longCard + (MMC[0]-sum3) * shortCard;




    let tempPnl = 0
    const product2 = (cards[0]%13 + 1) * (cards[1]%13 + 1);
    if (product2 > 50) {
        tempPnl = odds_c[0] + 2
    }
    const inputc1Value = document.getElementById('bets-c1').value || 0;
    const inputc1 = parseFloat(inputc1Value);
    totalPnl += (tempPnl - 1) * inputc1;
    document.getElementById('pnl-c1').innerHTML = (tempPnl - 1) * inputc1;

    tempPnl = 0
    if (product2 > 100) {
        tempPnl = odds_c[1] + 2
    }
    const inputc2Value = document.getElementById('bets-c2').value || 0;
    const inputc2 = parseFloat(inputc2Value);
    totalPnl += (tempPnl - 1) * inputc2;
    document.getElementById('pnl-c2').innerHTML = (tempPnl - 1) * inputc2;

    tempPnl = 0
    if (product2 < 30) {
        tempPnl = odds_c[2] + 2
    }
    const inputc3Value = document.getElementById('bets-c3').value || 0;
    const inputc3 = parseFloat(inputc3Value);
    totalPnl += (tempPnl - 1) * inputc3;
    document.getElementById('pnl-c3').innerHTML = (tempPnl - 1) * inputc3;

    tempPnl = 0
    if (product2%2 === 0) {
        tempPnl = odds_c[3] + 2
    }
    const inputc4Value = document.getElementById('bets-c4').value || 0;
    const inputc4 = parseFloat(inputc4Value);
    totalPnl += (tempPnl - 1) * inputc4;
    document.getElementById('pnl-c4').innerHTML = (tempPnl - 1) * inputc4;

    return totalPnl;
}

// Function to reset all inputs to 0
function resetInputs() {
    // Select all inputs with the class 'input-class'
    const inputs = document.querySelectorAll('.input-class');
    const inputs2 = document.querySelectorAll('.input-class2');
    
    // Iterate through each input and set its value to 0
    inputs.forEach(input => {
      input.value = 0;
    });

    inputs2.forEach(input => {
      input.value = 0;
    });

    updateResult();
  }
  
// Add event listener to the button
document.getElementById('generateButton').addEventListener('click', resetInputs);
  

const odds_a = [0.25, 0.25, 0.5, 0.5, 0.375, 0.5];
const odds_b = [1/12, 1/12, 1/9, 4/9, 7/36, 1/12, 5/12, 7/9];
const odds_c = [0.390, 0.124, 0.408, 0.710];

const multiplier = [0.7, 0.85, 0.9, 0.95, 0.097, 0.097, 1, 1, 1.03, 1.05, 1.1, 1.15, 1.3];
const modifier = [-0.2, -0.1, -0.1, -0.1, 0, 0, 0.1, 0.1, 0.2]

// Function to get a random element from an array
function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
  
  // Function to compute the new array
function computeOddsArray(odds_) {
  const randomFlag = Math.floor(Math.random() * 2);
  if (randomFlag === 0) {
    return odds_.map(odds => round_((1/odds - 1) * getRandomElement(multiplier)));
  }
  if (randomFlag === 1) {
    return odds_.map(odds => round_((1/odds) + getRandomElement(modifier) - 1));
  }
}

let oddsA = [];
let oddsB = [];
let oddsC = [];
let MMC = [];


function generateOdds() {
    // Generate random odds for each outcome
    oddsA = computeOddsArray(odds_a);
    oddsB = computeOddsArray(odds_b);
    oddsC = computeOddsArray(odds_c);

    // Display the odds in the respective columns
    document.getElementById('odds-a1').textContent = oddsA[0].toFixed(1);
    document.getElementById('odds-a2').textContent = oddsA[1].toFixed(1);
    document.getElementById('odds-a3').textContent = oddsA[2].toFixed(1);
    document.getElementById('odds-a4').textContent = oddsA[3].toFixed(1);
    document.getElementById('odds-a5').textContent = oddsA[4].toFixed(1);
    document.getElementById('odds-a6').textContent = oddsA[5].toFixed(1);

    document.getElementById('odds-b1').textContent = oddsB[0].toFixed(1);
    document.getElementById('odds-b2').textContent = oddsB[1].toFixed(1);
    document.getElementById('odds-b3').textContent = oddsB[2].toFixed(1);
    document.getElementById('odds-b4').textContent = oddsB[3].toFixed(1);
    document.getElementById('odds-b5').textContent = oddsB[4].toFixed(1);
    document.getElementById('odds-b6').textContent = oddsB[5].toFixed(1);
    document.getElementById('odds-b7').textContent = oddsB[6].toFixed(1);
    document.getElementById('odds-b8').textContent = oddsB[7].toFixed(1);

    // Generate market maker price

    let MM = Math.min(38,Math.max(Math.floor(gaussianRandom(21, 3)), 2));
    MMC[0] = MM - 1;
    MMC[1] = MM + 1;
    document.getElementById('buy-price').textContent = MMC[0].toFixed(0);
    document.getElementById('sell-price').textContent = MMC[1].toFixed(0);

    document.getElementById('odds-c1').textContent = oddsC[0].toFixed(1);
    document.getElementById('odds-c2').textContent = oddsC[1].toFixed(1);
    document.getElementById('odds-c3').textContent = oddsC[2].toFixed(1);
    document.getElementById('odds-c4').textContent = oddsC[3].toFixed(1);


  }

generateOdds();