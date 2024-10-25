import bitcoin from "../app/assets/Images/Bitcoin-currency.svg";
import Ibitcoin from "../app/assets/Images/i-bitcoin-currency.svg";
import ethereum from "../app/assets/Images/ethereum-currency.svg";
import Iethereum from "../app/assets/Images/i-etherieum-currency.svg";
import iota from "../app/assets/Images/iota-currency.svg";
import Iiota from "../app/assets/Images/i-iota-currency.svg";
import solana from "../app/assets/Images/solana-currency.svg";
import Isolana from "../app/assets/Images/i-solana-currency.svg";
import USD from "../app/assets/Images/USD-currency.svg";
import IUSD from "../app/assets/Images/i-USD-currency.svg";

export const transactionsData = {
  iota: [
    { type: "IOTA", amount: "100", date: "2024-10-22", arrow: "arrow" },
    { type: "IOTA", amount: "200", date: "2024-10-21", arrow: "arrow" },
    { type: "IOTA", amount: "100", date: "2024-10-22", arrow: "downArrow" },
    { type: "IOTA", amount: "200", date: "2024-10-21", arrow: "downArrow" },
  ],
  bitcoin: [
    { type: "Bitcoin", amount: "0.01", date: "2024-10-20", arrow: "arrow" },
    { type: "Bitcoin", amount: "0.05", date: "2024-10-19", arrow: "arrow" },
    { type: "IOTA", amount: "100", date: "2024-10-22", arrow: "downArrow" },
    { type: "IOTA", amount: "200", date: "2024-10-21", arrow: "downArrow" },
  ],
  ethereum: [
    { type: "Ethereum", amount: "1.2", date: "2024-10-18", arrow: "arrow" },
    { type: "Ethereum", amount: "0.8", date: "2024-10-17", arrow: "arrow" },
    { type: "IOTA", amount: "100", date: "2024-10-22", arrow: "downArrow" },
    { type: "IOTA", amount: "200", date: "2024-10-21", arrow: "downArrow" },
  ],
  solana: [
    { type: "Solana", amount: "50", date: "2024-10-16", arrow: "arrow" },
    { type: "Solana", amount: "30", date: "2024-10-15", arrow: "arrow" },
    { type: "IOTA", amount: "100", date: "2024-10-22", arrow: "downArrow" },
    { type: "IOTA", amount: "200", date: "2024-10-21", arrow: "downArrow" },
  ],
  usd: [
    { type: "USD", amount: "500", date: "2024-10-14", arrow: "arrow" },
    { type: "USD", amount: "600", date: "2024-10-13", arrow: "arrow" },
    { type: "IOTA", amount: "100", date: "2024-10-22", arrow: "downArrow" },
    { type: "IOTA", amount: "200", date: "2024-10-21", arrow: "downArrow" },
  ],
};

export const currencyButtons = [
  {
    id: 0,
    imageSrc: Iiota,
    altText: "iota-currency",
    whiteImageSrc: iota,
    text: "IOTA",
    dataId: "iota",
  },
  {
    id: 1,
    imageSrc: bitcoin,
    altText: "bitcoin-currency",
    whiteImageSrc: Ibitcoin,
    text: "BTC",
    dataId: "bitcoin",
  },
  {
    id: 2,
    imageSrc: ethereum,
    altText: "ethereum currency",
    whiteImageSrc: Iethereum,
    text: "ETH",
    dataId: "ethereum",
  },
  {
    id: 3,
    imageSrc: solana,
    altText: "solana currency",
    whiteImageSrc: Isolana,
    text: "SOL",
    dataId: "solana",
  },
  {
    id: 4,
    imageSrc: USD,
    altText: "USD currency",
    whiteImageSrc: IUSD,
    text: "USD",
    dataId: "usd",
  },
];
