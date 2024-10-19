import React from "react";
import Image from "next/image";
import { coinTabs } from "@/data/balance";
function BalanceOverview() {
  return (
    <div className=" xxl-max-screen">
      {coinTabs?.map((item, index) => {
        return (
          <div key={index}>
            <h1 className=" text-[#FAFAFB] text-small-heading">
              {" "}
              {item.title}
            </h1>

            <Image src={item.icon} alt="icon" width={50} height={50} />
          </div>
        );
      })}
    </div>
  );
}

export default BalanceOverview;
