/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

const WorkWithUsSection = () => {
  return (
    <section
      className='xxl-max-screen flex flex-col-reverse md:flex-row gap-[30px] items-center justify-between pt-[168px] pb-16 xl:px-[100px] lg:px-[50px] md:px-16 relative'
      style={{
        background: 'url("/images/vector4.svg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "bottom",
      }}>
      <div className='md:max-w-[664px] text-left sm:px-0 px-5'>
        <h2
          className='text-[50px] lg:text-[80px] font-bold uppercase leading-normal tracking-normal bg-main-gradient
            bg-clip-text text-transparent'>
          WORK WITH US
        </h2>
        <div className='space-y-5'>
          <p className='text-[#FFFFFFE5] text-base lg:text-[22px] font-light leading-normal tracking-normal'>
            Calling all casual game developers! Unleash the potential of your
            game by seamlessly integrating it into the WINR platform. Our unique
            rewards system generates value for the players and for you, so you
            can focus on what you do best: creating amazing games!
          </p>
          <p className='text-[#FFFFFFE5] text-base lg:text-[22px] font-bold leading-normal tracking-normal'>
            What are you waiting for? Get started today!
          </p>
          <button className='font-Oswald w-max h-auto  border-none outline-none text-small-heading tracking-[-0.24px] text-white rounded-full py-[10px] px-[50px] bg-main-gradient  lg:!mt-10 md:!mt-[50px] !mt-[65px] transition duration-300'>
            Submit Your Game
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className='md:mt-10 md:w-1/2 flex justify-center'>
        <div className='relative w-[369px] h-[230px] lg:w-[591px] lg:h-[368px]'>
          <Image
            src='/images/hands1.svg' // Replace with the correct path to your image
            alt='Shaking Hands'
            layout='fill'
            objectFit='contain'
          />
        </div>
      </div>
    </section>
  );
};

export default WorkWithUsSection;
