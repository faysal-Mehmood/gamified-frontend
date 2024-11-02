import React from "react";
import Icon from "@/utils/icons";
const Withdraw = ({ activeCurrency, setOpenWithdrawInfo }) => {
  const getFontSizes = (activeTab) => {
    let perc = "70px";
    switch (activeTab) {
      case "ioto":
        perc = "70px";
        break;
      case "bitcoin":
        perc = "70px";
        break;
      case "ethereum":
        perc = "56px";
        break;
      case "solana":
        perc = "45px";
        break;
      case "usd":
        perc = "70px";
        break;
    }
    return perc;
  };

  return (
    <div className="flex flex-col md:flex-row mb-10 md:gap-[30px] gap-[12px]">
      <div className="w-full flex items-center justify-between flex-col xs:flex-row  md:inline-block gap-5 bg-brand-darkish px-3 md:px-7 pb-4 md:pb-8 pt-4 md:pt-10   md:rounded-[20px] rounded-[9px] md:min-w-[410px] ">
        <h2
          className={`font-Roboto text-brand-white-1 md:text-small-text text-center md:text-left md:text-[${getFontSizes(
            activeCurrency?.["dataId"]
          )}] font-black md:leading-[82px] leading-7`}
        >
          {activeCurrency?.balance?.convertedAmount}
        </h2>
        <div className="h-[50px] md:h-[2px] w-[2px] md:w-auto bg-brand-blue-dark-1 mt-2 md:mt-6  mb-2 md:mb-7 hidden xs:block " />
        <div className="flex flex-col ">
          <p className="font-Roboto text:[14px] md:text-caption leading-6 text-brand-white-1 gap-1 font-medium">
            Min. to withdraw:{" "}
            <span className="text-brand-blue-dark-1 float-right">
              {activeCurrency?.balance?.min_threshold}
            </span>
          </p>
          <p className="font-Roboto text:[14px] md:text-caption leading-6 text-brand-white-1 gap-1 font-medium">
            Speed to withdraw:{" "}
            <span className="text-brand-blue-dark-1 float-right">
              {" "}
              {activeCurrency?.balance?.speed}
            </span>
          </p>
          <p className="font-Roboto text:[14px] md:text-caption leading-6 text-brand-white-1 gap-1 font-medium">
            Fee to withdraww:{" "}
            <span className="text-brand-blue-dark-1 float-right">
              {activeCurrency?.balance?.fee}
            </span>
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col md:gap-8 gap-3 ">
        <div className=" min-h-[110px] md:min-h-[159px] bg-brand-darkish md:p-6 p-2 border-2 border-brand-light-grey md:rounded-[20px] rounded-[9px]">
          <input
            placeholder="Recieve address IOTA..."
            className="font-Roboto bg-dark-blue text-[14px] md:text-paragraph font-black leading-[30.47px] text-brand-light-grey focus:border-none focus:outline-none placeholder:text-brand-light-grey w-full "
          />

          {activeCurrency?.["dataId"] !== "usd" && (
            <div className="flex items-end justify-end">
              <Icon
                name="info-icon"
                mainClassName="cursor-pointer"
                onClick={() => setOpenWithdrawInfo(true)}
                className="w-[30px]  h-[30px] md:w-[50px] md:h-[50px]"
              />
            </div>
          )}
        </div>
        <div className="bg-brand-darkish md:p-7 p-3 flex items-center justify-between border-2 border-brand-light-grey md:rounded-[20px] rounded-[9px]">
          <input
            placeholder="Amount"
            className=" font-Roboto font-black  bg-dark-blue text-[14px] md:text-paragraph leading-[30.47px] text-brand-light-grey focus:border-none focus:outline-none w-3/4 placeholder:text-brand-light-grey"
          />
          <div>
            <p className="text-[14px] md:text-paragraph font-Roboto font-dark font-black text-brand-white-1 cursor-pointer">
              MAX
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
