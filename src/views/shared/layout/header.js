import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <nav className='w-full absolute left-0 top-0 z-50'>
      <div className='xxl-max-screen mx-auto  pt-[35px] pl-[110px] pr-[100px] flex items-center justify-between'>
        <Image
          src={"/images/owinr-logo.svg"}
          width={156}
          height={56}
          alt='logo'
        />
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
      </div>
    </nav>
  );
};

export default Header;
