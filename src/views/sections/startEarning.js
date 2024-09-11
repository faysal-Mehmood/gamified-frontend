import Image from "next/image";
import React from "react";

const StartEarning = () => {
  return (
    <section className="relative xxl-max-screen pl-[100px] ">
      {/* Background Shadow with Blur Effect */}
      <div className="absolute inset-0 bg-[rgba(96,188,119,0.6)] rounded-[728px] blur-[400px]"></div>

      {/* Content Section */}
      <div className="relative flex  items-center justify-center py-8 mb-[184px]">
        <div>
          <div className="max-w-[1058px]">
            <h2
              className="text-[50px] lg:text-large-heading font-bold uppercase leading-normal bg-gradient-to-r from-[#4D89F0] to-[#9184EA] 
            bg-clip-text text-transparent"
            >
              Start Playing, Start Earning
            </h2>
          </div>
          <p className="w-[54%] text-base md:text-small-text font-light leading-normal tracking-medium  text-brand-white">
            Join millions of players who are turning their gaming passion into
            real rewards. Download our apps today and start earning WINR
            rewards!
          </p>

          <div className="flex flex-col justify-start space-y-4 pt-14">
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/googleplay.svg"
                alt="Google Play Store"
                width={290}
                height={86}
              />
            </a>
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/App_Store.svg"
                alt="Apple App Store"
                width={255}
                height={84}
              />
            </a>
          </div>
        </div>

        <Image
          src="/images/Frame73.svg"
          className="absolute right-0  top-[20px]"
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
