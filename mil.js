// Function to get the coin ID from the coin name
async function getCoinIdFromName(coinName) {
  const response = await fetch('https://api.coingecko.com/api/v3/coins/list');
  const coinsList = await response.json();
  const coin = coinsList.find(c => c.name.toLowerCase() === coinName.toLowerCase());
  return coin ? coin.id : null;
}

// Function to get coin details by ID
async function getCoinDetailsById(coinId) {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`);
  const coinData = await response.json();
  return coinData;
}

// Example usage
const coinName = 'Bitcoin'; // Replace with the name of the coin you're interested in
getCoinIdFromName(coinName).then(coinId => {
  if (coinId) {
    getCoinDetailsById(coinId).then(coinData => {
      console.log(coinData.description.en);
    });
  } else {
    console.log('Coin not found');
  }
});