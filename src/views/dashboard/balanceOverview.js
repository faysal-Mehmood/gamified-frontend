"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import { currencyButtons, transactionsData } from "@/data/balance"; // Import transactions data
import logo from "..//../app/assets/Images/login-logo.svg";
import refresh from "../../app/assets/Images/refresh.png";
import arrow from "../../app/assets/Images/arrow.svg";
import downArrow from "../../app/assets/Images/down-arrow.svg";

function BalanceOverview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transactions, setTransactions] = useState(transactionsData.iota);

  return (
    <div className="flex flex-col items-center justify-center xxl-max-screen py-10 px-[99px]">
      {/* Balance Title */}
      <div>
        <h1 className="font-Roboto text-brand-white text-center  text-[15.63px] md:text-[28px] leading-5 md:leading-8  font-bold uppercase">
          Balance
        </h1>
        <div className="flex justify-center items-center gap-4">
          <Image
            src={logo}
            alt="logoImage"
            className="w-[29px] md:w-[73px] h-[25px] md:h-[65px]"
          />
          <h1 className="xxl:text-[85.53px] lg3:text-[70px] md:text-[55px] smx:text-[33.85px]  text-brand-white font-black font-Roboto">
            12,150
          </h1>
        </div>
        <p className="text-brand-white text-center text-[13px] md:text-[24px]  leading-7 font-black font-Roboto smx:text-[13px]">
          In 10 hours WINR automatically converts into:
        </p>
      </div>

      {/* Currency Selection Buttons */}
      <div className="w-full flex flex-wrap items-center  justify-between">
        {currencyButtons?.map((item, index) => {
          return (
            <div key={index}>
              <div
                className={`w-full items-center justify-center px-10 py-12 hidden sm:flex
                ${
                  activeIndex === item?.id
                    ? "bg-balance-button-gradient shadow-custom-shadow z-10"
                    : "bg-custom-blue opacity-80"
                }
                border-2  border-custom-border   mx-0 my-6 rounded-[10px]
                 
              `}
                onClick={() => {
                  setActiveIndex(item?.id);
                  setTransactions(transactionsData[item?.dataId]);
                }}
              >
                <Image
                  src={
                    activeIndex === index ? item.whiteImageSrc : item.imageSrc
                  }
                />
              </div>
              <button
                key={index}
                className={`flex  sm:hidden items-center justify-center    border-2 border-custom-border   mx-0 my-6 rounded-md
                   ${
                     activeIndex === item?.id
                       ? "bg-balance-button-gradient shadow-custom-shadow z-10 px-5 py-7"
                       : "bg-custom-blue opacity-80 p-1 py-7"
                   }`}
                onClick={() => handleCurrencyClick(index)}
              >
                {activeIndex === item?.id ? (
                  <Image
                    src={item.whiteImageSrc}
                    alt={item.altText}
                    className="smx:w-[120px] smx:h-[50px] sm:w-auto sm:h-auto"
                  />
                ) : (
                  <span className="text-brand-white font-bold">
                    {item.text}{" "}
                  </span>
                )}
              </button>
            </div>
          );
        })}
      </div>

      {/* Convert and Withdraw Buttons */}
      <div className="w-full flex items-center justify-center md:gap-6 mb-6">
        <button className="bg-button-gradient w-1/2   py-[21px]   rounded-lg lg:rounded-2xl text-base xxl:text-[26px]  text-brand-white font-black font-Roboto">
          Convert Now
        </button>
        <button className=" w-1/2 bg-button-gradient  py-[21px]   rounded-lg lg:rounded-2xl text-base xxl:text-[26px]  text-brand-white font-black font-Roboto ">
          Withdraw
        </button>
      </div>

      {/* Latest Transactions Section */}
      <div
        className="w-full bg-balance-sheet-background p-[22px] md:p-7 rounded-[20px]"
        style={{
          scrollbarWidth: "thin", // For Firefox
          scrollbarColor: "rgba(50, 70, 100, 1)  rgba(27, 39, 64, 1)", // For Firefox
        }}
      >
        <div className="flex justify-between items-center pb-5">
          <p className="font-Roboto text-brand-white  text-base leading-5  md:text-[26px] font-black">
            Latest Transactions
          </p>
          <Image
            src={refresh}
            alt="refresh"
            className="w-4 h-4 md:w-5 md:h-5"
          />
        </div>

        {/* Mapping Over Transactions */}
        <div className="w-full flex items-center justify-center flex-col gap-3 md:gap-5">
          {transactions.map((transaction, index) => (
            <div
              key={index}
              className="w-full bg-balance-items-bg flex justify-between items-center  text-center  rounded-xl p-4 py-5"
            >
              <div className="flex items-center gap-3">
                <button className="xxl:w-[39px] xxl:h-[38px] md:w-[35px] md:h-[34px] smx:w-[32px] smx:h-[31px] bg-blue-950 flex items-center justify-center   rounded-2xl">
                  <Image
                    src={transaction.arrow === "arrow" ? arrow : downArrow}
                    alt="arrowImage"
                  />
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
  );
}

export default BalanceOverview;
