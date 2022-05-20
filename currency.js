let btcPrice = 0;
let ethPrice = 0;
let usdtPrice = 0;
let bnbPrice = 0;
let dogePrice = 0;
let tronPrice = 0;
let ltcPrice = 0;
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
const walletType = document.querySelector('.walletType')
const result = document.querySelector('h2')

fetch(
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=20',
)
  .then((res) => res.json())
  .then((res) => {
    data.push(...res);
    const t = data.filter((f) => coins.includes(f.name.toLowerCase()));
    t.forEach((i, index) => {
      switch (i.symbol.toLowerCase()) {
        case 'btc':
          btcPrice = i.current_price;
          break;
        case 'eth':
          ethPrice = i.current_price;
          break;
        case 'usdt':
          usdtPrice = i.current_price;
          break;
        case 'trx':
          tronPrice = i.current_price;
          break;
        case 'ltc':
          ltcPrice = i.current_price;
          break;
        case 'bnb':
          bnbPrice = i.current_price;
          break;
        case 'doge':
          dogePrice = i.current_price;
          break;
        default:
          break;
      }
    });
    document.querySelector('#test').addEventListener('input', (e) => {
      switch (walletType.textContent.toLowerCase()) {
        case 'bitcoin':
          result.textContent = `Your result in dollars ${
            e.target.value * btcPrice
          }`;
          break;
        case 'ethereum':
          result.textContent = `Your result in dollars ${
            e.target.value * ethPrice
          }`;
          break;
        case 'dogecoin':
          result.textContent = `Your result in dollars ${
            e.target.value * dogePrice
          }`;
          break;
        case 'usdt':
          result.textContent = `Your result in dollars ${
            e.target.value * usdtPrice
          }`;
          break;
        case 'bnb':
          result.textContent = `Your result in dollars ${
            e.target.value * bnbPrice
          }`;
          break;
        case 'tron':
          result.textContent = `Your result in dollars ${
            e.target.value * tronPrice
          }`;
          break;
        case 'litecoin':
          result.textContent = `Your result in dollars ${
            e.target.value * ltcPrice
          }`;
          break;
        default:
          break;
      }
    })
  })
  .catch((err) => console.log(err));
