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
const total = document.querySelector('.total');
let totalAmount = 0;

const btcleft = document.querySelector('.btcleft');
const btcAmount = document.querySelector('.btcAmount').textContent;
const btcTotal = document.querySelector('.btcTotal');
let btcPrice = 0;

const ethleft = document.querySelector('.ethleft');
const ethAmount = document.querySelector('.ethAmount').textContent;
const ethTotal = document.querySelector('.ethTotal');
let ethPrice = 0;

const usdtleft = document.querySelector('.usdtleft');
const usdtAmount = document.querySelector('.usdtAmount').textContent;
const usdtTotal = document.querySelector('.usdtTotal');
let usdtPrice = 0;

const bnbleft = document.querySelector('.bnbleft');
const bnbAmount = document.querySelector('.bnbAmount').textContent;
const bnbTotal = document.querySelector('.bnbTotal');
let bnbPrice = 0;

const dogeleft = document.querySelector('.dogeleft');
const dogeAmount = document.querySelector('.dogeAmount').textContent;
const dogeTotal = document.querySelector('.dogeTotal');
let dogePrice = 0;

const tronleft = document.querySelector('.tronleft');
const tronAmount = document.querySelector('.tronAmount').textContent;
const tronTotal = document.querySelector('.tronTotal');
let tronPrice = 0;

const ltcleft = document.querySelector('.ltcleft');
const ltcAmount = document.querySelector('.ltcAmount').textContent;
const ltcTotal = document.querySelector('.ltcTotal');
let ltcPrice = 0;

// const eth = document.querySelector('div');
// const usdt = document.querySelector('div');
// const bnb = document.querySelector('div');
// const dogecoin = document.querySelector('div');
// const tron = document.querySelector('div');
// const litecoin = document.querySelector('div');

fetch(
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=20',
)
  .then((res) => res.json())
  .then((res) => {
    data.push(...res);
    const t = data.filter((f) => coins.includes(f.name.toLowerCase()));
    console.log(t);
    t.forEach((i, index) => {
      switch (i.symbol.toLowerCase()) {
        case 'btc':
          btcPrice = i.current_price;
          btcleft.textContent = i.current_price;
          btcTotal.textContent = `${btcPrice * btcAmount}`;
          break;
        case 'eth':
          ethPrice = i.current_price;
          ethleft.textContent = i.current_price;
          ethTotal.textContent = `${ethPrice * ethAmount}`;
          break;
        case 'usdt':
          usdtPrice = i.current_price;
          usdtleft.textContent = i.current_price;
          usdtTotal.textContent = `${usdtPrice * usdtAmount}`;
          break;
        case 'trx':
          tronPrice = i.current_price;
          tronleft.textContent = i.current_price;
          tronTotal.textContent = `${tronPrice * tronAmount}`;
          break;
        case 'ltc':
          ltcPrice = i.current_price;
          ltcleft.textContent = t[6].current_price;
          ltcTotal.textContent = `${ltcPrice * ltcAmount}`;
          break;
        case 'bnb':
          bnbPrice = i.current_price;
          bnbleft.textContent = i.current_price;
          bnbTotal.textContent = `${bnbPrice * bnbAmount}`;
          break;
        case 'doge':
          dogePrice = i.current_price;
          dogeleft.textContent = i.current_price;
          dogeTotal.textContent = `${dogePrice * dogeAmount}`;
          break;
        default:
          break;
      }
    });
    totalAmount = Number(btcTotal.textContent) + Number(ethTotal.textContent) + Number(bnbTotal.textContent) + Number(dogeTotal.textContent) + Number(ltcTotal.textContent) + Number(tronTotal.textContent) + Number(usdtTotal.textContent)
    total.textContent = totalAmount
  })
  .catch((err) => console.log(err));

// fetch('https://json.geoiplookup.io')
//   .then((res) => res.json())
//   .then((res) => {
//     console.log(res.ip);
//   })
//   .catch((err) => console.log(err));
