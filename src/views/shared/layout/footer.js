import Image from "next/image";

const WorkWithUsSection = () => {
  return (
    <section className="overflow-hidden relative gap-5 px-[50px] md:px-16 lg:px-24 lg:border-none border-t border-[#FFFFFF] ">
      <div className="flex lg:flex-row flex-col lg:items-start items-center 2xl:gap-[100px] xl:gap-[80px] gap-[50px] md:pt-[56px] pt-[25px] md:pb-[76px] pb-10 lg:border-t border-[#FFFFFF] w-full">
        {/* Navigation Links */}
        <div className="2xl:max-w-[29%] xl:max-w-[36%] lg:max-w-[35%] w-full uppercase flex flex-col space-y-2 lg:items-start items-center">
          {["Home", "How It Works", "Our Games", "Work With Us"].map((text, index) => (
            <a
              key={index}
              href={text === "Home" ? "/" : `#${text.toLowerCase().replace(/\s+/g, "-")}`}
              className="hover:underline xl:text-[50px] text-[40px] xl:leading-[74.1px] leading-[50px] font-medium tracking-[-1%] text-[#ffffff] lg:text-start text-center"
            >
              {text}
            </a>
          ))}
        </div>
        {/* <div className="md:w-[115%] sm:w-[117%] w-[145%] h-[1px] bg-[#FFFFFF] lg:hidden block"/> */}
        {/* Contact Section */}
        <div className="w-full flex flex-col space-y-2 lg:items-start items-center">
          <p className="text-[24px] leading-[29.06px] font-light tracking-[-1%] text-[#ffffff]">Contact Us at</p>
          <a
            href="mailto:support@winrgames.com"
            className="xl:text-[40px] md:text-[35px] text-[25px] xl:leading-[59.28px] md:leading-[40.28px] leading-[30.28px] font-medium tracking-[-1%] text-[#ffffff] md:mb-[30px]"
          >
            support@winrgames.com
          </a>
          <p className="text-[24px] leading-[29.06px] font-light tracking-[-1%] text-[#ffffff]">Stay Connected</p>
          <div className="flex justify-center items-center gap-[10px]">
            {[
              { href: "https://facebook.com", alt: "Facebook", src: "/images/facebook.svg" },
              { href: "https://twitter.com", alt: "Twitter", src: "/images/twitter.svg" },
              { href: "https://instagram.com", alt: "Instagram", src: "/images/instagram.svg" },
            ].map((icon, index) => (
              <a
                key={index}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 bg-transparent w-10 h-10 flex items-center justify-center rounded-[8px] border border-[#4D89F0]"
              >
                <div className="relative top-0 left-0 w-6 h-6"><Image src={icon.src} alt={icon.alt} fill/></div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col lg:items-start items-center 2xl:gap-[100px] xl:gap-[80px] gap-[50px] md:pt-[56px] pt-[25px] md:pb-[76px] pb-10 lg:border-t border-[#FFFFFF] w-full">
        {/* Footer Section */}
        <div className="2xl:max-w-[29%] xl:max-w-[36%] lg:max-w-[35%] w-full lg:text-start text-center">
          <p className="text-[20px] leading-[24.2px] font-semibold tracking-[-1%] text-[#ffffff]">
            © 2014 WINR Games®. All Rights Reserved
          </p>
        </div>

        {/* Terms and Conditions */}
        <div className="w-full lg:text-start text-center">
          <a href="#terms" className="text-[20px] leading-[24.2px] font-normal tracking-[-1%] text-[#ffffff]">
            Terms & Conditions & Privacy Policy
          </a>
        </div>
      </div>
      <div className="absolute lg:right-0 md:right-0 sm:right-[-25%] right-[-45%] top-0">
        <div className="relative top-0 left-0 w-[523px] lg:h-[650px] md:h-[1000px] h-[700px]">
          <Image src="/images/footerVector.svg" alt="footer-vector" fill className="absolute"/>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUsSection;
