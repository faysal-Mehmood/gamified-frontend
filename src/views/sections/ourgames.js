import React from "react";
import Image from "next/image";

const Ourgames = () => {
  return (
    <section className="xxl-max-screen w-full flex flex-col gap-4 pt-10">
      <div className="w-full grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-4">
        {[
          "/images/game2.png",
          "/images/game1.png",
          "/images/game3.svg",
          "/images/game4.svg",
          "/images/game5.svg",
        ]?.map((item, index) => (
          <div key={index} className="relative group cursor-pointer">
            {/* Image */}
            <Image
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
            {/* Overlay for title and icon */}
            <div className="pl-2 pb-[11px] absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-brand-white text-small-paragraph leading-normal tracking-[-0.237px] font-medium">
                Brickz
              </span>
              <div className="flex items-center gap-[5.92px]">
                <Image
                  src="/images/android.svg"
                  alt="android-logo"
                  width={28}
                  height={28}
                  className="border border-half-grey2 p-[5.92px] rounded-[5.92px]"
                />
                <Image
                  src="/images/apple.svg"
                  alt="android-logo"
                  width={28}
                  height={28}
                  className="border border-half-grey2 p-[5.92px] rounded-[5.92px]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-3">
        {/* First image */}
        <div className="relative group cursor-pointer">
          <Image
            src={"/images/game10.png"}
            alt="Our game"
            width={276}
            height={458}
            className="hidden md:block lg:w-[276px] md:w-[300px] w-[340px]"
          />
          <div className="pl-2 pb-[11px] absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-brand-white text-small-paragraph leading-normal tracking-[-0.237px] font-medium">
              Brickz
            </span>
            <div className="flex items-center gap-[5.92px]">
              <Image
                src="/images/android.svg"
                alt="android-logo"
                width={28}
                height={28}
                className="border border-half-grey2 p-[5.92px] rounded-[5.92px]"
              />
              <Image
                src="/images/apple.svg"
                alt="android-logo"
                width={28}
                height={28}
                className="border border-half-grey2 p-[5.92px] rounded-[5.92px]"
              />
            </div>
          </div>
        </div>

        {/* Div occupying grid columns 2, 3, and 4 */}
        <div className="lg:col-span-3 md:col-span-2 col-span-2">
          <h2 className="xl:text-banner-large lg:text-[90px] md:text-[70px] text-[68px] font-bold uppercase leading-normal tracking-normal bg-main-gradient bg-clip-text text-transparent text-center">
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
        <div className="relative group cursor-pointer">
          <Image
            src={"/images/game11.png"}
            alt="Our game"
            width={276}
            height={458}
            className="hidden md:block lg:w-[276px] md:w-[300px] w-[340px]"
          />
          <div className="pl-2 pb-[11px] absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-brand-white text-small-paragraph leading-normal tracking-[-0.237px] font-medium">
              Brickz
            </span>
            <div className="flex items-center gap-[5.92px]">
              <Image
                src="/images/android.svg"
                alt="android-logo"
                width={28}
                height={28}
                className="border border-half-grey2 p-[5.92px] rounded-[5.92px]"
              />
              <Image
                src="/images/apple.svg"
                alt="android-logo"
                width={28}
                height={28}
                className="border border-half-grey2 p-[5.92px] rounded-[5.92px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-3">
        {[
          "/images/game12.png",
          "/images/game13.png",
          "/images/game14.png",
          "/images/game15.png",
          "/images/game16.png",
        ]?.map((item, index) => (
          <div key={index} className="relative group cursor-pointer">
            <Image
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
            <div className="pl-2 pb-[11px] absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-brand-white text-small-paragraph leading-normal tracking-[-0.237px] font-medium">
                Brickz
              </span>
              <div className="flex items-center gap-[5.92px]">
                <Image
                  src="/images/android.svg"
                  alt="android-logo"
                  width={28}
                  height={28}
                  className="border border-half-grey2 p-[5.92px] rounded-[5.92px]"
                />
                <Image
                  src="/images/apple.svg"
                  alt="android-logo"
                  width={28}
                  height={28}
                  className="border border-half-grey2 p-[5.92px] rounded-[5.92px]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ourgames;
