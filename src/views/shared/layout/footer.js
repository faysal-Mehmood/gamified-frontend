import Image from "next/image";

const WorkWithUsSection = () => {
  return (
    <section className="xxl-max-screen overflow-hidden relative xl:px-[100px] lg:px-[50px] md:px-16 lg:border-none border-t border-[#FFFFFF] ">
      <div className="flex lg:flex-row flex-col lg:items-start items-center 2xl:gap-[60px] xl:gap-[80px] md:gap-[35px] gap-[20px] md:pt-[56px] pt-[25px] lg:pb-[76px] lg:border-t border-[#FFFFFF] w-full">
        {/* Navigation Links */}
        <div className="2xl:max-w-[32%] xl:max-w-[36%] lg:max-w-[35%] w-full uppercase flex flex-col  lg:items-start items-center">
          {["Home", "How It Works", "Our Games", "Work With Us"].map(
            (text, index) => (
              <a
                key={index}
                href={
                  text === "Home"
                    ? "/"
                    : `#${text.toLowerCase().replace(/\s+/g, "-")}`
                }
                className="hover:underline xl:text-big-title text-[40px] leading-normal font-medium lg:tracking-[-0.5px] tracking-[-0.4px] text-brand-white lg:text-start text-center"
              >
                {text}
              </a>
            )
          )}
        </div>
        <div className="md:max-w-[400px] sm:max-w-[300px] max-w-[200px] w-full h-[1px] bg-brand-white-grey mx-auto lg:hidden !mt-0"/>
        <div className="w-full flex flex-col space-y-2 lg:items-start items-center lg:pb-0 md:pb-[35px] pb-10 lg:border-none border-b border-brand-white-grey">
          <p className="text-small-paragraph leading-normal font-light tracking-[-0.24px] text-brand-white">
            Contact Us at
          </p>
          <a
            href="mailto:support@winrgames.com"
            className="xl:text-default-title text-paragraph leading-normal font-medium tracking-[-0.4px] text-brand-white md:!mb-[35px] sm:!mb-[30px] !mb-[20px] sm:!mt-[5px]"
          >
            support@winrgames.com
          </a>
          <div className="md:max-w-[400px] sm:max-w-[300px] max-w-[200px] w-full h-[1px] bg-brand-white-grey mx-auto lg:hidden !mt-0 lg:!mb-0 md:!mb-[35px] !mb-[20px]"/>
          <p className="text-small-paragraph leading-normal font-light tracking-[-0.24px] !mt-0 !mb-[10px] text-brand-white">
            Stay Connected
          </p>
          <div className="flex justify-center items-center gap-[10px] !mt-0">
            {[
              {
                href: "https://facebook.com",
                alt: "Facebook",
                src: "/images/facebook.svg",
              },
              {
                href: "https://twitter.com",
                alt: "Twitter",
                src: "/images/twitter.svg",
              },
              {
                href: "https://instagram.com",
                alt: "Instagram",
                src: "/images/instagram.svg",
              },
            ].map((icon, index) => (
              <a
                key={index}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 bg-transparent w-10 h-10 flex items-center justify-center rounded-[8px] border border-[#4D89F0]"
              >
                <div className="relative top-0 left-0 w-6 h-6">
                  <Image src={icon.src} alt={icon.alt} fill />
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>

      <div className="flex lg:flex-row flex-col lg:items-start items-center 2xl:gap-[60px] xl:gap-[80px] md:gap-[35px] gap-[20px] lg:pt-[56px] md:pt-[35px] pt-[30px] md:pb-[76px] md:pb-10 pb-[30px] lg:border-t border-[#FFFFFF] w-full">
        {/* Footer Section */}
        
        <div className="2xl:max-w-[32%] xl:max-w-[36%] lg:max-w-[35%] w-full lg:text-start text-center">
          <p className="lg:text-caption text-[16px] leading-normal font-semibold tracking-[-0.2px] text-[#ffffff]">
            © 2014 <span className="text-[#4D89F0]">WINR Games®.</span> All
            Rights Reserved
          </p>
        </div>

        {/* Terms and Conditions */}
        <div className="w-full lg:text-start text-center">
          <a
            href="#terms"
            className="lg:text-caption text-[16px] leading-normal font-normal tracking-[-0.2px] text-light-grey"
          >
            Terms & Conditions & Privacy Policy
          </a>
        </div>
      </div>
      <div className="absolute lg:right-0 md:right-0 sm:right-[-25%] right-[-45%] top-0">
        <div className="relative top-0 left-0 w-[523px] lg:h-[650px] md:h-[1000px] h-[700px]">
          <Image
            src="/images/footerVector.svg"
            alt="footer-vector"
            fill
            className="absolute"
          />
        </div>
      </div>
    </section>
  );
};

export default WorkWithUsSection;
