const API_KEY = '80b16be19c5dce5efe83aab65510d2855be813d9b18b1d0202111f2e222df729';

export const loadTicker = async tickerName => await fetch(
	`https://min-api.cryptocompare.com/data/price?fsym=${tickerName}&tsyms=USD&api_key=${API_KEY}`
  );
  const data = await f.json();