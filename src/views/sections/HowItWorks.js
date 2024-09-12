import React from 'react';

const HowItWorks = () => {
  return (
    <section className="bg-dark-blue text-white py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">HOW IT WORKS</h2>

        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          {/* Left Side - Text Content */}
          <div className="flex-1 text-center md:text-left mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold">
                01
              </div>
              <h3 className="text-xl font-semibold ml-4">Play Games</h3>
            </div>
            <p>Enjoy any of WINR’s 20+ games</p>
            <div className="flex justify-center md:justify-start mt-4">
            
              </div>
            </div>
          </div>

          {/* Right Side - Step 1 Image */}
          <div className="flex-1 text-center md:text-right">
            <img src="/images/Group108.png" alt="Step 1 Image" className="max-w-full" />
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-8">
          <div className="flex-1 text-center md:text-left mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="bg-pink-500 rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold">
                02
              </div>
              <h3 className="text-xl font-semibold ml-4">Earn WINR Rewards</h3>
            </div>
            <p>Receive WINR points for each game played</p>
            <div className="mt-4">
              <div className="flex justify-center md:justify-start space-x-4">
                <div className="bg-gray-800 p-3 rounded-lg text-center">
                  <p className="text-lg font-bold">580</p>
                  <p className="text-sm text-gray-400">WINR</p>
                </div>
                <div className="bg-gray-800 p-3 rounded-lg text-center">
                  <p className="text-lg font-bold">150</p>
                  <p className="text-sm text-gray-400">Rewards</p>
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
              <div className="bg-yellow-500 rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold">
                03
              </div>
              <h3 className="text-xl font-semibold ml-4">Convert to Crypto</h3>
            </div>
            <p>Redeem points for USD via PayPal, BTC, ETH, IOTA, or SOL</p>
            <div className="flex justify-center md:justify-start mt-4">
              <div className="bg-gray-800 p-3 rounded-lg text-center">
                <p className="text-lg font-bold">694</p>
                <p className="text-sm text-gray-400">Crypto Points</p>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg text-center">
                <p className="text-lg font-bold">$470.5</p>
                <p className="text-sm text-gray-400">USD</p>
              </div>
            </div>
          </div>

          {/* Right Side - Step 3 Image */}
          <div className="flex-1 mt-6 md:mt-0 md:ml-8">
            <img
              src="/images/Group109.png"
              alt="Step 3 Image"
              className="max-w-full border-4 border-gray-600 rounded-lg"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full mx-2">
            Download for Android
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full mx-2">
            Download for iOS
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
