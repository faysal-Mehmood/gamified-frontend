"use client";
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
  const [currentSlide, setCurrentSlider] = useState(0);
  const [fitBackColor, setFitBackColor] = useState(false);

  let sliderRef = useRef(null);

  const next = () => {
    setFitBackColor(true);
    sliderRef.slickNext();
  };

  const previous = () => {
    setFitBackColor(true);
    sliderRef.slickPrev();
  };

  const settings = {
    dots: false,
    arrows: false,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    speed: 500,
    className: "slider variable-width",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    afterChange: (current) => {
      setCurrentSlider(current);
      setTimeout(() => {
        setFitBackColor(false);
      }, 100);
    },
  };

  return (
    <section className='w-full mx-auto mb-[316px]'>
      <h1 className='font-bold text-large-heading uppercase leading-[100px] stroke-custom-0 bg-main-gradient bg-clip-text text-fill-transparent w-[1006px] mx-auto mb-[184px] px-[33px]'>
        100,000+ trusted reviews from people JUST like you
      </h1>
      <div className='w-full h-auto relative'>
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
          className='review-circle-slider relative'>
          {Array(1, 2, 3, 4, 5).map((item, index) => (
            <div key={index} className='w-max h-max px-[87.2px] '>
              <Circle
                fitBackColor={fitBackColor}
                currentSlide={currentSlide}
                index={index}
              />
            </div>
          ))}
        </Slider>
        <div className='w-fit h-max absolute bottom-[70px] left-1/2 transform translate-x-[-118%] z-[5]'>
          <button
            onClick={previous}
            className='w-[50px] h-[50px] p-[13px] flex items-center justify-center flex-shrink-0 border-1 border-solid border-transparent relative rounded-full '>
            <Image
              src='/images/arrow-left.svg'
              alt='arrow left'
              width={24}
              height={24}
              className='relative z-[3]'
            />
            <Image src='/images/button-bg.svg' alt='user' fill />
          </button>
        </div>

        <div className='w-fit h-max absolute bottom-[70px] left-1/2 transform translate-x-[18%] z-[2]'>
          <button
            onClick={next}
            className='w-[50px] h-[50px] p-[13px] flex items-center justify-center flex-shrink-0 border-1 border-solid border-transparent relative rounded-full '>
            <Image
              src='/images/arrow-right.svg'
              alt='arrow right'
              width={24}
              height={24}
              className='relative z-[3]'
            />
            <Image src='/images/button-bg.svg' alt='user' fill />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

const Circle = ({ fitBackColor, currentSlide, index }) => {
  return (
    <div className='w-fit h-fit relative'>
      {/* Top circle */}
      <div
        className={`absolute  z-[-1] rounded-full  border-2 border-brand-blue backdrop-blur-[10px]
          ${fitBackColor ? "bg-light-grey" : "bg-circle-gradient "}
          ${
            currentSlide === index
              ? " w-[222px] h-[222px] left-[-68px] top-[9px]"
              : "w-[82px] h-[82px] left-[15px] top-[173px]"
          }`}
        style={{
          transition: "background-color 0.1s  ease-in-out",
        }}
      />

      <div
        className={`w-[752px] h-[752px] flex flex-col justify-start gap-[46px] items-center rounded-full pt-[70px] px-[129px] pb-[170px] border-2 blur-bg border-brand-blue flex-shrink-0   ${
          fitBackColor ? "bg-light-grey" : "bg-circle-gradient"
        }`}
        style={{
          transition: "background-color 0.1s ease-in-out",
        }}>
        <div className='w-[98px] h-[98px] p-[18px] flex items-center justify-center relative flex-shrink-0 border-2 border-solid border-transparent rounded-full '>
          <Image
            src='/images/user.svg'
            alt='user'
            width={62}
            height={62}
            className='relative z-[1]'
          />
          <Image src='/images/icon-bg.svg' alt='user' fill />
          <div className='w-fit h-max absolute bottom-0 right-0 z-[2]'>
            <div className='w-[29px] h-[29px] p-[6px] flex-shrink-0 border-1 border-solid border-transparent relative rounded-full '>
              <Image
                src='/images/android.svg'
                alt='user'
                width={16}
                height={16}
                className='relative z-[3]'
              />
              <Image src='/images/icon-bg.svg' alt='user' fill />
            </div>
          </div>
        </div>

        <div className='flex items-center gap-[5px] mt-1'>
          <p className='!font-Oswald font-semibold text-caption text-white tracking-[-0.2px]'>
            4.8
          </p>
          {Array(1, 2, 3, 4, 5).map((i) => (
            <Image
              key={i}
              src='/images/outline-star.svg'
              alt='user'
              width={30}
              height={30}
            />
          ))}
        </div>

        <h6 className='font-semibold text-secondary-heading tracking-[-0.32px] text-brand-white text-center relative z-[2]'>
          Nerve rocking mind bugling..thrill of the game is what makes this app
          standout. Especially anticipates all the surprises it has inside.
        </h6>
        <p className='font-bold text-small-text tracking-[-0.22px] text-center stroke-custom-0 bg-main-gradient bg-clip-text text-fill-transparent relative z-[2]'>
          Dan Ed Esguerra <br /> Reviewing XXX GAME
        </p>

        <div className='w-max h-max absolute left-[128px] bottom-[170px] z-[1]'>
          <Image src='/images/coma.svg' alt='user' width={92} height={76} />
        </div>
      </div>
      {/* Bottom circle */}
      <div
        className={`absolute z-[-1]  rounded-full bg-circle-gradient border-2 border-brand-blue backdrop-blur-[10px]
          
           ${fitBackColor ? "bg-light-grey" : "bg-circle-gradient"}
          ${
            currentSlide === index
              ? " w-[102px] h-[102px] right-[18px] bottom-[108px]"
              : " w-[82px] h-[82px] right-[44px] bottom-[107px]"
          }`}
        style={{
          transition: "background-color 0.1s  ease-in-out",
        }}
      />
    </div>
  );
};
