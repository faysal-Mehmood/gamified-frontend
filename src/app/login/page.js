import React from "react";
import Image from "next/image";
import loginLogo from "@/assets/Images/login-logo.svg";
import centerLogin from "@/assets/Images/login-center-line.svg";
import googleLogin from "@/assets/Images/google-login.svg";
import appleLogin from "@/assets/Images/apple-login.svg";
import emailLogin from "@/assets/Images/email-login.svg";
import Link from "next/link";

// detail of buttons for creating multiple buttons through map
const loginOptions = [
  {
    src: appleLogin,
    label: "Sign in with Apple",
    width: "38px",
    height: "46px",
  },
  {
    src: googleLogin,
    label: "Sign in with Google",
    width: "46px",
    height: "46px",
  },
  {
    src: emailLogin,
    label: "Sign in with Email",
    width: "22px",
    height: "31px",
  },
];

const page = () => {
  return (
    <div className="flex h-screen items-center  xxl-max-screen">
      <div className="w-full flex flex-col lg:flex-row  items-center justify-center lg:justify-between gap-0 md:gap-5 xl:gap-[100px] p-5 xl:px-24">
        {/* left side image with heading */}
        <div className=" flex flex-col items-center justify-center text-center  gap-10 xl:gap-6 ">
          <Image
            src={loginLogo}
            alt="logicImage"
            className=" md:w-[151px] md:h-[133px] smx:w-[98px] smx:h-[87px] "
          />
          <div>
            <h1 className=" font-bold  text-transparent bg-gradient-to-r from-[#398AF2] to-[#A083E9] bg-clip-text text-stroke-custom gap-5  mb-4 lg:mb-2 md:mb-0 text-[36px] md:text-[56px] ">
              WINR Rewards
            </h1>
            <div>
              <h2 className=" font-bold   text-transparent my-2 bg-gradient-to-r from-[#398AF2] to-[#A083E9] bg-clip-text text-stroke-custom text-[18px] md:text-[28px]">
                Free instant withdrawals
              </h2>
              <h2 className=" font-bold   leading-8  lg3:leading-9 text-transparent bg-gradient-to-r from-[#398AF2] to-[#A083E9] bg-clip-text text-stroke-custom text-[18px] md:text-[28px]">
                {" "}
                Over $1,000,000 already paid out
              </h2>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            src={centerLogin}
            alt="centerLine"
            className="rotate-90 lg:rotate-0 h-60 lg:h-[669px]"
          />
        </div>
        <Link href={"/tutorial"} className="flex flex-col gap-[10px] md:gap-4">
          {loginOptions.map((item, index) => (
            <LoginButton item={item} buttonIndex={index} key={index} />
          ))}
        </Link>
      </div>
    </div>
  );
};

// seprate component for button
const LoginButton = ({ item, buttonIndex }) => {
  return (
    <div
      className={`flex items-center justify-center w-[300px] smx:w-[335px] smx:h-49px] md:w-[504px] md:h-[75px] gap-2  text-base xmd:text-[24px] font-semibold  text-brand-white   py-2 rounded-[3rem] bg-button-gradient`}
    >
      <div
        className={`w-[50px] flex justify-start
         items-center`}
      >
        <Image {...item} alt={item.label} />
      </div>

      <p>{item.label}</p>
    </div>
  );
};

export default page;
