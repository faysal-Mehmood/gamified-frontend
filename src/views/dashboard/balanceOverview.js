"use client";

import React from "react";
import Image from "next/image";
import { transactionsData } from "@/data/balance"; // Import transactions data
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

import { useState, useEffect } from "react";

function BalanceOverview() {
  const [balance, setBalance] = useState(12150); // State to hold the balance
  const [activeIndex, setActiveIndex] = useState(0); // State to track the active currency button
  const [transactions, setTransactions] = useState(transactionsData.iota); // Set initial transactions
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 640);
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Array of currency buttons with images
  const currencyButtons = [
    {
      imageSrc: Iiota,
      altText: "iota-currency",
      whiteImageSrc: iota,
      text: "IOTA",
    },
    {
      imageSrc: bitcoin,
      altText: "bitcoin-currency",
      whiteImageSrc: Ibitcoin,
      text: "BTC",
    },
    {
      imageSrc: ethereum,
      altText: "ethereum currency",
      whiteImageSrc: Iethereum,
      text: "ETH",
    },
    {
      imageSrc: solana,
      altText: "solana currency",
      whiteImageSrc: Isolana,
      text: "SOL",
    },
    {
      imageSrc: USD,
      altText: "USD currency",
      whiteImageSrc: IUSD,
      text: "USD",
    },
  ];

  const handleCurrencyClick = (index) => {
    setActiveIndex(index); // Set active index based on the clicked button
    switch (index) {
      case 0:
        setTransactions(transactionsData.iota);
        break;
      case 1:
        setTransactions(transactionsData.bitcoin);
        break;
      case 2:
        setTransactions(transactionsData.ethereum);
        break;
      case 3:
        setTransactions(transactionsData.solana);
        break;
      case 4:
        setTransactions(transactionsData.usd);
        break;
      default:
        setTransactions([]);
    }
  };

  return (
    <div className=" flex items-center justify-center py-10 bg-balance-background">
      <div className="felx flex-col items-center justify-center xxl-max-screen">
        {/* Balance Title */}
        <div>
          <h1 className="text-brand-white xxl:text-[28px] lg3:text-[25px] md:text-[20px] smx:text-[15.63px] lg3:leading-10 text-center font-bold font-Roboto">
            Balance
          </h1>
          <div className="flex justify-center items-center gap-4">
            <Image
              src={logo}
              alt="logoImage"
              className="lg3:w-[73px] lg3:h-[63px] md:w-[70px] md:h-[60px] smx:w-[29px] smx:h-[25px]"
            />
            <h1 className="xxl:text-[85.53px] lg3:text-[70px] md:text-[55px] smx:text-[33.85px]  text-brand-white font-black font-Roboto">
              {balance}
            </h1>
          </div>
          <p className="text-brand-white text-center xxl:text-[24px] md:text-[16px] leading-7 font-black font-Roboto smx:text-[13px]">
            In 10 hours WINR automatically converts into:
          </p>
        </div>

        {/* Currency Selection Buttons */}

        <div className="flex items-center smx:justify-center sm:justify-between">
          {currencyButtons.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={index}
                className={`xxl:w-[230px] xxl:h-[140px] lg3:w-[180px] lg3:h-[100px] md:w-[125px] md:h-[80px] sm:w-[90px] sm:h-[70px]  flex items-center justify-center 
          ${
            isActive
              ? "bg-balance-button-gradient shadow-custom-shadow z-10 smx:w-[180px] "
              : "bg-custom-blue opacity-80 w-[37px]"
          }
          border-t-2 border-b-2 border-r-2 border-custom-border sm:border-2 p-4 mx-0 my-6 rounded-md
          sm:${
            isActive ? "w-[0px] h-[80px]" : "w-[80px] h-[80px]"
          } sm:h-[80px] // Small devices specific size logic
        `}
                onClick={() => handleCurrencyClick(index)}
              >
                {isWideScreen || isActive ? (
                  <Image
                    src={
                      activeIndex === index ? item.whiteImageSrc : item.imageSrc
                    }
                    alt={item.altText}
                    className="smx:w-[80px] smx:h-[50px] md:w-auto md:h-auto" // Adjust to your needs
                  />
                ) : (
                  <span className="text-brand-white font-bold">
                    {item.text}{" "}
                    {/* Display currency text for inactive buttons */}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Convert and Withdraw Buttons */}
        <div className="flex items-center justify-center smx:gap-1 md:gap-5">
          <button className="bg-button-gradient xxl:w-[605px] xxl:h-[73.27px] lg3:w-[480px] lg3:h-[60px] md:w-[340px] md:h-[55px] sm:w-[220px] sm:h-[55px] smx:w-[180px] smx:h-[50px] smx:rounded-sm lg:rounded-2xl xxl:text-[26px] xl:text-[20px] text-brand-white font-black font-Roboto">
            Convert Now
          </button>
          <button className="bg-button-gradient xxl:w-[605px] xxl:h-[73.27px]  lg3:w-[480px] lg3:h-[60px] md:w-[340px] md:h-[55px]  sm:w-[220px] sm:h-[55px] smx:rounded-sm lg:rounded-2xl xxl:text-[26px] xl:text-[20 px] text-brand-white font-black font-Roboto smx:w-[180px] smx:h-[50px]">
            Withdraw
          </button>
        </div>

        {/* Latest Transactions Section */}
        <div className="bg-balance-sheet-background my-6 rounded-3xl p-6 xxl:w-[1242px] lg3:w-[980px]">
          <div className="flex justify-between items-center p-6">
            <p className="text-brand-white xxl:text-[26px] xl:text-[22px] font-black">
              Latest Transactions
            </p>
            <Image src={refresh} alt="refresh" />
          </div>

          {/* Mapping Over Transactions */}
          <div className="w-full flex items-center justify-center flex-col gap-3">
            {transactions.map((transaction, index) => (
              <div
                key={index}
                className="bg-balance-items-bg flex justify-between items-center xxl:w-[1182px] lg3:w-[900px] md:w-[650px] smx:w-[350px] text-center xxl:p-5 lg3:p-3  md:py-2 md:px-2 smx:px-2 smx:py-2 smx:rounded-sm  lg:rounded-3xl"
              >
                <div className="flex items-center gap-3">
                  <button className="xxl:w-[39px] xxl:h-[38px] md:w-[35px] md:h-[34px] bg-blue-950 flex items-center justify-center   rounded-2xl">
                    <Image src={arrow} alt="arrowImage" />
                  </button>
                  <div className="text-left">
                    <h4 className="text-brand-white font-bold xxl:text-[16px] md:text-[14px] smx:text-[13.2px] leading-2 xl:mb-1 font-Roboto">
                      {transaction.type} - {transaction.amount}
                    </h4>
                    <p className="text-brand-white font-medium xxl:text-[12px] smx:text-[10px] font-Roboto">
                      {transaction.date}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="xxl:text-[23px] xl:text-[20px] font-bold text-brand-white font-Roboto">
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
