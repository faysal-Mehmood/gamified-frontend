/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className='w-full min-h-[963px] xxl-max-screen mx-auto flex flex-col  justify-end pb-[69px] pl-[100px] pr-[65px] relative'>
      <div className='w-full flex items-end justify-between'>
        <div className=''></div>

        <div className='w-[630px] h-[843px] relative flex flex-col justify-end '>
          <h1 className='font-bold text-hero-large leading-[166px] bg-main-gradient bg-clip-text text-fill-transparent tracking-[-1.8px] uppercase relative z-10'>
            Free
          </h1>
          <h1 className='font-bold text-hero-large leading-[166px] bg-main-gradient bg-clip-text text-fill-transparent tracking-[-1.8px] uppercase relative z-10'>
            Win Big
          </h1>
          <Image
            src='/images/ET-WINR.svg' //blue
            alt='ET-WINR'
            fill
          />
        </div>
      </div>

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
        className='absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%]'
      />
      <img
        src='/images/ETHcoin.svg' //blue
        alt='ETHcoin1'
        className='absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%]'
      />
      <img
        src='/images/BTCcoin.svg' //blue
        alt='BTCcoin'
        className='absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%]'
      />
      <img
        src='/images/SOL-Coin.svg' //blue
        alt='SOL-Coin'
        className='absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%]'
      />
    </section>
  );
};

export default Hero;
