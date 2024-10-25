/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

const WorkWithUsSection = () => {
  return (
    <section
      id="work-with-us"
      className="xxl-max-screen  flex bg-transparent md:bg-inherit flex-col-reverse md:flex-row gap-[10px] md:gap-[22px] items-center justify-between pt-[105px] md:pt-[168px] pb-16 xl:px-[100px] lg:px-[50px] md:px-16 relative"
    >
      <div className="md:max-w-[664px] text-left sm:px-0 px-5 relative z-10">
        <h2
          className="text-[50px] lg:text-[80px] font-bold uppercase leading-normal tracking-normal bg-main-gradient
            bg-clip-text text-transparent"
        >
          WORK WITH US
        </h2>
        <div className="space-y-5">
          <p className="text-[#FFFFFFE5] text-base lg:text-[22px] font-light leading-normal tracking-[-0.22px]">
            Calling all casual game developers! Unleash the potential of your
            game by seamlessly integrating it into the WINR platform. Our unique
            rewards system generates value for the players and for you, so you
            can focus on what you do best: creating amazing games!
          </p>
          <p className="text-[#FFFFFFE5] text-base lg:text-[22px] font-bold leading-normal tracking-normal">
            What are you waiting for? Get started today!
          </p>
          <button className="group font-Oswald w-max  h-[69px]  border-none outline-none text-small-heading tracking-[-0.24px] text-white rounded-full  px-[50px] bg-main-gradient  lg:!mt-10 md:!mt-[50px] !mt-[65px] transition-all duration-300 ease-in-out hover:bg-[linear-gradient(90deg,rgba(77,137,240,0.3)_0%,rgba(145,132,234,0.3)_100%)] btn-hover-1">
            <span className="text-white group-hover:text-brand-blue transition-colors ease-in-out">
              Submit Your Game
            </span>
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:mt-10 md:w-1/2 flex justify-center relative z-10 pt-[56px] md:pt-0 pb-[48px] md:pb-0">
        <div className="relative w-[369px] h-[230px] lg:w-[591px] lg:h-[368px] z-10">
          <Image
            src="/images/hands1.svg" // Replace with the correct path to your image
            alt="Shaking Hands"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* top mobile */}
        <img
          src="/images/WUS-m-border-t.svg"
          alt="border"
          className=" max-w-full w-[calc(100%-50%)] h-[2px] md:h-0 object-cover  absolute top-0 right-0"
        />

        {/* left mobile */}
        <img
          src="/images/WUS-m-border-l.svg"
          alt="border"
          className="w-[2px] md:w-0 h-full object-cover  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />

        {/* bottom mobile */}
        <img
          src="/images/WUS-m-border-b.svg"
          alt="border"
          className="max-w-full h-[2px] md:h-0 object-cover w-[calc(100%-50%)] absolute bottom-0 left-0"
        />
      </div>

      {/* top desk */}
      <img
        src="/images/WUS-border-t.svg"
        alt="border"
        className=" max-w-full h-0 md:h-1 object-cover  absolute top-[168px] right-[-153px] lg:right-[-88px] xl:right-0"
      />

      {/* left desk */}
      <img
        src="/images/WUS-border-l.svg"
        alt="border"
        className="w-0 md:w-1 h-[calc(100%-168px)] object-cover  absolute bottom-0 right-[265px] lg:right-[330px] xl:right-[420px]"
      />

      {/* bottom desk */}
      <img
        src="/images/WUS-border-b.svg"
        alt="border"
        className="max-w-full h-0 md:h-1 object-cover w-[calc(100%-260px)] lg:w-[calc(100%-330px)] xl:w-[calc(100%-419px)] absolute bottom-0 left-0"
      />
    </section>
  );
};

export default WorkWithUsSection;
