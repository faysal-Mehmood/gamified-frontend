import Icon from "@/utils/icons";
import React from "react";

const ConvertNow = ({ activeCurrency }) => {
  return (
    <div className="w-full min-h-[302px] flex flex-col justify-between items-center p-5   bg-brand-darkish rounded-[20px] mb-5 ">
      <div />
      <div className="w-full grid grid-cols-1  xmd:grid-cols-[1fr_auto_1fr]  gap-10 items-center justify-around">
        <div className="flex items-center justify-center gap-1">
          <Icon name="winr-icon" className="w-10 h-9  md:w-[50px] md:h-11" />
          <h2 className="font-Roboto font-black leading-[65px] text-[45px] md:text-[56px] text-brand-white-1">
            {activeCurrency?.balance?.winr}
          </h2>
        </div>

        <div className="bg-circle-gradient flex items-center justify-center w-[48px] h-[48px] md:w-[91px] md:h-[91px] rounded-[10px] md:rounded-[20px] mx-auto">
          <Icon
            name="arrow-right"
            className="w-[20px] h-[20px] md:w-[45px] md:h-[45px] rotate-90 md:rotate-0"
          />
        </div>

        <div className="flex items-center justify-center text-center">
          <h2 className="font-Roboto font-black leading-[65px] text-[45px] md:text-[56px] text-brand-white-1">
            {activeCurrency?.balance?.convertedAmount}
          </h2>
        </div>
      </div>

      <div className="bg-black w-[175px] h-[8px] flex items-center rounded-2xl mt-10">
        {["iota", "bitcoin", "ethereum", "solana", "usd"]?.map(
          (item, index) => (
            <div
              key={index}
              className={`${
                activeCurrency?.["dataId"] === item
                  ? "bg-brand-blue-2"
                  : "bg-black"
              } h-[8px] w-[35px]  rounded-2xl`}
            />
          )
        )}
      </div>
    </div>
  );
};

export default ConvertNow;
