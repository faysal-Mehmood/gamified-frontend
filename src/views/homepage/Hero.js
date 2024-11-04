/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full min-h-[963px] xxl-max-screen mx-auto flex flex-col  justify-end pb-10 xmd:pb-[80px] xl:px-[100px] lg:px-[50px] md:px-16 px-3  relative  overflow-x-hidden lg:overflow-visible"
    >
      <div className="w-full flex items-end justify-around relative z-20">
        <div>
          <h1 className="text-center pr-5 smx:pr-0 pt-[550px] md:pt-[512px]  lg:pt-0 lg:inline-flex font-Oswald xl:text-hero-large lg:text-[150px] md:text-[110px] smx:text-[90px] text-[75px] font-bold md:tracking-[-1.8px] tracking-[-0.9px] leading-[94px] smx:leading-[90px] md:leading-[110px] lg:leading-[150px] xl:leading-[180px] uppercase text-wrap">
            <span className="text-black text-stroke-outline mr-[35px] lg:block hidden">
              Play for
            </span>

            <span className="text-transparent hero-mobile-text-outline lg:hidden block ">
              Play for
            </span>

            <span className="flex items-center justify-center lg:contents">
              <span className=" hero-free-win-big-text lg:block hidden">
                Free
              </span>
              <span className="text-white lg:hidden block">Free,</span>
              <span className="bg-main-gradient bg-clip-text text-fill-transparent lg:hidden block">
                &nbsp;WIN
              </span>
            </span>
            <span className=" smx:mt-0 -mt-6 smx:text-[240.243px] text-[203px] leading-[200px] smx:leading-[240px] lg:leading-[inherit] lg:text-[inherit] bg-main-gradient bg-clip-text text-fill-transparent lg:hidden block">
              BIG
            </span>
          </h1>
          <div className="flex items-end">
            <div className="w-full md:w-[612px]">
              <p className="!font-Oswald md:text-paragraph text-button-text leading-[27px] font-light md:tracking-[-0.26px] tracking-[-0.22px] text-brand-white mb-9  pl-2 pr-5 smx:pr-0">
                Play your favorite games, earn points, and easily redeem them
                for cash or cryptocurrency. Our games are 100% free to download
                and play.
              </p>
              <div className="flex items-start lg:items-center justify-start  gap-[10px]">
                <div className="flex items-start smx:items-center sm:flex-row flex-col gap-1 sm:gap-2 pl-1">
                  <Link
                    href="#"
                    className="relative w-[163px] sm:w-[196px] h-[49px] sm:h-[65px] group "
                  >
                    <Image
                      src="/images/googleplay.svg"
                      alt="App_Store"
                      srcset="image-1x.png 1x, image-2x.png 2x"
                      fill
                      className="object-contain transition-transform duration-300 ease-in-out group-hover:scale-105 safari-image-fix"
                    />
                  </Link>
                  <Link
                    href="#"
                    className="relative w-[163px] sm:w-[196px] h-[49px] sm:h-[65px] group"
                  >
                    <Image
                      src="/images/App_Store.svg"
                      srcset="image-1x.png 1x, image-2x.png 2x"
                      alt="googleplay"
                      fill
                      className="object-contain transition-transform duration-300 ease-in-out group-hover:scale-105 safari-image-fix"
                    />
                  </Link>
                </div>

                <div className="flex flex-col items-start gap-[9px] sm:gap-1">
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
            <h1 className="lg:flex hidden flex-shrink-0 font-bold  xl:text-hero-large lg:text-[150px] md:text-[110px] text-[90px] leading-[180px]  hero-free-win-big-text md:tracking-[-1.8px] tracking-[-0.9px] uppercase relative z-10 bottom-[-9px]">
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
        className="absolute top-[235px] left-[-310px] lg:block hidden"
      />

      {/* conies */}

      <img
        src="/images/IOTAcoin.svg" //blue
        alt="IOTAcoin"
        className="absolute top-[2%] md:top-[-2%] lg:top-[3%] left-[-105px] md:left-[-150px] lg:left-[37px] w-[250px] md:w-[320px] lg:w-auto "
      />
      <img
        src="/images/ETHcoin.svg" //haf-blue
        alt="ETHcoin1"
        className="absolute top-[2.8%] lg:top-[15%] right-[-2%] xs:right-[13%] lg:left-[16%] lg3:left-[13%] w-[290px] md:w-[350px] lg3:w-auto"
      />
      <img
        src="/images/BTCcoin.svg" //yellow
        alt="BTCcoin"
        className="absolute top-[55%] lg:top-[40%] md:top-[70%] lg3:top-[44%] xxl:left-[49%] lg3:left-[48%] lg:left-[42%] lg:right-0 right-[-25%] xs:right-[-7%] transform lg:translate-x-[-60%] translate-x-[-5%] translate-y-[-190%] lg:translate-y-[-110%] w-[270px] md:w-[330px] lg3:w-auto"
      />
      <img
        src="/images/SOL-Coin.svg" //black
        alt="SOL-Coin"
        className="absolute lg:top-1/2 md:top-[62%] top-[53%] lg:left-1/2 lg:right-0 md:right-[-5%] right-[-9%] transform lg:translate-x-[-75%] translate-x-[27%] translate-y-[-155%] lg:translate-y-[-50%] w-[196px] md:w-[250px] lg:w-auto"
      />
    </section>
  );
};

export default Hero;
