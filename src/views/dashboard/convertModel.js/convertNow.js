import Icon from "@/utils/icons";
import React from "react";

const ConvertNow = ({ activeCurrency }) => {
  return (
    <div className="w-full min-h-[302px] flex items-center justify-around bg-brand-darkish rounded-[20px] mb-5">
      <div className="flex items-center justify-center">
        <Icon name="winr-icon" />
        <h2 className="font-Roboto font-black leading-[65px] text-[45px] md:text-[56px] text-brand-white-1">
          {activeCurrency?.balance?.winr}
        </h2>
      </div>
      <div className="bg-circle-gradient flex items-center justify-center w-[91px] h-[91px] rounded-[20px]">
        <Icon name="arrow-right" />
      </div>
      <div>
        <h2 className="font-Roboto font-black leading-[65px] text-[45px] md:text-[56px] text-brand-white-1">
          {activeCurrency?.balance?.convertedAmount}
        </h2>
      </div>
    </div>
  );
};

export default ConvertNow;
