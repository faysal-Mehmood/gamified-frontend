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
import purpleDownArrow from "@/assets/Images/purple-down-arrow.svg";
import { WithdraInfoModel } from "./convertModel.js/withdraw/withdraInfo.js";
import { WithdrawTransactionModel } from "./convertModel.js/withdraw/withdrawTransactionModel.js";

function BalanceOverview() {
  const [activeCurrency, setActiveCurrency] = useState(currencyButtons?.[0]);
  const [transactions, setTransactions] = useState(transactionsData.iota);
  const [openWithdrawInfo, setOpenWithdrawInfo] = useState(false);
  const [isConverTransaction, setisConverTransaction] = useState("");
  const [isOpenModel, setisOpenModel] = useState("");

  const handleCurrencyClick = (item) => {
    setActiveCurrency(item); // Update active currency
    setTransactions(transactionsData[item.dataId]); // Update transactions based on selected currency
  };
  return (
    <div className="relative flex flex-col items-center justify-center xxl-max-screen pb-10 pt-20 px-5 md:px-[40px] xl:px-[99px]">
      {/* Balance Title */}
      <div>
        <h1 className="font-Roboto text-brand-white-1 text-center  text-[15.63px] md:text-[28px] leading-5 md:leading-8  font-bold uppercase">
          Balance
        </h1>
        <div className="flex justify-center items-center gap-4 mb-0 md:mb-5">
          <Image
            src={logo}
            alt="logoImage"
            className="w-[29px] md:w-[73px] h-[25px] md:h-[65px] pt-1"
          />
          <h1 className="font-Roboto text-[34px] md:text-[85px] text-brand-white-1 font-black leading-[60px] md:leading-[100px]">
            12,150
          </h1>
        </div>
        <p className="text-brand-white-1 text-center text-[13px] md:text-[24px]  leading-7 font-black font-Roboto smx:text-[13px]">
          In 10 hours WINR automatically converts into:
        </p>
      </div>

      {/* Currency Selection Buttons */}
      <div className="w-full flex sm:flex-wrap items-center sm:justify-normal justify-center  sm:gap-[23px] sm:my-6">
        {currencyButtons?.map((item, index) => (
          <div key={index}>
            {/* Large Screen View */}
            <div
              className={`relative min-w-[230px] min-h-[140px] items-center justify-center cursor-pointer hidden sm:flex rounded-[10px] border-2 border-custom-border
        ${
          activeCurrency?.id === item?.id
            ? "bg-balance-button-gradient shadow-custom-shadow z-10"
            : "bg-custom-blue opacity-80 "
        }
      `}
              onClick={() => {
                setActiveCurrency(item);
                setTransactions(transactionsData[item?.dataId]);
              }}
            >
              <Image
                src={
                  activeCurrency?.id === item?.id
                    ? item.whiteImageSrc
                    : item.imageSrc
                }
                alt={item.altText}
                width={item.width}
                height={item.height}
              />
              {activeCurrency?.id !== item?.id && (
                <p className="absolute text-xs font-semibold leading-3 text-brand-light-grey bottom-3 right-3">
                  {item?.balance?.convertedAmount}
                </p>
              )}
            </div>

            {/* Small Screen View (for smx devices) */}
            <div
              className={`flex sm:hidden items-center justify-center border-t-2 border-b-2 border-r-2 border-custom-border  mx-0 my-6 rounded-md sm:w-auto sm:h-auto  
        ${
          activeCurrency?.id === item?.id
            ? "bg-balance-button-gradient shadow-custom-shadow z-10 sm:px-7 sm:py-4 smx:py-2 xs:px-9 smx:px-10 px-3 py-3 "
            : "bg-custom-blue opacity-80 sm:p-1 sm:py-7 smx:py-6 xs:px-6 xs:py-6  smx:px-1 py-6 text-[12.5px]"
        }
      `}
              onClick={() => {
                setActiveCurrency(item);
                setTransactions(transactionsData[item?.dataId]);
              }}
            >
              {activeCurrency?.id === item?.id ? (
                <Image
                  src={item.whiteImageSrc}
                  alt={item.altText}
                  className="smx:w-[120px] smx:h-[50px] sm:w-auto sm:h-auto"
                />
              ) : (
                <span className="text-brand-white font-bold">{item.text}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Convert and Withdraw Buttons */}
      <div className="w-full  flex items-center gap-2 md:gap-8 mb-6">
        <button
          onClick={() => setisOpenModel("convert")}
          className="bg-button-gradient w-1/2 py-[14px]  md:py-[21px]   rounded-lg lg:rounded-2xl text-base md:text-small-heading  text-brand-white-1 font-black font-Roboto"
        >
          Convert Now
        </button>
        <button
          onClick={() => setisOpenModel("withdraw")}
          className=" w-1/2 bg-button-gradient  py-[14px]  md:py-[21px]   rounded-lg lg:rounded-2xl text-base md:text-small-heading  text-brand-white-1 font-black font-Roboto "
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
            className="w-4 h-4 md:w-5 md:h-5 cursor-pointer"
          />
        </div>

        {/* Mapping Over Transactions */}
        <div className="w-full flex items-center justify-start flex-col  h-[416px] overflow-x-clip overflow-scroll pr-4">
          {transactions.map((transaction, index) => (
            <div
              key={index}
              className="w-full bg-balance-items-bg flex justify-between items-center rounded-xl mb-3 md:mb-5 p-4 py-5"
            >
              <div className="flex items-center gap-4 md:gap-5">
                <Image
                  src={
                    index === 2
                      ? purpleDownArrow
                      : transaction.arrow === "arrow"
                      ? arrow
                      : downArrow
                  }
                  alt="arrowImage"
                  className="cursor-pointer"
                  onClick={() => {
                    setisConverTransaction(transaction?.transaction_type);
                  }}
                />

                <div className="text-left">
                  <h4 className="text-brand-white-1 font-bold  text-[13px] md:text-base leading-5 mb-1 font-Roboto">
                    {transaction.type}
                  </h4>
                  <p className="text-brand-blue-1 font-medium  text-[10px] md:text-[12px] leading-4  font-Roboto">
                    {transaction.date}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[13px] md:text-[23px] leading-6  font-bold text-brand-white-1 font-Roboto">
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
          setisConverTransaction={setisConverTransaction}
        />
      )}
      {openWithdrawInfo && (
        <WithdraInfoModel
          setOpenWithdrawInfo={setOpenWithdrawInfo}
          openWithdrawInfo={openWithdrawInfo}
          activeCurrency={activeCurrency}
        />
      )}
      {(isConverTransaction === "convert" || isOpenModel === "withdraw") && (
        <WithdrawTransactionModel
          setisConverTransaction={setisConverTransaction}
          isConverTransaction={isConverTransaction}
          activeCurrency={activeCurrency}
        />
      )}
    </div>
  );
}

export default BalanceOverview;
