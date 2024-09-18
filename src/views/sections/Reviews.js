"use client";
import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
  const [currentSlide, setCurrentSlider] = useState(0);
  const [fitBackColor, setFitBackColor] = useState(false);
  const [circle, setCircle] = useState();

  // const [nav1, setNav1] = useState(null);
  // const [nav2, setNav2] = useState(null);
  // let sliderRef1 = useRef(null);
  let sliderRef = useRef(null);

  // useEffect(() => {
  //   setNav1(sliderRef1);
  //   setNav2(sliderRef);
  // }, []);

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

  // const settings2 = {
  //   dots: false,
  //   arrows: false,
  //   infinite: true,
  //   speed: 700,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   afterChange: (current) => {
  //     setCircle(current);
  //   },
  // };

  return (
    <section className='w-full mx-auto mb-0 md:mb-[150px] xmd:mb-[316px]'>
      <h1 className='relative z-10 font-bold text-default-title xmd:text-large-heading uppercase leading-[60px] text-center xmd:leading-[100px] stroke-custom-0 bg-main-gradient bg-clip-text text-fill-transparent w-full lg:w-[1006px] mx-auto mb-[90px] md:mb-[184px] px-[33px]'>
        100,000+ trusted reviews from people JUST like you
      </h1>

      <div className='w-full h-auto relative '>
        {/* <div className='w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  '>
          <Slider
            {...settings2}
            asNavFor={nav2}
            ref={(slider) => (sliderRef1 = slider)}
            className='h-full review-circle-scroll '>
            {Array(1, 2, 3, 4, 5, 6).map((i, index) => (
              <div key={i} className='h-full relative bg-black'>
                <div
                  className={`${
                    circle + 2 === index
                      ? "w-[222px] h-[222px] "
                      : "w-[120px] h-[120px]"
                  }  ${
                    circle + 1 === index ? "bottom-0 left-0" : ""
                  } absolute border-brand-blue rounded-full border-2  backdrop-blur-[10px] bg-circle-gradient `}></div>
              </div>
            ))}
          </Slider>
        </div> */}
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          // asNavFor={nav1}
          {...settings}
          className='review-circle-slider relative'>
          {Array(1, 2, 3, 4, 5, 6, 7, 8, 10).map((item, index) => (
            <div
              key={index}
              className={`w-max h-max px-0 md:px-[87.2px] relative z-10  `}>
              <Circle
                fitBackColor={fitBackColor}
                currentSlide={currentSlide}
                index={index}
              />
            </div>
          ))}
        </Slider>
        <div className='w-fit h-max absolute bottom-[70px] left-1/2 transform translate-x-[-118%] z-[5] hidden md:block'>
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

        <div className='w-fit h-max absolute bottom-[70px] left-1/2 transform translate-x-[18%] z-[2] hidden md:block'>
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
    <div className={`w-fit h-fit relative  `}>
      {/* Top circle */}
      <div
        className={`absolute z-[-1] rounded-full border-2 border-brand-blue backdrop-blur-[10px]
          ${fitBackColor ? `bg-circle-gradient` : "bg-circle-gradient"}
          ${
            currentSlide === index
              ? `md:w-[222px] w-[101px] h-[101px] md:h-[222px] left-[-68px] top-[9px] transition-all duration-500 ease-in-out
              ${
                fitBackColor
                  ? "transform translate-y-0 translate-x-[59rem]"
                  : ""
              }`
              : `w-[82px] h-[82px] left-[15px] top-[173px] transition-all duration-500 ease-in-out
              ${
                fitBackColor
                  ? "transform translate-y-80 translate-x-[500px]"
                  : ""
              }`
          }`}
        style={{
          transition: "all 0.5s ease-in-out",
        }}
      />

      <div
        className={`${"w-[451px] md:w-[752px] h-[451px] md:h-[752px]"} flex flex-col justify-start gap-3 md:gap-[46px] items-center rounded-full pt-[53px] md:pt-[70px] px-20 md:px-[129px] pb-16 md:pb-[170px] border-2 blur-bg border-brand-blue flex-shrink-0
         bg-circle-gradient
        `}
        style={{
          transition: "background-color 0.1s ease-in-out",
        }}>
        <div className='md:w-[98px] w-16 h-16 md:h-[98px] p-[18px] flex items-center justify-center relative flex-shrink-0 border-2 border-solid border-transparent rounded-full'>
          <Image
            src='/images/user.svg'
            alt='user'
            width={62}
            height={62}
            className='relative z-[1]'
          />
          <Image src='/images/icon-bg.svg' alt='user' fill />
          <div className='w-fit h-max absolute bottom-0 right-0 z-[2]'>
            <div className='md:w-[29px] w-5 h-5 md:h-[29px] p-[6px] flex-shrink-0 border-1 border-solid border-transparent relative rounded-full'>
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

        <div className='flex items-center gap-0 md:gap-[5px] mt-1'>
          <p className='!font-Oswald font-semibold text-caption text-white tracking-[-0.2px] md:block hidden'>
            4.8
          </p>
          {Array(1, 2, 3, 4, 5).map((i) => (
            <div
              key={i}
              className='relative md:w-[30px] w-[15px] h-[15px] md:h-[30px]'>
              <Image src='/images/outline-star.svg' alt='user' fill />
            </div>
          ))}
        </div>

        <h6 className='font-semibold text-caption md:text-secondary-heading tracking-[-0.201px] md:tracking-[-0.32px] text-brand-white text-center relative z-[2]'>
          Nerve rocking mind bugling..thrill of the game is what makes this app
          standout. Especially anticipates all the surprises it has inside.
        </h6>
        <p className='font-bold text-[12px] md:text-small-text tracking-[-0.12px] md:tracking-[-0.22px] text-center stroke-custom-0 bg-main-gradient bg-clip-text text-fill-transparent relative z-[2]'>
          Dan Ed Esguerra <br /> Reviewing XXX GAME
        </p>

        <div className='w-max h-max absolute left-[128px] bottom-[170px] z-[1]'>
          <Image src='/images/coma.svg' alt='user' width={92} height={76} />
        </div>
      </div>

      {/* Bottom circle */}
      <div
        className={`absolute z-[-1] rounded-full border-2 border-brand-blue backdrop-blur-[10px]
          bg-circle-gradient
          ${
            currentSlide === index
              ? `md:w-[102px] w-10 h-10 md:h-[102px] right-[18px] bottom-[108px] transition-all duration-500 ease-in-out
              ${fitBackColor ? "transform translate-y-80 -translate-x-72" : ""}`
              : `w-[82px] h-[82px] right-[44px] bottom-[107px] transition-all duration-500 ease-in-out
              ${fitBackColor ? "transform -translate-y-80 translate-x-72" : ""}`
          }`}
        style={{
          transition: "all 0.5s ease-in-out",
        }}
      />
    </div>
  );
};
