import React from "react";
import Icon from "@/utils/icons";
const Withdraw = ({ activeCurrency, setOpenWithdrawInfo }) => {
  return (
    <div className="flex mb-10 gap-[30px]">
      <div className="bg-brand-darkish px-7 pb-8 pt-10  rounded-[20px] min-w-[359px] ">
        <h2 className="font-Roboto text-brand-white-1 text-small-text md:text-[80px] font-black leading-[82px]">
          {activeCurrency?.balance?.convertedAmount}
        </h2>
        <div className="h-[2px] bg-[#398AF2] mt-6 mb-7" />
        <div className="flex flex-col">
          <p className="font-Roboto text-caption leading-6 text-brand-white-1 gap-1 font-medium">
            Min. to withdraw:{" "}
            <span className="text-[#398AF2] float-right">
              {activeCurrency?.balance?.min_threshold}
            </span>
          </p>
          <p className="font-Roboto text-caption leading-6 text-brand-white-1 gap-1 font-medium">
            Speed to withdraw:{" "}
            <span className="text-[#398AF2] float-right">
              {" "}
              {activeCurrency?.balance?.speed}
            </span>
          </p>
          <p className="font-Roboto text-caption leading-6 text-brand-white-1 gap-1 font-medium">
            Fee to withdraww:{" "}
            <span className="text-[#398AF2] float-right">
              {activeCurrency?.balance?.fee}
            </span>
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-8">
        <div className="min-h-[159px] bg-brand-darkish">
          <Icon
            name="info-icon"
            mainClassName="cursor-pointer"
            onClick={() => setOpenWithdrawInfo(true)}
          />
        </div>
        <div className="bg-brand-darkish p-7"></div>
      </div>
    </div>
  );
};

export default Withdraw;
