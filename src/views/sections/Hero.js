/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className='w-full min-h-[963px] xxl-max-screen mx-auto flex flex-col  justify-end pb-[69px] pl-[100px] pr-[65px] relative'>
      <div className='w-full flex items-end justify-between relative z-20'>
        <div className=''>
          <h1 className='font-Oswald text-hero-large font-bold tracking-[-1.8px] leading-[180px] uppercase'>
            <span className='text-black  text-stroke-outline mr-[35px]'>
              Play for
            </span>
            <span className=' bg-main-gradient bg-clip-text stroke-custom text-fill-transparent   '>
              Free
            </span>
          </h1>
          <div className='flex items-center'>
            <div className='w-[612px]'>
              <p className='!font-Oswald text-paragraph leading-[27px] font-light tracking-[-0.26px] text-brand-white mb-9'>
                Play your favorite games, earn points, and easily redeem them
                for cash or cryptocurrency. Our games are 100% free to download
                and play.
              </p>
              <div className='flex items-center gap-1'>
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
                    className='object-contain'
                  />
                </Link>
                <div className='ml-2'>
                  <Image
                    src='/images/stars.svg'
                    alt='stars'
                    width={128}
                    height={24}
                    className='object-contain'
                  />
                  <p className='!font-Oswald text-[18px] leading-[27px] font-light tracking-[-0.18px] text-brand-white'>
                    100,000+ Five Star Ratings
                  </p>
                </div>
              </div>
            </div>
            <h1 className='flex-shrink-0 font-bold stroke-custom text-hero-large leading-[166px] bg-main-gradient bg-clip-text text-fill-transparent tracking-[-1.8px] uppercase relative z-10'>
              Win Big
            </h1>
          </div>
        </div>
      </div>

      <Image
        src='/images/ET-WINR.svg' //blue
        alt='ET-WINR'
        width={628}
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
