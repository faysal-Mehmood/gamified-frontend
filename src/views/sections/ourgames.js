"use client";
import React, { useState } from "react";
import Image from "next/image";

const Ourgames = () => {
  return (
    <section className='xxl-max-screen w-full flex flex-col gap-[9.5px] md:gap-4 px-5 md:p-0 relative z-20 md:mt-0 mt-[-150]'>
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
            className={` relative group cursor-pointer w-full  min-h-[271px] md:min-h-[350px] lg:min-h-[458px] border-4 border-transparent hover:border-brand-blue hover:bg-game-hover-gradient 
            ${index === 4 ? "hidden lg:block  " : "block  "}
            `}>
            {/* Image */}
            <Image
              src={item}
              alt='Our game'
              fill
              className={
                index === 4 ? " z-[-2] object-cover" : "z-[-2] object-cover"
              }
            />
            {/* Overlay for title and icon */}
            <BoxShadowEffect />
          </div>
        ))}
      </div>

      <div className='w-full grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-[9.5px] md:gap-3'>
        {/* First image */}
        <div className='relative w-full hidden md:block  min-h-[271px] md:min-h-[350px] lg:min-h-[458px] group cursor-pointer border-4 border-transparent hover:border-brand-blue hover:bg-game-hover-gradient'>
          <Image
            src={"/images/game10.png"}
            alt='Our game'
            // width={276}
            // height={458}
            fill
            className=' z-[-2] object-cover'
          />
          <BoxShadowEffect />
        </div>

        {/* Div occupying grid columns 2, 3, and 4 */}
        <div className='lg:col-span-3 md:col-span-2 col-span-2 md:py-0 py-[50px]'>
          <h2 className='xl:text-banner-large lg:text-[90px] md:text-[70px] text-[68px] font-bold uppercase leading-normal tracking-normal bg-main-gradient bg-clip-text text-transparent text-center'>
            Our Games
          </h2>
          <p className='max-w-[761px] mx-auto text-center text-[#FFFFFFE5] lg:text-[22px] md:text-[18px] text-base font-light leading-normal tracking-normal'>
            Our 20+ games are 100% free to play, and allow you to earn real
            cryptocurrency or cash. Whether you’re into puzzles, strategy, or
            action-packed adventures, we’ve got something for everyone. Create
            one account and start earning rewards today!
          </p>
        </div>

        {/* Second image */}
        <div className='relative group hidden md:block min-h-[271px] md:min-h-[350px] lg:min-h-[458px] cursor-pointer border-4 border-transparent hover:border-brand-blue hover:bg-game-hover-gradient'>
          <Image
            src={"/images/game11.png"}
            alt='Our game'
            // width={276}
            // height={458}
            fill
            className=' z-[-2] object-cover'
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
            className={`relative group cursor-pointer  min-h-[271px] md:min-h-[350px] lg:min-h-[458px]  border-4 border-transparent hover:border-brand-blue hover:bg-game-hover-gradient
            
            ${index === 4 ? "hidden lg:block  " : "block  "}
            `}>
            <Image
              src={item}
              alt='Our game'
              // width={276}
              // height={458}
              fill
              className={
                index === 4 ? "  z-[-2] object-cover" : " z-[-2] object-cover"
              }
            />
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
    <div className='pl-2 pb-[11px] absolute inset-0  bg-opacity-50 flex flex-col items-start justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
      <span className='text-brand-white text-subheading leading-normal tracking-[-0.237px] font-medium'>
        Brickz
      </span>
      <div className='flex items-center gap-[5.92px]'>
        <Image
          onMouseEnter={() => setisBtn1Hover(true)}
          onMouseLeave={() => setisBtn1Hover(false)}
          src={
            isBtn1Hover
              ? "/images/icons/android-gradient-border.svg"
              : "/images/icons/Frame2.svg"
          }
          alt='android-logo'
          width={46}
          height={46}
          className='hidden md:block'
        />

        <Image
          onMouseEnter={() => setisBtn2Hover(true)}
          onMouseLeave={() => setisBtn2Hover(false)}
          src={
            isBtn2Hover
              ? "/images/icons/gradient-apple-with-border.svg"
              : "/images/icons/Frame7.svg"
          }
          alt='android-logo'
          width={46}
          height={46}
          className='hidden md:block'
        />
        <Image
          onMouseEnter={() => setisBtn1Hover(true)}
          onMouseLeave={() => setisBtn1Hover(false)}
          src={
            isBtn1Hover
              ? "/images/icons/android-small-hover.svg"
              : "/images/icons/android-icon.svg"
          }
          alt='android-logo'
          width={28}
          height={28}
          className=' block md:hidden'
        />
        <Image
          onMouseEnter={() => setisBtn2Hover(true)}
          onMouseLeave={() => setisBtn2Hover(false)}
          src={
            isBtn2Hover
              ? "/images/icons/apple-hover-icon-small.svg"
              : "/images/icons/apple-icon.svg"
          }
          alt='android-logo'
          width={28}
          height={28}
          className='block md:hidden'
        />
      </div>
    </div>
  );
};
