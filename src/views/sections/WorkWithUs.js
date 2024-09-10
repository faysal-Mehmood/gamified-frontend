import Image from "next/image";

const WorkWithUsSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-black via-blue-900 to-black py-12 px-6 md:px-16 lg:px-24">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h2
          className="text-[90px] lg:text-5xl font-bold bg-gradient-to-r from-[#4D89F0] to-[#9184EA] 
            bg-clip-text text-transparent"
        >
          WORK WITH US
        </h2>
        <p className="text-gray-300 text-lg lg:text-xl">
          Calling all casual game developers! Unleash the potential of your game
          by seamlessly integrating it into the WINR platform. Our unique
          rewards system generates value for the players and for you, so you can
          focus on what you do best: creating amazing games!
        </p>
        <p className="font-bold text-white">
          What are you waiting for? Get started today!
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300">
          Submit Your Game
        </button>
      </div>

      {/* Image Section */}
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
        <div className="relative w-64 h-64 lg:w-96 lg:h-96">
          <Image
            src="/images/hands1.svg" // Replace with the correct path to your image
            alt="Shaking Hands"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default WorkWithUsSection;
