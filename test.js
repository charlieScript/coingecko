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
const eth = document.querySelector('div')
const usdt = document.querySelector('div')
const bnb = document.querySelector('div')
const dogecoin = document.querySelector('div')
const tron = document.querySelector('div')
const litecoin = document.querySelector('div')

fetch(
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=20',
)
  .then((res) => res.json())
  .then((res) => {
    data.push(...res);
    const t = data.filter((f) => coins.includes(f.name.toLowerCase()));
    btc.textContent = t[0].current_price
    eth.textContent = t[1].current_price
    usdt.textContent = t[2].current_price
    bnb.textContent = t[3].current_price
    dogecoin.textContent = t[4].current_price
    tron.textContent = t[5].current_price
    litecoin.textContent = t[6].current_price
  })
  .catch((err) => console.log(err));
