import React from "react";
import Image from "next/image";
const Ourgames = () => {
  return (
    <section className="xxl-max-screen w-full flex flex-col gap-4 py-10">
      <div className="w-full flex flex-wrap gap-3">
        {[
          "/images/game1.svg",
          "/images/game2.png",
          "/images/game3.svg",
          "/images/game4.svg",
          "/images/game5.svg",
        ]?.map((item, index) => (
          <Image
            key={index}
            src={item}
            alt="Our game"
            width={276}
            height={458}
          />
        ))}
      </div>
      <div className="w-full flex justify-between">
        <Image
          src={"/images/game4.svg"}
          alt="Our game"
          width={276}
          height={458}
          className="hidden md:block"
        />
        <div className="p-5">
          <h2
            className="text-[68px] lg:text-banner-large font-bold uppercase leading-normal bg-gradient-to-r from-[#4D89F0] to-[#9184EA] 
            bg-clip-text text-transparent"
          >
            Our Games
          </h2>
          <p className="max-w-[761px]  text-center text-[#FFFFFFE5] text-base lg:text-[22px] font-light leading-normal tracking-normal">
            Our 20+ games are 100% free to play, and allow you to earn real
            cryptocurrency or cash. Whether you’re into puzzles, strategy, or
            action -packed adventures, we’ve got something for everyone. Create
            one account and start earning rewards today!
          </p>
        </div>
        <Image
          src={"/images/game5.svg"}
          alt="Our game"
          width={276}
          height={458}
          className="hidden md:block"
        />
      </div>

      <div className=" w-full flex flex-wrap gap-3 ">
        {[
          "/images/game1.svg",
          "/images/game2.png",
          "/images/game3.svg",
          "/images/game4.svg",
          "/images/game5.svg",
        ]?.map((item, index) => (
          <Image
            key={index}
            src={item}
            alt="Our game"
            width={276}
            height={458}
          />
        ))}
      </div>
    </section>
  );
};
export default Ourgames;
