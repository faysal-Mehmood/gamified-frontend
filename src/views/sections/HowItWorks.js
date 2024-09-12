import React from "react";

const HowItWorks = () => {
  return (
    <section className="xxl-max-screen text-white py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">HOW IT WORKS</h2>

        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="flex-1 text-center md:text-left mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="w-[130px] h-[130px] flex items-center justify-center text-4xl font-bold border-2 border-blue-500 bg-gradient-to-r from-blue-500/20 to-purple-400/20 rounded-full backdrop-blur-md">
                01
              </div>
              <h3 className="text-xl font-semibold ml-4">Play Games</h3>
            </div>
            <p>Enjoy any of WINR’s 20+ games</p>
          </div>

          <div className="flex-1 text-center md:text-right">
            <img
              src="/images/all-games.png"
              alt="Step 1 Image"
              className="max-w-full"
            />
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-8">
          <div className="flex-1 text-center md:text-left mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start mb-4">
              {/* Updated circle style */}
              <div className="w-[130px] h-[130px] flex items-center justify-center text-4xl font-bold border-2 border-blue-500 bg-gradient-to-r from-blue-500/20 to-purple-400/20 rounded-full backdrop-blur-md">
                02
              </div>
              <h3 className="text-xl font-semibold ml-4">Earn WINR Rewards</h3>
            </div>
            <p>Receive WINR points for each game played</p>
            <div className="mt-4">
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                <div className="inline-flex items-center gap-3 border border-half-grey1 bg-half-grey backdrop-blur-xl p-2.5 rounded-full text-right">
                  <img
                    src="/images/win-small-logo.svg"
                    alt="Small Logo Image"
                    className="max-w-full rounded-lg"
                  />
                  <p className="text-[30px] font-bold leading-none text-white/90 tracking-[-0.3px]">
                    580
                  </p>
                </div>

                <div className="inline-flex items-center gap-3 border border-half-grey1 bg-half-grey backdrop-blur-xl p-2.5 rounded-full text-right">
                  <img
                    src="/images/win-small-logo.svg"
                    alt="Small Logo Image"
                    className="max-w-full rounded-lg"
                  />
                  <p className="text-[30px] font-bold leading-none text-white/90 tracking-[-0.3px]">
                    580
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Side - Text Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              {/* Updated circle style */}
              <div className="w-[130px] h-[130px] flex items-center justify-center text-4xl font-bold border-2 border-blue-500 bg-gradient-to-r from-blue-500/20 to-purple-400/20 rounded-full backdrop-blur-md">
                03
              </div>
              <h3 className="text-xl font-semibold ml-4">Convert to Crypto</h3>
            </div>
            <p>Redeem points for USD via PayPal, BTC, ETH, IOTA, or SOL</p>
          </div>

          {/* Right Side - Step 3 Image */}
          <div className="flex-1 mt-6 md:mt-0 md:ml-8">
            <img
              src="/images/money-coin.png"
              alt="Step 3 Image"
              className="max-w-full rounded-lg"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center mt-8">
          <button className=" bg-circle-gradient border-2 border-brand-blue backdrop-blur-md text-white py-[15px] px-10 rounded-full mx-2">
            Download for Android
          </button>
          <button className=" bg-circle-gradient border-2 border-brand-blue backdrop-blur-md text-white py-[15px] px-10 rounded-full mx-2">
            Download for iOS
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
