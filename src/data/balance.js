import bitcoin from "@/assets/Images/Bitcoin-currency.svg";
import Ibitcoin from "@/assets/Images/i-bitcoin-currency.svg";
import ethereum from "@/assets/Images/ethereum-currency.svg";
import Iethereum from "@/assets/Images/i-etherieum-currency.svg";
import iota from "@/assets/Images/iota-currency.svg";
import Iiota from "@/assets/Images/i-iota-currency.svg";
import solana from "@/assets/Images/solana-currency.svg";
import Isolana from "@/assets/Images/i-solana-currency.svg";
import USD from "@/assets/Images/USD-currency.svg";
import IUSD from "@/assets/Images/i-USD-currency.svg";
import IOTAcoin from "@/assets/Images/IOTAcoin.svg";
import bitcoinImg from "@/assets/Images/bitcoin.svg";
import ethereumcoin from "@/assets/Images/ETHcoin.svg";
import solona from "@/assets/Images/SOLCoin.svg";
import icon1 from "@/assets/Images/icon1.svg";
import icon3 from "@/assets/Images/icon3.svg";
import icon4 from "@/assets/Images/icon4.svg";
import catholdingcoin from "@/assets/Images/catholdingcoin.svg";
import ghost from "@/assets/Images/ghost.svg";
export const transactionsData = {
  iota: [
    {
      type: "Withdrawal - IOTA",
      amount: "100",
      date: "Mar 24, 2022, 12:12 AM",
      arrow: "arrow",
      transactionInfo: {
        status: "Confirmed",
        date: "December 22, 2021, 10:53 PM",
        conversionRate: "1:3.33",
        amount: "10,000 i",
      },
    },
    {
      type: "Withdrawal - USD",
      amount: "200",
      date: "Mar 24, 2022, 12:12 AM",
      arrow: "arrow",
      transactionInfo: {
        status: "Confirmed",
        date: "December 22, 2021, 10:53 PM",
        conversionRate: "1:3.33",
        amount: "1,000 sat",
      },
    },
    {
      type: "Instant Conversion - IOTA",
      amount: "100",
      date: "Mar 22, 2022, 12:12 AM",
      arrow: "downArrow",
      transactionInfo: {
        status: "Confirmed",
        date: "December 22, 2021, 10:53 PM",
        conversionRate: "1:3.33",
        amount: "1,000 gwei",
      },
    },
    {
      type: "Auto Conversion - USD",
      amount: "200",
      date: "Mar 24, 2022, 12:12 AM",
      arrow: "downArrow",
      transactionInfo: {
        status: "Confirmed",
        date: "December 22, 2021, 10:53 PM",
        conversionRate: "1:3.33",
        amount: "$0.08",
      },
    },
  ],
  bitcoin: [
    {
      type: "Auto Conversion - USD",
      amount: "0.01",
      date: "Mar 24, 2022, 12:12 AM",
      arrow: "arrow",
      transactionInfo: {
        status: "Confirmed",
        date: "December 22, 2021, 10:53 PM",
        conversionRate: "1:3.33",
        amount: "10,000 i",
      },
    },
    {
      type: "Withdrawal - USD",
      amount: "0.05",
      date: "Mar 25, 2022, 12:12 AM",
      arrow: "arrow",
      transactionInfo: {
        status: "Confirmed",
        date: "December 22, 2021, 10:53 PM",
        conversionRate: "1:3.33",
        amount: "1,000 sat",
      },
    },
    {
      type: "Instant Conversion - IOTA",
      amount: "100",
      date: "Mar 22, 2022, 12:12 AM",
      arrow: "downArrow",
      transactionInfo: {
        status: "Confirmed",
        date: "December 22, 2021, 10:53 PM",
        conversionRate: "1:3.33",
        amount: "1,000 sat",
      },
    },
    {
      type: "Withdrawal - USD",
      amount: "200",
      date: "Mar 24, 2022, 12:12 AM",
      arrow: "downArrow",
      transactionInfo: {
        status: "Confirmed",
        date: "December 22, 2021, 10:53 PM",
        conversionRate: "1:3.33",
        amount: "1,000 sat",
      },
    },
  ],
  ethereum: [
    {
      type: "Withdrawal - IOTA",
      amount: "1.2",
      date: "Mar 24, 2023, 12:12 AM",
      arrow: "arrow",
      transactionInfo: {
        status: "Confirmed",
        date: "December 22, 2021, 10:53 PM",
        conversionRate: "1:3.33",
        amount: "1,000 sat",
      },
    },
    {
      type: "Withdrawal - IOTA",
      amount: "0.8",
      date: "Mar 24, 2022, 12:12 AM",
      arrow: "arrow",
      transactionInfo: {
        status: "Confirmed",
        date: "December 22, 2021, 10:53 PM",
        conversionRate: "1:3.33",
        amount: "1,000 sat",
      },
    },
    {
      type: "Auto Conversion - USD",
      amount: "100",
      date: "Mar 22, 2022, 12:12 AM",
      arrow: "downArrow",
      transactionInfo: {
        status: "Confirmed",
        date: "December 22, 2021, 10:53 PM",
        conversionRate: "1:3.33",
        amount: "1,000 sat",
      },
    },
    { type: "IOTA", amount: "200", date: "2024-10-21", arrow: "downArrow" },
  ],
  solana: [
    {
      type: "Auto Conversion - USD",
      amount: "50",
      date: "April 14, 2022, 12:12 PM",
      arrow: "arrow",
      transactionInfo: {
        status: "Confirmed",
        date: "December 22, 2021, 10:53 PM",
        conversionRate: "1:3.33",
        amount: "1,000 sat",
      },
    },
    {
      type: "Withdrawal - USD",
      amount: "30",
      date: "April 14, 2022, 12:12 PM",
      arrow: "arrow",
      transactionInfo: {
        status: "Confirmed",
        date: "December 22, 2021, 10:53 PM",
        conversionRate: "1:3.33",
        amount: "1,000 sat",
      },
    },
    {
      type: "Auto Conversion - USD",
      amount: "100",
      date: "Mar 22, 2022, 12:12 AM",
      arrow: "downArrow",
      transactionInfo: {
        status: "Confirmed",
        date: "December 22, 2021, 10:53 PM",
        conversionRate: "1:3.33",
        amount: "1,000 sat",
      },
    },
    {
      type: "Withdrawal - USD",
      amount: "200",
      date: "2024-10-21",
      arrow: "downArrow",
      transactionInfo: {
        status: "Confirmed",
        date: "December 22, 2021, 10:53 PM",
        conversionRate: "1:3.33",
        amount: "1,000 sat",
      },
    },
  ],
  usd: [
    {
      type: "Withdrawal - IOTA",
      amount: "500",
      date: "April 14, 2022, 12:12 PM",
      arrow: "arrow",
      transactionInfo: {
        status: "Confirmed",
        date: "December 22, 2021, 10:53 PM",
        conversionRate: "1:3.33",
        amount: "1,000 sat",
      },
    },
    {
      type: "Withdrawal - USD",
      amount: "600",
      date: "April 14, 2022, 12:12 PM",
      arrow: "arrow",
      transactionInfo: {
        status: "Confirmed",
        date: "December 22, 2021, 10:53 PM",
        conversionRate: "1:3.33",
        amount: "1,000 sat",
      },
    },

    {
      type: "Instant Conversion - IOTA",
      amount: "100",
      date: "Mar 22, 2022, 12:12 AM",
      arrow: "downArrow",
      transactionInfo: {
        status: "Confirmed",
        date: "December 22, 2021, 10:53 PM",
        conversionRate: "1:3.33",
        amount: "1,000 sat",
      },
    },
    {
      type: "Auto Conversion - USD",
      amount: "200",
      date: "April 14, 2022, 12:12 PM",
      arrow: "downArrow",
      transactionInfo: {
        status: "Confirmed",
        date: "December 22, 2021, 10:53 PM",
        conversionRate: "1:3.33",
        amount: "1,000 sat",
      },
    },
  ],
};

export const currencyButtons = [
  {
    id: 0,
    imageSrc: Iiota,
    altText: "iota-currency",
    width: "159px",
    height: "38px",
    whiteImageSrc: iota,
    text: "IOTA",
    dataId: "iota",
    balance: {
      winr: "12,150",
      convertedAmount: "40,550 i",
      min_threshold: "1,000,000 i",
      speed: "Instant",
      fee: "Free",
    },
    withdrawInfo: {
      heading: "How to withdraw IOTA",
      info: [
        {
          text: "Download an IOTA compatible crypto wallet",
          icon: icon1,
        },
        {
          text: "We suggest TanglePay, a mobile IOTA wallet",
          icon: catholdingcoin,
        },
        {
          text: "Generate and copy your wallet’s receive address",
          icon: icon3,
        },
        {
          text: "Paste it where it says “receive address IOTA”",
          icon: icon4,
        },
      ],
      currencyCoin: IOTAcoin,
    },
    transactionInfo: {
      status: "Confirmed",
      date: "December 22, 2021, 10:53 PM",
      messageID:
        "iota1qxttgnlnx7kezy8fv6kxhw3zns8wm08shmbdsrw4v5ztzrtt64yn5k07dz0",
      recievingAddress:
        "iota1qxttgnlnx7kezy8fv6kxhw3zns8wm08shmbdsrw4v5ztzrtt64yn5k07dz0",
      amount: "10,000 i",
    },
  },
  {
    id: 1,
    imageSrc: bitcoin,
    altText: "bitcoin-currency",
    width: "134px",
    height: "28px",
    whiteImageSrc: Ibitcoin,
    text: "BTC",
    dataId: "bitcoin",
    balance: {
      winr: "12,150",
      convertedAmount: "1,000 sat",
      min_threshold: "1,000,000 i",
      speed: "Instant",
      fee: "Free",
    },
    withdrawInfo: {
      heading: "How to withdraw BTC",
      info: [
        {
          text: "Download an IOTA compatible crypto wallet",
          icon: icon1,
        },
        {
          text: "We suggest TanglePay, a mobile IOTA wallet",
          icon: ghost,
        },
        {
          text: "Generate and copy your wallet’s receive address",
          icon: icon3,
        },
        {
          text: "Paste it where it says “receive address IOTA”",
          icon: icon4,
        },
      ],
      currencyCoin: bitcoinImg,
    },
    transactionInfo: {
      status: "Confirmed",
      date: "December 22, 2021, 10:53 PM",
      messageID:
        "iota1qxttgnlnx7kezy8fv6kxhw3zns8wm08shmbdsrw4v5ztzrtt64yn5k07dz0",
      recievingAddress:
        "iota1qxttgnlnx7kezy8fv6kxhw3zns8wm08shmbdsrw4v5ztzrtt64yn5k07dz0",
      amount: "1,000 sat",
    },
  },
  {
    id: 2,
    imageSrc: ethereum,
    altText: "ethereum currency",
    width: "146px",
    height: "37px",
    whiteImageSrc: Iethereum,
    text: "ETH",
    dataId: "ethereum",
    balance: {
      winr: "12,150",
      convertedAmount: "1,000 gwei",
      min_threshold: "1,000,000 i",
      speed: "Instant",
      fee: "Free",
    },
    withdrawInfo: {
      heading: "How to withdraw ETH",
      info: [
        {
          text: "Download an IOTA compatible crypto wallet",
          icon: icon1,
        },
        {
          text: "We suggest TanglePay, a mobile IOTA wallet",
          icon: ghost,
        },
        {
          text: "Generate and copy your wallet’s receive address",
          icon: icon3,
        },
        {
          text: "Paste it where it says “receive address IOTA”",
          icon: icon4,
        },
      ],
      currencyCoin: ethereumcoin,
    },
    transactionInfo: {
      status: "Confirmed",
      date: "December 22, 2021, 10:53 PM",
      messageID:
        "iota1qxttgnlnx7kezy8fv6kxhw3zns8wm08shmbdsrw4v5ztzrtt64yn5k07dz0",
      recievingAddress:
        "iota1qxttgnlnx7kezy8fv6kxhw3zns8wm08shmbdsrw4v5ztzrtt64yn5k07dz0",
      amount: "1,000 gwei",
    },
  },
  {
    id: 3,
    imageSrc: solana,
    altText: "solana currency",
    width: "166px",
    height: "41px",
    whiteImageSrc: Isolana,
    text: "SOL",
    dataId: "solana",
    balance: {
      winr: "12,150",
      convertedAmount: "1,000 lamport",
      min_threshold: "1,000,000 i",
      speed: "Instant",
      fee: "Free",
    },
    withdrawInfo: {
      heading: "How to withdraw SOL",
      info: [
        {
          text: "Download an IOTA compatible crypto wallet",
          icon: icon1,
        },
        {
          text: "We suggest TanglePay, a mobile IOTA wallet",
          icon: ghost,
        },
        {
          text: "Generate and copy your wallet’s receive address",
          icon: icon3,
        },
        {
          text: "Paste it where it says “receive address IOTA”",
          icon: icon4,
        },
      ],
      currencyCoin: solona,
    },
    transactionInfo: {
      status: "Confirmed",
      date: "December 22, 2021, 10:53 PM",
      messageID:
        "iota1qxttgnlnx7kezy8fv6kxhw3zns8wm08shmbdsrw4v5ztzrtt64yn5k07dz0",
      recievingAddress:
        "iota1qxttgnlnx7kezy8fv6kxhw3zns8wm08shmbdsrw4v5ztzrtt64yn5k07dz0",
      amount: "1,000 lamport",
    },
  },
  {
    id: 4,
    imageSrc: USD,
    altText: "USD currency",
    width: "134px",
    height: "49px",
    whiteImageSrc: IUSD,
    text: "USD",
    dataId: "usd",
    balance: {
      winr: "12,150",
      convertedAmount: "$10.00",
      min_threshold: "1,000,000 i",
      speed: "Instant",
      fee: "Free",
    },
    withdrawInfo: {
      heading: "How to withdraw SOL",
      info: [
        {
          text: "Download an IOTA compatible crypto wallet",
          icon: icon1,
        },
        {
          text: "We suggest TanglePay, a mobile IOTA wallet",
          icon: ghost,
        },
        {
          text: "Generate and copy your wallet’s receive address",
          icon: icon3,
        },
        {
          text: "Paste it where it says “receive address IOTA”",
          icon: icon4,
        },
      ],
      currencyCoin: IOTAcoin,
    },
    transactionInfo: {
      status: "Confirmed",
      date: "December 22, 2021, 10:53 PM",
      recievingAddress: "email@email.com",
      amount: "1,000 lamport",
    },
  },
];
