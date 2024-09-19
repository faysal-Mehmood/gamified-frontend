import Image from "next/image";
import React from "react";

const StartEarning = () => {
  return (
    <section className="relative xxl-max-screen xl:pl-[100px] lg:pl-[50px] md:pl-16 pt-28">
      {/* Background Shadow with Blur Effect */}
      <div className="absolute left-[50%] top-[376px] w-1/2 h-1/2 inset-0 bg-[rgba(96,188,119,0.6)] rounded-[728px] blur-[320px]"></div>

      {/* Content Section */}
      <div className="relative flex lg:flex-row flex-col-reverse justify-between items-center py-8 xl:mb-[263px] lg:mb-[220px] md:mb-[150px] mb-[90px]">
        <div className="md:px-0 sm:px-[30px] px-5">
          <div className="max-w-[1058px]">
            <h2
              className="md:text-[60px] text-big-title lg:text-large-heading font-bold uppercase md:leading-normal leading-[56px] bg-gradient-to-r from-[#4D89F0] to-[#9184EA] 
            bg-clip-text text-transparent !z-10"
            >
              Start Playing, Start Earning
            </h2>
          </div>
          <p className="max-w-[729px] w-full text-[16px] md:text-button-text font-light md:leading-[-0.22px] leading-[-0.16px] text-brand-white">
            Join millions of players who are turning their gaming passion into
            real rewards. Download our apps today and start earning WINR
            rewards!
          </p>
          <div className="flex flex-col justify-start space-y-4 lg:pt-14 md:pt-8 pt-5">
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Image
                src="/images/googleplay.svg"
                alt="Google Play Store"
                width={290}
                height={84}
                className="lg:w-[290px] sm:w-[250px] w-[200px] transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </a>
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Image
                src="/images/App_Store.svg"
                alt="Apple App Store"
                width={255}
                height={84}
                className="lg:w-[255px] sm:w-[250px] w-[200px] transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </a>
          </div>
        </div>
        {/* <div className="relative "> */}
        <Image
          src="/images/Frame73.png"
          className="lg:hidden"
          alt="money image"
          width={975}
          height={775}
        />
        {/* </div> */}
        <Image
          src="/images/Frame73.png"
          className="absolute right-0 top-[-40px] lg:block hidden"
          alt="money image"
          width={975}
          height={591}
        />
      </div>
      <div className="flex">
        <Image
          src="/images/WNRVector.svg"
          className=""
          alt="logo image"
          width={581}
          height={153}
        />
      </div>
    </section>
  );
};

export default StartEarning;
