/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full min-h-[963px] xxl-max-screen mx-auto flex flex-col  justify-end pb-10 xmd:pb-[80px] xl:px-[100px] lg:px-[50px] md:px-16 px-3  relative  overflow-x-hidden lg:overflow-visible">
      <div className="w-full flex items-end justify-between relative z-20">
        <div>
          <h1 className="pt-[550px] md:pt-[512px]  lg:pt-0 lg:inline-flex font-Oswald xl:text-hero-large lg:text-[150px] md:text-[110px] text-[90px] font-bold md:tracking-[-1.8px] tracking-[-0.9px] leading-[90px] md:leading-[110px] lg:leading-[150px] xl:leading-[180px] uppercase text-wrap">
            <span className="text-black text-stroke-outline mr-[35px] lg:block hidden">
              Play for
            </span>

            <span className="text-transparent hero-mobile-text-outline lg:hidden block ">
              Play for
            </span>

            <span className="flex items-center lg:contents">
              <span className=" hero-free-win-big-text lg:block hidden">
                Free
              </span>
              <span className="text-white lg:hidden block">Free,</span>
              <span className="bg-main-gradient bg-clip-text text-fill-transparent lg:hidden block">
                &nbsp;WIN
              </span>
            </span>
            <span className="text-[240.243px] leading-[240px] lg:leading-[inherit] lg:text-[inherit] bg-main-gradient bg-clip-text text-fill-transparent lg:hidden block">
              BIG
            </span>
          </h1>
          <div className="flex items-end">
            <div className="w-full md:w-[612px]">
              <p className="!font-Oswald md:text-paragraph text-button-text leading-[27px] font-light md:tracking-[-0.26px] tracking-[-0.22px] text-brand-white mb-9 ml-[5px]">
                Play your favorite games, earn points, and easily redeem them
                for cash or cryptocurrency. Our games are 100% free to download
                and play.
              </p>
              <div className="flex lg:items-center items-end lg:justify-center justify-start  gap-[10px]">
                <div className="flex items-center sm:flex-row flex-col gap-2">
                  <Link
                    href="#"
                    className="relative w-[197px] md:w-[229px] h-[73px] group "
                  >
                    <Image
                      src="/images/googleplay.svg"
                      alt="App_Store"
                      fill
                      className="object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                  </Link>
                  <Link href="#" className="relative w-[196px] h-[65px] group">
                    <Image
                      src="/images/App_Store.svg"
                      alt="googleplay"
                      fill
                      className="object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                  </Link>
                </div>

                <div className="flex flex-col items-start gap-1">
                  <Image
                    src="/images/stars.svg"
                    alt="stars"
                    width={128}
                    height={24}
                    className="object-contain"
                  />
                  <p className="!font-Oswald text-[18px] leading-[27px] font-light tracking-[-0.18px] text-brand-white md:block hidden">
                    100,000+ Five Star Ratings
                  </p>
                  <p className="!font-Oswald text-[35px] leading-[27px] font-normal tracking-normal text-brand-white block md:hidden">
                    100,000+
                  </p>
                  <p className="!font-Oswald text-[18px] leading-[27px] font-light tracking-[2.88px] text-brand-white block md:hidden">
                    Five Star Ratings
                  </p>
                </div>
              </div>
            </div>
            <h1 className="lg:flex hidden flex-shrink-0 font-bold  xl:text-hero-large lg:text-[150px] md:text-[110px] text-[90px] leading-[138px] hero-free-win-big-text md:tracking-[-1.8px] tracking-[-0.9px] uppercase relative z-10">
              Win Big
            </h1>
          </div>
        </div>
      </div>

      <div className="object-contain w-max h-auto  absolute bottom-[inherit] top-[184px] left-[-130px] lg:top-[inherit] lg:left-[inherit] lg:bottom-[80px] right-[inherit] lg:right-0 xl:right-[50px]">
        <div className="relative w-[408px] h-[541px] lg:w-[630px] lg:h-[830px]">
          <Image
            src="/images/ET-WINR.svg" //blue
            alt="ET-WINR"
            fill
            className="object-cover"
          />
        </div>
      </div>
      {/* money image */}
      <img
        src="/images/Money.svg"
        alt="Money"
        className="absolute top-[240px] left-[-210px] lg:block hidden"
      />

      {/* conies */}

      <img
        src="/images/IOTAcoin.svg" //blue
        alt="IOTAcoin"
        className="absolute top-[30px] left-[-115px] lg:left-[37px] w-[250px] lg:w-auto "
      />
      <img
        src="/images/ETHcoin.svg" //haf-blue
        alt="ETHcoin1"
        className="absolute top-[25px] lg:top-[100px] left-[40px] lg:left-[234px] w-[320px] lg:w-auto"
      />
      <img
        src="/images/BTCcoin.svg" //yellow
        alt="BTCcoin"
        className="absolute top-1/2 left-1/2 transform lg:translate-x-[-60%] translate-x-[-5%] translate-y-[-190%] lg:translate-y-[-110%]  w-[280px] lg:w-auto"
      />
      <img
        src="/images/SOL-Coin.svg" //black
        alt="SOL-Coin"
        className="absolute top-1/2 left-1/2 transform lg:translate-x-[-75%] translate-x-[27%] translate-y-[-155%] lg:translate-y-[-50%] w-[220px] lg:w-auto"
      />
    </section>
  );
};

export default Hero;
