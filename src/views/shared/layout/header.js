"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <nav
      className={`w-full  left-0 top-0 z-50  ${
        menuOpen ? "bg-brand-dark-blur sticky" : "absolute"
      }`}>
      <div
        className={`xxl-max-screen mx-auto  pt-[35px] px-5 md:px-8 lg:px-[50px]  xl:pl-[110px] xl:pr-[100px] flex items-center justify-between `}>
        <Image
          src={menuOpen ? "/images/close.svg" : "/images/menu.svg"}
          width={30}
          height={30}
          alt='logo'
          className='xmd:hidden block cursor-pointer'
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <Image
          src={"/images/owinr-logo.svg"}
          width={156}
          height={56}
          alt='logo'
        />
        <div
          className={`w-full xmd:h-auto h-[calc(100vh-98px)] xmd:w-max fixed ${
            menuOpen ? "top-[90px]" : "top-[-100%] transition-all"
          } left-0 xmd:left-[inherit] xmd:top-[inherit]  xmd:relative  xmd:bg-transparent xmd:p-0 py-5 px-5 bg-brand-dark-blur`}>
          <div className='items-center gap-[50px] flex xmd:flex-row flex-col'>
            <Link
              href='/'
              className='font-normal text-small-paragraph tracking-[-0.24px] text-brand-white-grey hover:text-brand-white transition-all ease-in-out '>
              Home
            </Link>
            <Link
              href='#games'
              className='font-normal text-small-paragraph tracking-[-0.24px] text-brand-white-grey hover:text-brand-white transition-all ease-in-out '>
              Games
            </Link>
            <Link
              href='#howItWorks'
              className='font-normal text-small-paragraph tracking-[-0.24px] text-brand-white-grey hover:text-brand-white transition-all ease-in-out '>
              How It Works
            </Link>
          </div>
        </div>

        <button className='group font-Oswald w-max leading-6 flex items-center justify-center h-auto outline-none text-small-paragraph tracking-[-0.24px] rounded-full py-[17px] px-[14px] xmd:px-[70px] xmd:h-[66px] xmd:w-[224px] bg-main-gradient transition-colors ease-in-out hover:bg-[linear-gradient(90deg,rgba(77,137,240,0.3)_0%,rgba(145,132,234,0.3)_100%)] btn-hover-1'>
          <span className='xmd:block hidden text-white group-hover:text-brand-blue transition-colors ease-in-out'>
            Cash Out
          </span>
          <Image
            src='/images/icons/WithdrawMoney.svg'
            alt='download'
            width={23}
            height={23}
            className='xmd:hidden block'
          />
        </button>
      </div>
    </nav>
  );
};

export default Header;
