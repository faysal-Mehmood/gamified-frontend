"use client";
import React from "react";
import SlotCounter from "react-slot-counter";

const status = [
  {
    number: "1,000,000",
    name: "USD paid out",
  },
  {
    number: "10,000,000",
    name: "Downloads",
  },
  {
    number: "100,000,000",
    name: "Points Earned",
  },
];

const PerformanceStats = () => {
  return (
    <section className="text-white bg-main-gradient xmd:pt-8 xmd:pb-[31px]">
      <div className="xxl-max-screen xl:px-[100px]  lg:px-[50px] xmd:px-16 px-0 grid-cols-1 grid xmd:grid-cols-3 gap-0 xmd:gap-8">
        {status?.map((item, i) => (
          <>
            <div
              key={i}
              className={`${
                i === 0 || i === 2 ? "w-full xmd:w-max" : "w-full"
              } flex flex-col ${
                i === 0
                  ? "justify-center xmd:justify-start"
                  : i === 1
                  ? "justify-center"
                  : " justify-center xmd:justify-end"
              } items-center  ${i === 2 && "ml-[inherit]"}  ${
                i === 0
                  ? "pt-5 pb-3 xmd:p-0 "
                  : i === 1
                  ? "py-3 xmd:p-0"
                  : i === 2
                  ? "pb-5 pt-3 xmd:p-0"
                  : "p-0"
              } `}
            >
              <h3 className="font-Inter flex items-end font-semibold text-[30px] md:text-subheading leading-9 text-white tracking-[-0.3px] md:tracking-[-0.4px]">
                {i === 0 && <span className="mr-3">$</span>}
                <SlotCounter
                  value={item.number}
                  duration={20}
                  animateOnVisible
                />
                <span className="ml-[2px] mb-[2px] md:ml-2">+</span>
              </h3>
              <p className="font-Inter font-normal text-caption md:text-paragraph text-white tracking-[-0.2px] md:tracking-[-0.26px]">
                {item?.name}
              </p>
            </div>
            {i == 2 ? (
              ""
            ) : (
              <div className="w-full h-[5px] bg-black xmd:hidden block" />
            )}
          </>
        ))}
      </div>
    </section>
  );
};

export default PerformanceStats;
