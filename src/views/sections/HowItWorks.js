/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const HowItWorks = () => {
  const counterLogoPosition = (index) => {
    switch (index) {
      case 0:
        return "top-[-100px] left-[150px]";
      case 1:
        return "top-[-100px] right-[100px]";
      case 3:
        return "top-[30px] left-[100px]";
      case 4:
        return "top-[30px] right-[70px]";
      default:
        return "";
    }
  };
  return (
    <section
      className='xxl-max-screen text-white pt-[100px] md:pb-[165px] pb-[100px] xl:px-[100px] lg:px-[50px] md:px-16 px-4 relative z-20'
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
      <div className='relative md:mb-[160px] mb-[112px]'>
        <div className='absolute left-[66px] w-full h-[50vh] md:w-[1270px] md:h-[837px]'>
          <Image
            src='/images/howitworkvector.png'
            alt='bg vector'
            fill
            className='object-cover'
          />
        </div>
        {/* Step 1 */}
        <div className='flex lg:flex-row flex-col-reverse items-center justify-between md:gap-[105px] md:mb-[85px] mb-[22px] w-full'>
          <div className='flex items-center md:gap-10 gap-5 w-full'>
            <h1 className='md:text-[60px] text-[30px] font-semibold leading-normal md:tracking-[-0.3px] tracking-[-0.6px] text-brand-white rounded-full md:max-w-[130px] max-w-[65px] w-full md:h-[130px] h-[65px] flex justify-center items-center bg-circle-gradient border-2 border-brand-blue backdrop-blur-md '>
              01
            </h1>
            <div className='flex flex-col items-start gap-[10px]'>
              <h1 className='md:text-default-title text-small-heading font-medium leading-normal md:tracking-[-0.4px] tracking-[-0.26px] text-brand-white'>
                Play Games
              </h1>
              <p className='md:text-small-paragraph text-[14px] font-light leading-normal md:tracking-[-0.24px] tracking-[-0.14px] text-brand-white'>
                Enjoy any of WINR’s 20+ games
              </p>
            </div>
          </div>
          <div className='w-full md:flex hidden justify-center items-center h-auto'>
            <img
              src='/images/all-games.png'
              alt='Step 1 Image'
              className='max-w-full'
            />
          </div>
          <div className='w-full flex md:hidden justify-center items-center h-auto'>
            <img
              src='/images/all-games.png'
              alt='Step 1 Image'
              className='max-w-full'
            />
          </div>
        </div>
        {/* Step 2 */}
        <div className='flex lg:flex-row flex-col items-center justify-between md:gap-[105px] gap-4 md:mb-[80px] mb-[34px] w-full'>
          <div className='w-1/2 md:flex flex-wrap gap-5 hidden justify-center items-center h-auto relative'>
            {[48, 120, 234, 25, 173]?.map((item, index) => (
              <div
                key={index}
                className={`inline-flex items-center gap-3 border border-half-grey1 bg-half-grey backdrop-blur-xl px-5 py-[10px] rounded-full absolute ${counterLogoPosition(
                  index,
                )}`}>
                <img
                  src='/images/win-small-logo.svg'
                  alt='Step 1 Image'
                  className='max-w-full'
                />
                <p className='text-[30px] font-bold leading-none text-white/90 tracking-[-0.3px] font-inter'>
                  {item}
                </p>
              </div>
            ))}
          </div>
          <div className='w-1/2'>
            <div className='w-full flex md:hidden justify-center items-center h-auto'>
              <div className='inline-flex items-center gap-3 border border-half-grey1 bg-half-grey backdrop-blur-xl px-5 py-[10px] rounded-full '>
                <img
                  src='/images/win-small-logo.svg'
                  alt='Step 1 Image'
                  className='max-w-full'
                />
                <p className='text-[30px] font-bold leading-none text-white/90 tracking-[-0.3px] font-inter'>
                  150
                </p>
              </div>
            </div>
            <div className='flex   justify-start   items-center md:gap-10 gap-5 w-full'>
              <div className='flex flex-col items-start gap-[10px]'>
                <h1 className='md:text-default-title text-small-heading font-medium leading-normal md:tracking-[-0.4px] tracking-[-0.26px] text-brand-white'>
                  Earn WINR Rewards
                </h1>
                <p className='md:text-small-paragraph text-[14px] font-light leading-normal md:tracking-[-0.24px] tracking-[-0.14px] text-brand-white'>
                  Rack up points as you play
                </p>
              </div>
              <h1 className='md:text-[60px] text-[30px] font-semibold leading-normal md:tracking-[-0.3px] tracking-[-0.6px] text-brand-white rounded-full md:max-w-[130px] max-w-[65px] w-full md:h-[130px] h-[65px] flex justify-center items-center bg-circle-gradient border-2 border-brand-blue backdrop-blur-md '>
                02
              </h1>
            </div>
          </div>
        </div>
        {/* Step 3 */}
        <div className='flex lg:flex-row flex-col-reverse items-center justify-between md:gap-[44px]  w-full pt-7'>
          <div className='flex items-center md:gap-10 gap-5 w-full'>
            <h1 className='md:text-[60px] text-[30px] font-semibold leading-normal md:tracking-[-0.3px] tracking-[-0.6px] text-brand-white rounded-full md:max-w-[130px] max-w-[65px] w-full md:h-[130px] h-[65px] flex justify-center items-center bg-circle-gradient border-2 border-brand-blue backdrop-blur-md '>
              03
            </h1>
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
          <div className='w-full flex md:hidden justify-center items-center h-auto'>
            <img
              src='/images/money-coin.png'
              alt='Step 1 Image'
              className='max-w-full'
            />
          </div>
        </div>
      </div>
      {/* Buttons */}
      <div className='flex items-center justify-center md:flex-row flex-col gap-[30px]'>
        <button className='flex items-center justify-center text-[26px] font-light leading-normal tracking-[-0.26px] md:w-max w-full bg-circle-gradient border-2 border-brand-blue backdrop-blur-md text-brand-white py-[15px] px-10 rounded-full  gap-[5px]'>
          <img
            src='/images/android.svg'
            alt='Step 1 Image'
            className='w-[26px] h-[26px]'
          />
          Download for Android
        </button>
        <button className='flex items-center justify-center text-[26px] font-light leading-normal tracking-[-0.26px] md:w-max w-full bg-circle-gradient border-2 border-brand-blue backdrop-blur-md text-brand-white py-[15px] px-10 rounded-full  gap-[5px]'>
          <img
            src='/images/apple.svg'
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
