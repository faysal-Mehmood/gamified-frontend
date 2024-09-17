/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import React, { useState } from "react";

const HowItWorks = () => {
  const [isBtn1Hover, setisBtn1Hover] = useState(false);
  const [isBtn2Hover, setisBtn2Hover] = useState(false);
  const counterLogoPosition = (index) => {
    switch (index) {
      case 0:
        return "top-0 md:top-[10px] left-8 md:left-6 lg2:left-[81px]";
      case 1:
        return "top-[31px] md:top-0 right-[29px]";
      case 2:
        return "top-[57%] left-[50%] -translate-x-1/2 -translate-y-1/2";
      case 3:
        return "bottom-[31px] md:bottom-0 left-[9px]";
      case 4:
        return "bottom-0 right-0";
      default:
        return "";
    }
  };
  return (
    <section
      className='xxl-max-screen   text-white pt-[100px]  md:pb-[165px] pb-[100px] xl:px-[100px] lg:px-[50px] md:px-16 px-4 relative z-20 overflow-hidden'
      // style={{
      //   background: "url('/images/howitworkvector.png')",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <div className='flex flex-col items-start max-w-[664px] w-full md:mb-[72px] mb-[74px] '>
        <h2 className='md:text-large-heading text-big-title font-bold leading-normal tracking-normal bg-gradient-to-r from-[#4D89F0] to-[#9184EA] bg-clip-text text-transparent'>
          HOW IT WORKS
        </h2>
        <p className='md:text-small-text text-[16px] font-light leading-normal tracking-[-0.22px] text-brand-white'>
          Earning rewards has never been easier. Simply play your favorite
          games, accumulate WINR rewards, and choose to cash out in USD or your
          preferred cryptocurrency. Here’s how it works:
        </p>
      </div>
      <div className='relative '>
        {/* Step 1 */}
        <div className='pl-[42px] md:pl-[65px] pt-10 pb-6 lg:pt-0 lg:pb-0 relative  flex lg:flex-row flex-col-reverse items-start justify-start w-full '>
          {/* top border */}
          <img
            src='/images/border-top-full.svg'
            alt='Step 1 Image'
            className='max-w-full w-[calc(100%-50%)]  lg:w-[calc(100%-44%)] object-cover h-1 absolute top-0 left-[30px] md:left-[65px] '
          />

          {/* left border */}
          <img
            src='/images/play-left-border.svg'
            alt='Step 1 Image'
            className='max-w-full object-cover w-1  h-full absolute top-0 left-[30px] md:left-[65px]'
          />

          <h1 className='absolute z-[2] left-0 bottom-[18px] lg:bottom-[inherit] top-[inherit] lg:top-1/2 translate-y-0 lg:-translate-y-1/2  md:text-[60px] text-[30px] font-semibold leading-normal md:tracking-[-0.3px] tracking-[-0.6px] text-brand-white rounded-full md:max-w-[130px] max-w-[65px] w-full md:h-[130px] h-[65px] flex justify-center items-center bg-circle-gradient border-2 border-brand-blue backdrop-blur-md '>
            01
          </h1>

          <div className='relative w-full max-w-max pl-[53px] md:px-[105px] min-h-max lg:min-h-[279px]   flex items-center md:gap-10 gap-5 '>
            <div className=' flex flex-col items-start gap-[10px]'>
              <h1 className='md:text-default-title text-small-heading font-medium leading-normal md:tracking-[-0.4px] tracking-[-0.26px] text-brand-white'>
                Play Games
              </h1>
              <p className='md:text-small-paragraph text-[14px] font-light leading-normal md:tracking-[-0.24px] tracking-[-0.14px] text-brand-white'>
                Enjoy any of WINR’s 20+ games
              </p>
            </div>
          </div>

          <img
            src='/images/all-games.png'
            alt='Step 1 Image'
            className='md:block hidden relative  pl-5 lg:pt-0 lg:pl-0 top-0 lg:top-[-37px] '
          />

          <img
            src='/images/all-mobile-games.png'
            alt='Step 1 Image'
            className='max-w-full w-auto h-auto md:hidden block pl-5'
          />
        </div>
        {/* Step 2 */}
        <div className='pt-[30px] md:pt-12 pb-6 md:pb-[54px] relative pl-[42px] md:pl-[65px] pr-[42px] md:pr-[190px]  flex lg:flex-row flex-col items-end md:items-center justify-between md:gap-14 gap-4  w-full'>
          {/* top border */}
          <img
            src='/images/border-top-full.svg'
            alt='Step 1 Image'
            className='max-w-full w-[calc(100%-60px)] md:w-[calc(100%-132px)] lg:w-[calc(100%-255px)] object-cover h-1 absolute top-0 left-[30px] md:left-[65px] '
          />

          {/* right border */}
          <img
            src='/images/border-right.svg'
            alt='Step 1 Image'
            className='max-w-full object-cover w-1 h-full absolute top-0 right-[30px] lg:right-[190px]'
          />

          {/* bottom border */}
          <img
            src='/images/border-bottom.svg'
            alt='Step 1 Image'
            className='max-w-full w-[calc(100%-60px)] md:w-[calc(100%-132px)] lg:w-[calc(100%-255px)] object-cover  h-1 absolute bottom-0 left-[30px] md:left-[65px] '
          />

          <h1 className='absolute z-[2]  right-0 md:right-[125px] bottom-[18px] lg:bottom-[inherit] top-[inherit] lg:top-1/2 translate-y-0 lg:-translate-y-1/2  md:text-[60px] text-[30px] font-semibold leading-normal md:tracking-[-0.3px] tracking-[-0.6px] text-brand-white rounded-full md:max-w-[130px] max-w-[65px] w-full md:h-[130px] h-[65px] flex justify-center items-center bg-circle-gradient border-2 border-brand-blue backdrop-blur-md '>
            02
          </h1>
          <div className='mr-8 md:pr-0 w-full md:w-[457px]  h-[185px] overflow-hidden relative'>
            {[48, 120, 234, 25, 173]?.map((item, index) => (
              <div
                key={index}
                className={`inline-flex items-center gap-2 md:gap-3 border border-half-grey1 bg-half-grey backdrop-blur-xl px-[13px] md:px-5 py-[6px] md:py-[10px] rounded-full absolute ${counterLogoPosition(
                  index,
                )}`}>
                <img
                  src='/images/win-small-logo.svg'
                  alt='Step 1 Image'
                  className='w-[16px] md:w-[25px] h-[14px] md:h-[22px]'
                />
                <p className='text-[19px] md:text-[30px] font-bold leading-none text-white/90 tracking-[-0.3px] font-inter'>
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className='w-max flex justify-start items-center md:gap-10 gap-5 pr-12 md:pr-[116px] md:pt-0 pt-7'>
            <div className='flex flex-col items-start gap-[10px]'>
              <h1 className='md:text-default-title text-small-heading font-medium leading-normal md:tracking-[-0.4px] tracking-[-0.26px] text-brand-white'>
                Earn WINR Rewards
              </h1>
              <p className='md:text-small-paragraph text-[14px] font-light leading-normal md:tracking-[-0.24px] tracking-[-0.14px] text-brand-white'>
                Rack up points as you play
              </p>
            </div>
          </div>
        </div>
        {/* Step 3 */}
        <div className=' pl-[42px] md:pl-[65px] relative flex lg:flex-row flex-col-reverse items-center justify-between md:gap-[44px]  w-full pt-7 '>
          <h1 className='absolute z-[2] left-0 bottom-[18px] lg:bottom-[inherit] top-[inherit] lg:top-1/2 translate-y-0 lg:-translate-y-1/2   md:text-[60px] text-[30px] font-semibold leading-normal md:tracking-[-0.3px] tracking-[-0.6px] text-brand-white rounded-full md:max-w-[130px] max-w-[65px] w-full md:h-[130px] h-[65px] flex justify-center items-center bg-circle-gradient border-2 border-brand-blue backdrop-blur-md '>
            03
          </h1>
          {/* left border */}
          <img
            src='/images/border-left-3.svg'
            alt='Step 1 Image'
            className='max-w-full object-cover w-1  h-full absolute top-0 left-[30px] md:left-[65px]'
          />

          <div className='pl-[53px] md:pl-[105px] pt-[255px] md:pt-0 flex items-center md:gap-10 gap-5 w-full pb-6 md:pb-[41px]'>
            <div className='flex flex-col items-start gap-[10px]'>
              <h1 className='md:text-default-title text-small-heading font-medium leading-normal md:tracking-[-0.4px] tracking-[-0.26px] text-brand-white'>
                Convert to Cash or Crypto
              </h1>
              <p className='md:text-small-paragraph text-[14px] font-light leading-normal md:tracking-[-0.24px] tracking-[-0.14px] text-brand-white'>
                Redeem points for USD via PAYPAL, BTC, ETH, IOTA or SOL
              </p>
            </div>
          </div>
          <div className='w-full md:flex hidden justify-center items-center h-auto'>
            <img
              src='/images/money-coin.png'
              alt='Step 1 Image'
              className='max-w-full'
            />
          </div>
          <div className='w-[386px] h-[200px] flex-shrink-0 block absolute top-[30px] right-[-85px]  md:hidden  '>
            <img
              src='/images/mobile-money-coin.svg'
              alt='Step 1 Image'
              className='max-w-full w-full h-auto'
            />
          </div>
        </div>
      </div>
      {/* last bottom border */}
      <img
        src='/images/last-border-3.svg'
        alt='Step 1 Image'
        className='max-w-full w-full object-cover h-1 absolute pl-[30px] md:pl-[63px] '
      />
      {/* Buttons */}
      <div className='flex items-center justify-center md:flex-row flex-col gap-[30px]  md:mt-[160px] mt-[112px]'>
        <button
          onMouseEnter={() => setisBtn1Hover(true)}
          onMouseLeave={() => setisBtn1Hover(false)}
          className='flex items-center justify-center text-[26px] font-light leading-normal tracking-[-0.26px] md:w-max w-full bg-circle-gradient border-2 border-brand-blue backdrop-blur-md text-brand-white hover:text-brand-blue py-[15px] px-10 rounded-full  gap-[5px] transition-all duration-300 ease-in-out'>
          <img
            src={
              isBtn1Hover
                ? "/images/icons/gradient-android.svg"
                : "/images/android.svg"
            }
            alt='Step 1 Image'
            className='w-[26px] h-[26px]'
          />
          Download for Android
        </button>
        <button
          onMouseEnter={() => setisBtn2Hover(true)}
          onMouseLeave={() => setisBtn2Hover(false)}
          className='flex items-center justify-center text-[26px] font-light leading-normal tracking-[-0.26px] md:w-max w-full bg-circle-gradient border-2 border-brand-blue backdrop-blur-md text-brand-white hover:text-brand-blue py-[15px] px-10 rounded-full  gap-[5px] transition-all duration-300 ease-in-out'>
          <img
            src={
              isBtn2Hover
                ? "/images/icons/gradient-apple.svg"
                : "/images/apple.svg"
            }
            alt='Step 1 Image'
            className='w-[30px] h-[30px]'
          />
          Download for IOS
        </button>
      </div>
    </section>
  );
};

export default HowItWorks;
