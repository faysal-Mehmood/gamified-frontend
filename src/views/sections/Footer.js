// components/WorkWithUsSection.js

import Image from "next/image";

const WorkWithUsSection = () => {
  return (
    <section className="gap-5 px-6 md:px-16 lg:px-24">
      <div className="flex md:flex-row flex-col md:items-start items-center lg:gap-[179px] md:gap-[120px] md:pt-[56px] pt-[25px] md:pb-[76px] pb-10 border-t border-[#FFFFFF] w-full">
        {/* Navigation Links */}
        <div className="max-w-[25%] w-full uppercase flex flex-col space-y-2 items-start">
          <a href="/" className="hover:underline text-[50px] leading-[74.1px] font-medium tracking-[-1%] text-[#ffffff]">
            Home
          </a>
          <a href="#how-it-works" className="hover:underline text-[50px] leading-[74.1px] font-medium tracking-[-1%] text-[#ffffff]">
            How It Works
          </a>
          <a href="#our-games" className="hover:underline text-[50px] leading-[74.1px] font-medium tracking-[-1%] text-[#ffffff]">
            Our Games
          </a>
          <a href="#work-with-us" className="hover:underline text-[50px] leading-[74.1px] font-medium tracking-[-1%] text-[#ffffff]">
            Work With Us
          </a>
        </div>

        {/* Contact Section */}
        <div className="max-w-[500px] w-full uppercase flex flex-col space-y-2 items-start">
          <p className="text-[24px] leading-[29.06px] font-light tracking-[-1%] text-[#ffffff]">Contact Us at</p>
          <a href="mailto:support@winrgames.com" className="text-[40px] leading-[59.28px] font-medium tracking-[-1%] text-[#ffffff] md:mb-[30px]">
            support@winrgames.com
          </a>
          <p className="text-[24px] leading-[29.06px] font-light tracking-[-1%] text-[#ffffff]">Stay Connected</p>
          <div className="flex justify-center items-center gap-[10px]">
            {/* Custom Icons */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/facebook.svg" alt="Facebook" width={20} height={20} className="hover:opacity-70" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/twitter.svg" alt="Twitter" width={20} height={20} className="hover:opacity-70" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/instagram.svg" alt="Instagram" width={20} height={20} className="hover:opacity-70" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:items-start items-center lg:gap-[179px] md:gap-[120px] pt-[30px] md:pb-[47px] pb-[30px] border-t border-[#FFFFFF] w-full">
        {/* Navigation Links */}
        <div className="max-w-[25%] w-full flex flex-col space-y-2 items-start">
        <p className="text-[20px] leading-[24.2px] font-semibold tracking-[-1%] text-[#ffffff]">
            © 2014 WINR Games®. All Rights Reserved
          </p>
          
        </div>

        {/* Contact Section */}
        <div className="max-w-[500px] w-full flex flex-col space-y-2 items-start">
        <a href="#terms" className="text-[20px] leading-[24.2px] font-normal tracking-[-1%] text-[#ffffff]">
            Terms & Conditions & Privacy Policy
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUsSection;
