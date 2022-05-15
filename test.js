let data = [];
const coins = [
  'bitcoin',
  'ethereum',
  'tether',
  'bnb',
  'dogecoin',
  'tron',
  'litecoin',
];
const btc = document.querySelector('div')
fetch(
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=20',
)
  .then((res) => res.json())
  .then((res) => {
    data.push(...res);
    const t = data.filter((f) => coins.includes(f.name.toLowerCase()));
    console.log(t)
    btc.textContent = t[0].current_price
    btc.textContent = t[1].current_price
    btc.textContent = t[2].current_price
    btc.textContent = t[3].current_price
    btc.textContent = t[4].current_price
    btc.textContent = t[5].current_price
    btc.textContent = t[6].current_price
  })
  .catch((err) => console.log(err));
