import Icon from "@/utils/icons";
import React from "react";

const ConvertNow = ({ activeCurrency }) => {
  const getCompletedPerc = (activeTab) => {
    let perc = "20%";
    switch (activeTab) {
      case "ioto":
        perc = "20%";
        break;
      case "bitcoin":
        perc = "40%";
        break;
      case "ethereum":
        perc = "60%";
        break;
      case "solana":
        perc = "80%";
        break;
      case "usd":
        perc = "100%";
        break;
    }
    return perc;
  };
  return (
    <div className="w-full min-h-[302px] flex flex-col justify-between items-center p-5   bg-brand-darkish rounded-[20px] mb-5">
      <div />
      <div className="w-full flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-around">
        <div className="flex items-center justify-center">
          <Icon name="winr-icon" className="w-[50px]  w- h-11" />
          <h2 className="font-Roboto font-black leading-[65px] text-[45px] md:text-[56px] text-brand-white-1">
            {activeCurrency?.balance?.winr}
          </h2>
        </div>
        <div className="bg-circle-gradient flex items-center justify-center w-[48px] h-[48px] md:w-[91px] md:h-[91px] rounded-[10px] md:rounded-[20px]">
          <Icon
            name="arrow-right"
            className="w-[20px] h-[20px] md:w-[45px] md:h-[45px]"
          />
        </div>
        <div>
          <h2 className="font-Roboto font-black  leading-[65px] text-[45px] md:text-[56px] text-brand-white-1">
            {activeCurrency?.balance?.convertedAmount}
          </h2>
        </div>
      </div>
      <div className="bg-black w-[175px] h-[8px] rounded-2xl mt-10">
        <div
          style={{ width: `${getCompletedPerc(activeCurrency?.["dataId"])}` }}
          className={`bg-brand-blue-2 h-[8px]  rounded-2xl`}
        ></div>
      </div>
    </div>
  );
};

export default ConvertNow;
