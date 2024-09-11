"use client";
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Reviews = () => {
  const [currentSlide, setCurrentSlider] = useState([]);
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
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
    afterChange: (current) => setCurrentSlider(current),
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
          className='review-circle-slider '>
          {Array(1, 2, 3, 4, 5).map((item, i) => (
            <div key={i} className='w-max h-max px-[87.2px]'>
              <Circle />
            </div>
          ))}
        </Slider>
        <div className='w-fit h-max absolute bottom-[70px] left-1/2 transform translate-x-[-118%]   z-[5]'>
          <button
            onClick={previous}
            className='w-[50px] h-[50px] p-[13px] flex items-center justify-center flex-shrink-0  border-1  border-solid border-transparent relative rounded-full '>
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

        <div className='w-fit h-max absolute bottom-[70px] left-1/2 transform translate-x-[18%]   z-[2]'>
          <button
            onClick={next}
            className='w-[50px] h-[50px] p-[13px] flex items-center justify-center flex-shrink-0  border-1  border-solid border-transparent relative rounded-full '>
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

const Circle = () => {
  return (
    <div className='w-[752px] h-[752px] flex flex-col justify-start gap-[50px] items-center rounded-full pt-[70px] px-[129px] pb-[170px] border-2 bg-circle-gradient blur-bg  border-brand-blue flex-shrink-0'>
      <div className='w-[98px] h-[98px]  p-[18px] flex items-center justify-center relative flex-shrink-0  border-2  border-solid border-transparent  rounded-full '>
        <Image
          src='/images/user.svg'
          alt='user'
          width={62}
          height={62}
          className='relative z-[1]'
        />
        <Image src='/images/icon-bg.svg' alt='user' fill />
        <div className='w-fit h-max absolute bottom-0 right-0  z-[2]'>
          <div className='w-[29px] h-[29px] p-[6px]  flex-shrink-0  border-1  border-solid border-transparent relative rounded-full '>
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
    </div>
  );
};
