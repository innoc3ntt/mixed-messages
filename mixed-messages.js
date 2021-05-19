// Chooses a random crypto currency and predicts a random outcome

function generateRandomNumber(num) {
    return Math.floor(Math.random()*num);
}

const cryptoInfo = {
    Ticker: ['BTC', 'LTC', 'ETH', 'XRP', 'DOGE', 'ADA', 'BCH'],
    Direction: ['up', 'down']
}

const results = [];

for (let prop in cryptoInfo) {
    let randNum = generateRandomNumber(cryptoInfo[prop].length);
    results.push(cryptoInfo[prop][randNum]);
}

// push percentage
results.push(generateRandomNumber(100));

console.log(`${results[0]} will go ${results[1]} by ${results[2]}%`);
