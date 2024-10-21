"use client";

import React from "react";
import Image from "next/image";
import { transactions } from "@/data/balance"; // Import transactions data
import logo from "..//../app/aserts/Images/login-logo.png";
import bitcoin from "../../app/aserts/Images/Bitcoin-currency.png";
import Ibitcoin from "../../app/aserts/Images/i-bitcoin-currency.png";
import ethereum from "../../app/aserts/Images/ethereum-currency.png";
import Iethereum from "../../app/aserts/Images/i-etherieum-currency.png";
import iota from "../../app/aserts/Images/iota-currency.png";
import Iiota from "../../app/aserts/Images/i-iota-currency.png";
import solana from "../../app/aserts/Images/solana-currency.png";
import Isolana from "../../app/aserts/Images/i-solana-currency.png";
import USD from "../../app/aserts/Images/USD-currency.png";
import IUSD from "../../app/aserts/Images/i-USD-currency.png";
import refresh from "../../app/aserts/Images/refresh.png";
import arrow from "../../app/aserts/Images/arrow.png";

import { useState } from "react";

function BalanceOverview() {
  const [balance, setBalance] = useState(12150); // State to hold the balance
  const [activeIndex, setActiveIndex] = useState(0); // State to track the active currency button

  // Array of currency buttons with images
  const currencyButtons = [
    {
      imageSrc: Iiota,
      altText: "iota-currency",
      whiteImageSrc: iota,
    },
    {
      imageSrc: bitcoin,
      altText: "bitcoin-currency",
      whiteImageSrc: Ibitcoin,
    },
    {
      imageSrc: ethereum,
      altText: "ethereum currency",
      whiteImageSrc: Iethereum,
    },
    {
      imageSrc: solana,
      altText: "solana currency",
      whiteImageSrc: Isolana,
    },
    {
      imageSrc: USD,
      altText: "USD currency",
      whiteImageSrc: IUSD,
    },
  ];

  return (
    <div className=" flex items-center justify-center py-10 bg-black">
      <div className="felx flex-col items-center justify-center xxl-max-screen">
        {/* Balance Title */}
        <div>
          <h1 className="text-brand-white text-[28px] leading-8 text-center font-bold">
            Balance
          </h1>
          <div className="flex justify-center items-center gap-4">
            <Image src={logo} alt="logoImage" className="w-[73px] h-[63px]" />
            <h1 className="text-[85.53px] text-brand-white font-black">
              {balance}
            </h1>
          </div>
          <p className="text-brand-white text-center text-[24px] leading-7 font-black">
            In 10 hours WINR automatically converts into:
          </p>
        </div>

        {/* Currency Selection Buttons */}
        <div>
          {currencyButtons.map((item, index) => {
            return (
              <button
                key={index}
                className={`w-[230px] h-[140px] ${
                  activeIndex === index
                    ? "bg-balance-button-gradient shadow-custom-shadow"
                    : "bg-custom-blue"
                } border-2 border-custom-border p-10 mx-2 my-6 rounded-md `}
                onClick={() => setActiveIndex(index)} // Set active index on click
              >
                <Image
                  src={
                    activeIndex === index ? item.whiteImageSrc : item.imageSrc
                  }
                  alt={item.altText}
                  className=" "
                />
              </button>
            );
          })}
        </div>

        {/* Convert and Withdraw Buttons */}
        <div className="flex items-center justify-center gap-5">
          <button className="bg-button-gradient w-[605px] h-[73.27px] rounded-2xl text-[26px] text-brand-white font-black">
            Convert Now
          </button>
          <button className="bg-button-gradient w-[605px] h-[73.27px] rounded-2xl text-[26px] text-brand-white font-black">
            Withdraw
          </button>
        </div>

        {/* Latest Transactions Section */}
        <div className="bg-balance-sheet-background my-6 rounded-3xl p-6 w-[1242px]">
          <div className="flex justify-between items-center p-6">
            <p className="text-brand-white text-[26px] font-black">
              Latest Transactions
            </p>
            <Image src={refresh} alt="refresh" />
          </div>

          {/* Mapping Over Transactions */}
          <div className="w-full flex items-center justify-center flex-col gap-3">
            {transactions.map((transaction, index) => (
              <div
                key={index}
                className="bg-balance-items-bg flex justify-between items-center w-[1182px] text-center p-5 rounded-3xl"
              >
                <div className="flex items-center gap-3">
                  <button className="w-[39px] h-[38px] bg-blue-950 flex items-center justify-center rounded-2xl">
                    <Image src={arrow} alt="arrowImage" />
                  </button>
                  <div className="text-left">
                    <h4 className="text-brand-white font-bold text-[16px] leading-2 mb-1">
                      {transaction.type} - {transaction.amount}
                    </h4>
                    <p className="text-brand-white font-medium text-[12px]">
                      {transaction.date}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-[23px] font-bold text-brand-white">
                    {transaction.amount}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BalanceOverview;
