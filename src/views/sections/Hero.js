/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className='w-full min-h-[963px] xxl-max-screen mx-auto flex flex-col  justify-end pb-[80px] xl:px-[100px] lg:px-[50px] md:px-16 px-4 pr-[65px] relative'>
      <div className='w-full flex items-end justify-between relative z-20'>
        <div className=''>
          <h1 className='font-Oswald 2xl:text-hero-large lg:text-[150px] md:text-[110px] text-[90px] font-bold md:tracking-[-1.8px] tracking-[-0.9px] leading-[180px] uppercase text-wrap'>
            <span className='text-black  text-stroke-outline mr-[35px]'>
              Play
            </span>
            <span className='text-black  text-stroke-outline mr-[35px]'>
              for
            </span>
            <span className='hero-free-win-big-text'>Free</span>
            <span className='bg-main-gradient bg-clip-text text-fill-transparent lg:hidden block'>
              ,WIN
            </span>
            <span className='bg-main-gradient bg-clip-text text-fill-transparent lg:hidden block'>
              BIG
            </span>
          </h1>
          <div className='flex items-end'>
            <div className='w-[612px]'>
              <p className='!font-Oswald md:text-paragraph text-button-text leading-[27px] font-light md:tracking-[-0.26px] tracking-[-0.22px] text-brand-white mb-9'>
                Play your favorite games, earn points, and easily redeem them
                for cash or cryptocurrency. Our games are 100% free to download
                and play.
              </p>
              <div className='flex lg:items-center items-end lg:justify-center justify-start  gap-[10px]'>
                <div className='flex items-center lg:flex-row flex-col gap-2'>
                  <Link href='#'>
                    <Image
                      src='/images/googleplay.svg'
                      alt='App_Store'
                      width={229}
                      height={73}
                      className='object-contain'
                    />
                  </Link>
                  <Link href='#'>
                    <Image
                      src='/images/App_Store.svg'
                      alt='googleplay'
                      width={196}
                      height={65}
                      className='object-contain lg:w-[196px] w-[229px]'
                    />
                  </Link>
                </div>
                <div className='flex flex-col items-start gap-1'>
                  <Image
                    src='/images/stars.svg'
                    alt='stars'
                    width={128}
                    height={24}
                    className='object-contain'
                  />
                  <p className='!font-Oswald text-[18px] leading-[27px] font-light tracking-[-0.18px] text-brand-white md:block hidden'>
                    100,000+ Five Star Ratings
                  </p>
                  <p className='!font-Oswald text-[35px] leading-[27px] font-normal tracking-normal text-brand-white block md:hidden'>
                    100,000+
                  </p>
                  <p className='!font-Oswald text-[18px] leading-[27px] font-light tracking-[2.88px] text-brand-white block md:hidden'>
                    Five Star Ratings
                  </p>
                </div>
              </div>
            </div>
            <h1 className='lg:flex hidden flex-shrink-0 font-bold  2xl:text-hero-large lg:text-[150px] md:text-[110px] text-[90px] leading-[166px] hero-free-win-big-text md:tracking-[-1.8px] tracking-[-0.9px] uppercase relative z-10'>
              Win Big
            </h1>
          </div>
        </div>
      </div>

      <Image
        src='/images/ET-WINR.svg' //blue
        alt='ET-WINR'
        width={630}
        height={830}
        className='object-contain absolute bottom-[80px] right-[50px]'
      />
      {/* money image */}
      <img
        src='/images/Money.svg'
        alt='Money'
        className='absolute top-[366px] left-[-210px]'
      />

      {/* conies */}

      <img
        src='/images/IOTAcoin.svg' //blue
        alt='IOTAcoin'
        className='absolute top-[30px] left-[37px] '
      />
      <img
        src='/images/ETHcoin.svg' //blue
        alt='ETHcoin1'
        className='absolute top-[100px] left-[234px]'
      />
      <img
        src='/images/BTCcoin.svg' //blue
        alt='BTCcoin'
        className='absolute top-1/2 left-1/2 transform translate-x-[-60%] translate-y-[-110%]'
      />
      <img
        src='/images/SOL-Coin.svg' //blue
        alt='SOL-Coin'
        className='absolute top-1/2 left-1/2 transform translate-x-[-75%] translate-y-[-50%]'
      />
    </section>
  );
};

export default Hero;
