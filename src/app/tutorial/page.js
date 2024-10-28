"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Icon from "@/utils/icons";

const data = [
  {
    id: 1,
    src: "/images/play_gradient_1.svg",
    alt: "Play",
    rotate: 25,
    heading: "PLAY",
    text: "Have fun playing our games, also collect WINR rewards (WINR)",
  },
  {
    id: 2,
    src: "/images/earn_up.png",
    alt: "Earn",
    rotate: 259,
    heading: "EARN",
    text: "WINR can then be converted to cash or crypto and withdrawn",
  },
  {
    id: 3,
    src: "/images/play_gradient.svg",
    alt: "Enjoy",
    rotate: 0,
    heading: "ENJOY",
    text: "We are sharing back our revenue so everyone can participate in Web 3.0",
  },
];

export default function Tutorial() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [shouldRotate, setShouldRotate] = useState(false);
  const sliderRef = useRef(null);

  // Check screen size for rotation
  useEffect(() => {
    const handleResize = () => setShouldRotate(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setActiveSlide(next),
  };

  const goToSlide = (index) => {
    sliderRef.current?.slickGoTo(index);
    setActiveSlide(index);
  };

  const nextSlide = () => {
    const nextIndex = (activeSlide + 1) % data.length;
    goToSlide(nextIndex);
  };

  const prevSlide = () => {
    if (activeSlide !== 0) {
      const prevIndex = (activeSlide - 1 + data.length) % data.length;
      goToSlide(prevIndex);
    }
  };

  return (
    <div className="w-full h-full xxl-max-screen relative">
      <Slider ref={sliderRef} {...settings}>
        {data.map((item) => (
          <div
            key={item.id}
            className="relative w-full !flex md:flex-nowrap flex-wrap"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={700}
              height={850}
              style={{
                transform:
                  activeSlide === 1
                    ? `rotate(259deg)`
                    : shouldRotate
                    ? `rotate(${item.rotate}deg)`
                    : "none",
              }}
              className="md:w-[50%] w-full md:h-[850px] h-[584px]"
            />
            <div className="flex flex-col items-start justify-end lg:pr-[135px] pr-[40px]">
              <div className="flex flex-col justify-center pb-[146px] w-full md:px-0 px-5">
                <h2 className="font-Roboto md:text-large-heading text-[44px] md:leading-[95px] leading-[52px] bg-gradient-to-r from-[#4D89F0] to-[#4D89F0] bg-clip-text text-transparent font-bold capitalize md:mb-4 z-10">
                  {item.heading}
                </h2>
                <p className="font-Roboto text-small-paragraph md:text-[45px] md:leading-[52px] leading-[24px] font-medium text-brand-white z-10">
                  {item.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="absolute lg:left-[40%] left-[6%] bottom-[3%] flex items-center">
        <div className="flex space-x-2">
          {data.map((slide, index) => (
            <div
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`cursor-pointer md:h-5 h-2 rounded-full transition duration-300 ${
                index === activeSlide
                  ? "bg-main-gradient md:w-[140px] w-[43px]"
                  : "bg-[#474B5E] w-5"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="absolute md:right-[80px] right-[6%] md:bottom-[-5%] bottom-[0%] flex space-x-4 md:pb-11">
        <Icon
          name="arrow-left"
          className={`cursor-pointer md:w-[70px] w-[42px] ${
            activeSlide === 0
              ? "opacity-20 cursor-not-allowed"
              : "opacity-100 hover:opacity-80"
          }`}
          onClick={prevSlide}
        />
        {activeSlide === 2 ? (
          <button className="bg-main-gradient flex items-center gap-5 md:text-caption text-[16px] md:leading-6 leading-4 px-10 text-white md:py-6 py-2 rounded-[35px]">
            Get started
            <Icon name="white-arrow" />
          </button>
        ) : (
          <Icon
            name="arrow-right-circular"
            onClick={nextSlide}
            className="cursor-pointer hover:opacity-80 md:w-[70px] w-[42px]"
          />
        )}
      </div>
      <div className="absolute right-[6%] top-[6%]">
        <button className="font-Roboto text-white text-secondary-heading leading-default-title">
          Skip
        </button>
      </div>
    </div>
  );
}
