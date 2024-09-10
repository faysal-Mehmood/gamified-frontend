/* eslint-disable @next/next/no-img-element */
import React from "react";

const Hero = () => {
  return (
    <section className='w-full min-h-[963px] xxl-max-screen mx-auto  pb-[69px] pl-[100px] pr-[118px] relative'>
      <div className=''></div>

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
