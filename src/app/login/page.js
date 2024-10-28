import React from "react";
import Image from "next/image";
import loginLogo from "@/assets/Images/login-logo.svg";
import centerLogin from "@/assets/Images/login-center-line.png";
import googleLogin from "@/assets/Images/google-login.svg";
import appleLogin from "@/assets/Images/apple-login.svg";
import emailLogin from "@/assets/Images/email-login.svg";

// detail of buttons for creating multiple buttons through map
const loginOptions = [
  {
    imageSrc: appleLogin,
    altText: "sign in with apple",
    label: "Sign in with Apple",
  },
  {
    imageSrc: googleLogin,
    altText: "sign in with google",
    label: "Sign in with Google",
  },
  {
    imageSrc: emailLogin,
    altText: "sign in with email",
    label: "Sign in with Email",
  },
];

const page = () => {
  return (
    // main div
    <div className="  flex items-center justify-center md:h-screen smx:h-auto bg-login-background ">
      <div className=" xxl:w-[1242px]  max-h-full flex xxl:flex-row smx:flex-col md:flex-row xxl:justify-between md:justify-around items-center justify-center    xl:w-[1000px] lg3:w-[950px] lg:w-[900px] smx:w-full smx:py-12 ">
        {/* left side image with heading */}
        <div className=" flex flex-col items-center justify-center text-center xxl:w-[526px] lg:w-[400px] xmd:w-[350px] md:w-[310px] gap-10 xl:gap-6 lg3:gap-4 lg:gap-3 md:gap-2 smx:gap-6">
          <Image
            src={loginLogo}
            alt="logicImage"
            className=" md:w-[151px] md:h-[133px] smx:w-[98px] smx:h-[87px] "
          />
          <div>
            <h1 className=" font-bold xxl:text-[56.2px] lg3:text-[50px] lg:text-[48px] md:text-[45px] smx:text-[36px] smx:leading-[43px] xxl:leading-[65.87px] xmd:leading-10 text-transparent bg-gradient-to-r from-[#398AF2] to-[#A083E9] bg-clip-text text-stroke-custom gap-5  mb-4 lg:mb-2 md:mb-0">
              WINR Rewards
            </h1>
            <div>
              <h2 className=" font-bold xxl:text-[28.11px] lg3:text-[25px] md:text-[23px] xxl:leading-8 smx:text-[18px] smx:leading-5  md:leading-5 lg3:leading-9  text-transparent my-2 bg-gradient-to-r from-[#398AF2] to-[#A083E9] bg-clip-text text-stroke-custom">
                Free instant withdrawals
              </h2>
              <h2 className=" font-bold xxl:text-[28.11px] lg3:text-[25px] md:text-[23px] smx:text-[18px] smx:leading-5  leading-8 md:leading-5 lg3:leading-9 text-transparent bg-gradient-to-r from-[#398AF2] to-[#A083E9] bg-clip-text text-stroke-custom">
                {" "}
                Over $1,000,000 already paid out
              </h2>
            </div>
          </div>
        </div>
        <div className=" relative  ">
          <Image
            src={centerLogin}
            alt="centerLine"
            className=" smx:rotate-90 md:rotate-0 smx:h-60 md:h-full  smx:w-full shadow-custome-shadow2"
          />
        </div>

        {/* map for all three buttons */}
        <div className="flex flex-col xxl:gap-5 lg3:gap-3 lg:gap-2 md:gap-2 smx:gap-2">
          {loginOptions.map((option, index) => (
            <LoginButton
              key={index}
              imageSrc={option.imageSrc}
              altText={option.altText}
              label={option.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// seprate component for button
const LoginButton = ({ imageSrc, altText, label }) => {
  return (
    <button className="flex items-center justify-center gap-4 text-button-text lg:text-[20px] xxl:font-semibold lg:font-medium text-brand-white xxl:w-[504px] xxl:h-[75.12px] xl:w-[400px] xl:h-[70px] lg3:w-[350px] lg:h-[60px] lg:w-[310px] md:w-[300px] md:h-[58px] smx:w-[335px] smx:h-[49px] smx:text-[16.11px] py-2 rounded-[3rem] bg-button-gradient">
      <Image
        src={imageSrc}
        alt={altText}
        className=" lg3:w-[38px] lg3-h-[46px]"
      />
      <p>{label}</p>
    </button>
  );
};

export default page;
