import React from "react";
import Image from "next/image";
const Ourgames = () => {
  return (
    <section className="xxl-max-screen w-full flex flex-col gap-4 py-10 px-4">
      <div className="w-full grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-3">
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
            className={
              index === 4
                ? "hidden lg:block"
                : "block lg:w-[276px] md:w-[300px] w-[350px]"
            }
          />
        ))}
      </div>
      <div className="w-full grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-3">
        {/* First image */}
        <Image
          src={"/images/game4.svg"}
          alt="Our game"
          width={276}
          height={458}
          className="hidden md:block lg:w-[276px] md:w-[300px] w-[340px]"
        />

        {/* Div occupying grid columns 2, 3, and 4 */}
        <div className="lg:col-span-3 md:col-span-2 col-span-2">
          <h2
            className="2xl:text-banner-large xl:text-[120px] lg:text-[90px] md:text-[70px] text-[68px] font-bold uppercase leading-normal tracking-normal bg-gradient-to-r from-[#4D89F0] to-[#9184EA] 
      bg-clip-text text-transparent text-center"
          >
            Our Games
          </h2>
          <p className="max-w-[761px] mx-auto text-center text-[#FFFFFFE5] lg:text-[22px] md:text-[18px] text-base font-light leading-normal tracking-normal">
            Our 20+ games are 100% free to play, and allow you to earn real
            cryptocurrency or cash. Whether you’re into puzzles, strategy, or
            action-packed adventures, we’ve got something for everyone. Create
            one account and start earning rewards today!
          </p>
        </div>

        {/* Second image */}
        <Image
          src={"/images/game5.svg"}
          alt="Our game"
          width={276}
          height={458}
          className="hidden md:block lg:w-[276px] md:w-[300px] w-[340px]"
        />
      </div>

      <div className="w-full grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-3">
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
            className={
              index === 4
                ? "hidden lg:block"
                : "block lg:w-[276px] md:w-[300px] w-[340px]"
            }
          />
        ))}
      </div>
    </section>
  );
};
export default Ourgames;
