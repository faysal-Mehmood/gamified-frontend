import React from "react";
import Image from "next/image";
import loginLogo from "@/assets/Images/login-logo.svg";
import centerLogin from "@/assets/Images/login-center-line.svg";
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
    <div className="flex h-screen items-center  xxl-max-screen">
      <div className="w-full flex flex-col lg:flex-row  items-center justify-center lg:justify-between gap-[100px] p-5 xmd:px-24">
        {/* left side image with heading */}
        <div className=" flex flex-col items-center justify-center text-center  gap-10 xl:gap-6 ">
          <Image
            src={loginLogo}
            alt="logicImage"
            className=" md:w-[151px] md:h-[133px] smx:w-[98px] smx:h-[87px] "
          />
          <div>
            <h1 className=" font-bold  text-transparent bg-gradient-to-r from-[#398AF2] to-[#A083E9] bg-clip-text text-stroke-custom gap-5  mb-4 lg:mb-2 md:mb-0">
              WINR Rewards
            </h1>
            <div>
              <h2 className=" font-bold   text-transparent my-2 bg-gradient-to-r from-[#398AF2] to-[#A083E9] bg-clip-text text-stroke-custom">
                Free instant withdrawals
              </h2>
              <h2 className=" font-bold   leading-8 md:leading-5 lg3:leading-9 text-transparent bg-gradient-to-r from-[#398AF2] to-[#A083E9] bg-clip-text text-stroke-custom">
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
            className="rotate-90 lg:rotate-0 h-60 md:h-[669px]  shadow-custome-shadow2"
          />
        </div>

        {/* map for all three buttons */}
        <div className="flex flex-col gap-[10px] md:gap-4">
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
    <button className="flex items-center justify-center w-[300px] smx:w-[335px] smx:h-49px] md:w-[520px] md:h-[75px] gap-4 text-base xmd:text-[24px] font-semibold  text-brand-white   py-2 rounded-[3rem] bg-button-gradient">
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
