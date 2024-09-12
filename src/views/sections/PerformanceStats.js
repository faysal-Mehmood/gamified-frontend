import React from "react";

const status = [
  {
    number: "994,000",
    name: "USD paid out",
  },
  {
    number: "9,994,000",
    name: "Downloads",
  },
  {
    number: "99,994,000",
    name: "Points Earned",
  },
];

const PerformanceStats = () => {
  return (
    <section className='text-white bg-main-gradient pt-8 pb-[31px]'>
      <div className='xxl-max-screen xl:px-[100px] lg:px-[50px] md:px-16 px-4 grid grid-cols-3 gap-8'>
        {status?.map((item, i) => (
          <div
            key={i}
            className={`${
              i === 0 || i === 2 ? "w-max" : "w-full"
            } flex flex-col ${
              i === 0
                ? "justify-start"
                : i === 1
                ? "justify-center"
                : "justify-end"
            } items-center  ${i === 2 && "ml-[inherit]"} `}>
            <h3 className='font-Inter font-semibold text-subheading leading-9 text-white tracking-[-0.4px]'>
              {i === 0 && <span className='mr-3'>$</span>} {item?.number}
              <span className=''>+</span>
            </h3>
            <p className='font-Inter font-normal text-paragraph text-white tracking-[-0.26px]'>
              {item?.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PerformanceStats;
