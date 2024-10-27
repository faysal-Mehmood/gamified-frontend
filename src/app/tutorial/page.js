"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Icon from "@/utils/icons";

const data = [
  {
    id: 1,
    src: "/images/play_gradient.svg",
    alt: "Play",
    rotate: 0,
    heading: "PLAY",
    text: "Have fun playing our games, also collect WINR rewards (WINR)",
  },
  {
    id: 2,
    src: "/images/earn_up.png",
    alt: "Earn",
    rotate: 285,
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
  const sliderRef = useRef(null);

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
  console.log("activeSlide", activeSlide);
  return (
    <div className="w-full h-full xxl-max-screen">
      <Slider ref={sliderRef} {...settings}>
        {data.map((item) => (
          <div key={item.id} className="relative w-full !flex">
            <Image
              src={item.src}
              alt={item.alt}
              width={700}
              height={1100}
              style={{ transform: `rotate(${item.rotate}deg)` }}
            />
            <div className="flex flex-col  items-center justify-end  ">
              <div className="w-full flex flex-col justify-center pb-[104px]">
                <h2 className="font-Roboto text-large-heading  bg-gradient-to-r from-[#4D89F0] to-[#4D89F0] bg-clip-text text-transparent font-bold capitalize mb-4">
                  {item.heading}
                </h2>
                <p className="font-Roboto text-small-paragraph md:text-[45px] font-medium text-brand-white leading-[52px]">
                  {item.text}
                </p>
              </div>
              <div className="flex items-center">
                <div className="flex space-x-2">
                  {data.map((slide, index) => (
                    <div
                      key={slide.id}
                      onClick={() => goToSlide(index)}
                      className={`cursor-pointer h-5 rounded-full bg-gray-400 transition duration-300 ${
                        index === activeSlide
                          ? "bg-main-gradient w-[140px]"
                          : "bg-brand-white w-5"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex space-x-4 pb-11">
                  <Icon
                    name="arrow-left"
                    className={`cursor-pointer  ${
                      activeSlide === 0
                        ? "opacity-20 cursor-not-allowed"
                        : "opacity-100 hover:opacity-80"
                    }`}
                    onClick={prevSlide}
                  />
                  {activeSlide === 2 ? (
                    <button className="bg-main-gradient min-w-[209px] py-6 rounded-[35px]">
                      Get startd
                    </button>
                  ) : (
                    <Icon
                      name="arrow-right"
                      onClick={nextSlide}
                      className="cursor-pointer hover:opacity-80"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
