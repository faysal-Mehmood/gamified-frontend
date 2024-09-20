/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Image from "next/image";

const Ourgames = () => {
  return (
    <section
      id='games'
      className='xxl-max-screen w-full flex flex-col gap-[9.5px] md:gap-4 px-5 md:p-0 relative z-20 md:mt-0 mt-[-150]'>
      <div className='w-full grid  grid-cols-2 md:grid-cols-4 lg:grid-cols-5  gap-[9.5px] md:gap-4'>
        {[
          "/images/game2.png",
          "/images/game1.png",
          "/images/game3.svg",
          "/images/game4.svg",
          "/images/game5.svg",
        ]?.map((item, index) => (
          <div
            key={index}
            className={` relative group cursor-pointer w-full  transition-all !duration-[0.4s]  min-h-[271px] sm:min-h-max ease-in-out  min-h-auto h-auto border-4 border-transparent hover:border-brand-blue  
            ${index === 4 ? "hidden lg:block  " : "block  "}
            `}>
            {/* Image */}
            <img src={item} alt='Our game' className='w-full h-full' />

            <div className='w-full h-full z-[2] absolute top-0 left-0 group-hover:bg-game-hover-gradient transition-all !duration-[0.4s] ease-in-out' />
            {/* Overlay for title and icon */}
            <BoxShadowEffect />
          </div>
        ))}
      </div>

      <div className='w-full grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-[9.5px] md:gap-3'>
        {/* First image */}
        <div className='relative w-full hidden md:block  transition-all !duration-[0.4s] ease-in-out  min-h-[271px] sm:min-h-max group cursor-pointer border-4 border-transparent hover:border-brand-blue '>
          {/* <Image
            src={"/images/game10.png"}
            alt='Our game'
            // width={276}
            // height={458}
            fill
            className=' z-[-2] object-fill'
          /> */}
          <div className='w-full h-full z-[2] absolute top-0 left-0 group-hover:bg-game-hover-gradient transition-all !duration-[0.4s] ease-in-out' />
          <img
            src={"/images/game10.png"}
            alt='Our game'
            className='w-full h-full'
          />
          <BoxShadowEffect />
        </div>

        {/* Div occupying grid columns 2, 3, and 4 */}
        <div className='lg:col-span-3 md:col-span-2 col-span-2 md:py-0 py-[50px]'>
          <div className='w-full h-full flex flex-col items-center justify-center gap-0 md:gap-8  xl:gap-[49px] py-0 md:py-11'>
            <h2 className='xl:text-banner-large leading-normal  md:leading-[70px] lg:leading-[90px]  xl:leading-[174px]  lg:text-[90px] md:text-[70px] text-[68px] font-bold uppercase  tracking-normal bg-main-gradient bg-clip-text text-transparent text-center'>
              Our Games
            </h2>
            <p className='max-w-[761px] mx-auto text-center text-[#FFFFFFE5] lg:text-[22px] md:text-[18px] text-base font-light leading-normal tracking-normal'>
              Our 20+ games are 100% free to play, and allow you to earn real
              cryptocurrency or cash. Whether you’re into puzzles, strategy, or
              action-packed adventures, we’ve got something for everyone. Create
              one account and start earning rewards today!
            </p>
          </div>
        </div>

        {/* Second image */}
        <div className='relative group hidden  transition-all !duration-[0.4s] ease-in-out md:block min-h-[271px] sm:min-h-max cursor-pointer border-4 border-transparent hover:border-brand-blue '>
          {/* <Image
            src={"/images/game11.png"}
            alt='Our game'
            // width={276}
            // height={458}
            fill
            className=' z-[-2] object-fill'
          /> */}
          <div className='w-full h-full z-[2] absolute top-0 left-0 group-hover:bg-game-hover-gradient transition-all !duration-[0.4s] ease-in-out' />
          <img
            src={"/images/game11.png"}
            alt='Our game'
            className='w-full h-full'
          />
          <BoxShadowEffect />
        </div>
      </div>

      <div className='w-full grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-[9.5px] md:gap-3'>
        {[
          "/images/game12.png",
          "/images/game13.png",
          "/images/game14.png",
          "/images/game15.png",
          "/images/game16.png",
        ]?.map((item, index) => (
          <div
            key={index}
            className={`relative group  transition-all !duration-[0.4s] ease-in-out cursor-pointer  min-h-[271px] sm:min-h-max  border-4 border-transparent hover:border-brand-blue 
            
            ${index === 4 ? "hidden lg:block  " : "block  "}
            `}>
            {/* <Image
              src={item}
              alt='Our game'
              // width={276}
              // height={458}
              fill
              className={
                index === 4 ? "  z-[-2] object-fill" : " z-[-2] object-fill"
              }
            /> */}
            <div className='w-full h-full z-[2] absolute top-0 left-0 group-hover:bg-game-hover-gradient transition-all !duration-[0.4s] ease-in-out' />
            <img src={item} alt='Our game' className='w-full h-full' />
            <BoxShadowEffect />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ourgames;

const BoxShadowEffect = () => {
  const [isBtn1Hover, setisBtn1Hover] = useState(false);
  const [isBtn2Hover, setisBtn2Hover] = useState(false);
  return (
    <div className='pl-2 pb-[11px] absolute inset-0 z-[3]  flex flex-col items-start justify-end opacity-0 group-hover:opacity-100 transition-all !duration-[0.5s] ease-in-out'>
      <span className='text-brand-white text-[23px] lg:text-subheading leading-normal tracking-[-0.237px] font-medium'>
        Brickz
      </span>
      <div className='flex items-center gap-[5.92px]'>
        <div
          onMouseEnter={() => setisBtn1Hover(true)}
          onMouseLeave={() => setisBtn1Hover(false)}
          className='relative w-[46px] h-[46px] hidden md:block'>
          <Image
            src={
              isBtn1Hover
                ? "/images/icons/android-gradient-border.svg"
                : "/images/icons/Frame2.svg"
            }
            alt='android-logo'
            fill
            className='object-fill'
          />
        </div>

        <div
          onMouseEnter={() => setisBtn2Hover(true)}
          onMouseLeave={() => setisBtn2Hover(false)}
          className='relative w-[46px] h-[46px] hidden md:block'>
          <Image
            src={
              isBtn2Hover
                ? "/images/icons/gradient-apple-with-border.svg"
                : "/images/icons/Frame7.svg"
            }
            alt='android-logo'
            fill
            className='object-fill'
          />
        </div>

        <div
          onMouseEnter={() => setisBtn1Hover(true)}
          onMouseLeave={() => setisBtn1Hover(false)}
          className='relative w-[28px] h-[28px] md:hidden block'>
          <Image
            src={
              isBtn1Hover
                ? "/images/icons/android-small-hover.svg"
                : "/images/icons/android-icon.svg"
            }
            alt='android-logo'
            fill
            className='object-fill'
          />
        </div>

        <div
          onMouseEnter={() => setisBtn2Hover(true)}
          onMouseLeave={() => setisBtn2Hover(false)}
          className='relative w-[28px] h-[28px] md:hidden block'>
          <Image
            src={
              isBtn2Hover
                ? "/images/icons/apple-hover-icon-small.svg"
                : "/images/icons/apple-icon.svg"
            }
            alt='android-logo'
            fill
            className='object-fill'
          />
        </div>
      </div>
    </div>
  );
};
