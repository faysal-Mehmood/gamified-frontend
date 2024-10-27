"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import { ConvertModel } from "./convertModel.js";
import { currencyButtons, transactionsData } from "@/data/balance"; // Import transactions data
import logo from "@/assets/Images/login-logo.svg";
import refresh from "@/assets/Images/refresh.png";
import arrow from "@/assets/Images/arrow.svg";
import downArrow from "@/assets/Images/down-arrow.svg";
import { WithdraInfoModel } from "./convertModel.js/withdraw/withdraInfo.js";

function BalanceOverview() {
  const [activeCurrency, setActiveCurrency] = useState(currencyButtons?.[0]);
  const [transactions, setTransactions] = useState(transactionsData.iota);
  const [openWithdrawInfo, setOpenWithdrawInfo] = useState(false);
  const [isOpenModel, setisOpenModel] = useState("");

  return (
    <div className="relative flex flex-col items-center justify-center xxl-max-screen py-10 px-5 md:px-[99px]">
      {/* Balance Title */}
      <div>
        <h1 className="font-Roboto text-brand-white-1 text-center  text-[15.63px] md:text-[28px] leading-5 md:leading-8  font-bold uppercase">
          Balance
        </h1>
        <div className="flex justify-center items-center gap-4 mb-5">
          <Image
            src={logo}
            alt="logoImage"
            className="w-[29px] md:w-[73px] h-[25px] md:h-[65px]"
          />
          <h1 className="font-Roboto text-[34px] md:text-[85px] text-brand-white-1 font-black leading-[100px]">
            12,150
          </h1>
        </div>
        <p className="text-brand-white text-center text-[13px] md:text-[24px]  leading-7 font-black font-Roboto smx:text-[13px]">
          In 10 hours WINR automatically converts into:
        </p>
      </div>

      {/* Currency Selection Buttons */}
      <div className="w-full flex flex-wrap items-center gap-[23px] my-6">
        {currencyButtons?.map((item, index) => {
          return (
            <div key={index}>
              <div
                className={`min-w-[230px] min-h-[140px] items-center justify-center cursor-pointer  hidden sm:flex rounded-[10px]
                ${
                  activeCurrency?.id === item?.id
                    ? "bg-balance-button-gradient shadow-custom-shadow z-10"
                    : "bg-custom-blue opacity-80 border-2  border-custom-border"
                }
              `}
                onClick={() => {
                  setActiveCurrency(item);
                  setTransactions(transactionsData[item?.dataId]);
                }}
              >
                <Image
                  src={
                    activeCurrency?.id === index
                      ? item.whiteImageSrc
                      : item.imageSrc
                  }
                  alt={item.altText}
                  width={item.width}
                  height={item.height}
                />
              </div>
              <div
                key={index}
                className={`flex  sm:hidden items-center justify-center    border-2 border-custom-border   mx-0 my-6 rounded-md
                   ${
                     activeCurrency?.id === item?.id
                       ? "bg-balance-button-gradient shadow-custom-shadow z-10 px-5 py-7"
                       : "bg-custom-blue opacity-80 p-1 py-7"
                   }`}
                onClick={() => handleCurrencyClick(index)}
              >
                {activeCurrency?.id === item?.id ? (
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
              </div>
            </div>
          );
        })}
      </div>

      {/* Convert and Withdraw Buttons */}
      <div className="w-full  flex items-center gap-2 md:gap-8 mb-6">
        <button
          onClick={() => setisOpenModel("convert")}
          className="bg-button-gradient w-1/2   py-[21px]   rounded-lg lg:rounded-2xl text-base md:text-small-heading  text-brand-white-1 font-black font-Roboto"
        >
          Convert Now
        </button>
        <button
          onClick={() => setisOpenModel("withdraw")}
          className=" w-1/2 bg-button-gradient  py-[21px]   rounded-lg lg:rounded-2xl text-base md:text-small-heading  text-brand-white-1 font-black font-Roboto "
        >
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
          <p className="font-Roboto text-brand-white-1  text-base leading-5  md:text-small-heading font-black">
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
              className="w-full bg-balance-items-bg flex justify-between items-center rounded-xl p-4 py-5"
            >
              <div className="flex items-center gap-5">
                <Image
                  src={transaction.arrow === "arrow" ? arrow : downArrow}
                  alt="arrowImage"
                />

                <div className="text-left">
                  <h4 className="text-brand-white-1 font-bold  text-[14px] md:text-base leading-5 mb-1 font-Roboto">
                    {transaction.type} - {transaction.amount}
                  </h4>
                  <p className="text-brand-blue-1 font-medium  text-[10px] md:text-[12px] leading-4  font-Roboto">
                    {transaction.date}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[20px] md:text-[23px] leading-6  font-bold text-brand-white-1 font-Roboto">
                  {transaction.amount}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* model */}
      {(isOpenModel === "convert" || isOpenModel === "withdraw") && (
        <ConvertModel
          setisOpenModel={setisOpenModel}
          isOpenModel={isOpenModel}
          activeCurrency={activeCurrency}
          setOpenWithdrawInfo={setOpenWithdrawInfo}
        />
      )}
      {openWithdrawInfo && (
        <WithdraInfoModel
          setOpenWithdrawInfo={setOpenWithdrawInfo}
          openWithdrawInfo={openWithdrawInfo}
          activeCurrency={activeCurrency}
        />
      )}
    </div>
  );
}

export default BalanceOverview;
