import React from "react";
import Image from "next/image";

import WebLogo from "@/app/images/owinr-logo.svg";
import Link from "next/link";

const Header = () => {
  return (
    <nev className='xxl-max-screen mx-auto  py-[35px] pl-[110px] pr-[100px] flex items-center justify-between'>
      <Image src={WebLogo} width={156} height={56} alt='logo' />
      <div className='flex items-center gap-[50px]'>
        <Link
          href='#'
          className='font-normal text-small-paragraph tracking-[-0.24px] text-brand-white-grey'>
          Home
        </Link>
        <Link
          href='#'
          className='font-normal text-small-paragraph tracking-[-0.24px] text-brand-white-grey'>
          Games
        </Link>
        <Link
          href='#'
          className='font-normal text-small-paragraph tracking-[-0.24px] text-brand-white-grey'>
          How It Works
        </Link>
      </div>

      <button className='font-Oswald w-max h-auto border-none outline-none text-small-paragraph tracking-[-0.24px] text-white rounded-full py-[15px] px-[50px] bg-main-gradient'>
        Download Now
      </button>
    </nev>
  );
};

export default Header;
