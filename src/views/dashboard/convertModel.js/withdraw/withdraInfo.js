import Icon from "@/utils/icons";
import React from "react";
import Image from "next/image";
import solona from "@/assets/Images/SOLCoin.svg";
import convert from "../../../../utils/icons/convertnow.svg";
export const WithdraInfoModel = ({
  openWithdrawInfo,
  setOpenWithdrawInfo,
  activeCurrency,
}) => {
  console.log(activeCurrency);
  return (
    <div>
      {/* Modal */}
      {!!openWithdrawInfo && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="fixed inset-0 bg-transparent bg-opacity-75 transition-opacity"
            aria-hidden="true"
            onClick={() => setOpenWithdrawInfo(false)} // Close modal when clicking outside
          ></div>

          {/* <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-[20px] bg-brand-blue-dark text-left shadow-xl transition-all sm:my-8 sm:w-full max-w-[825px] p-[30px]">
                <div className="w-full flex justify-between mb-3 ">
                  <div className="flex items-center justify-center">
                    <h2 className="font-Roboto text-brand-blue-dark-1 text-base md:text-small-heading lg:text-[46px] font-black ">
                      {activeCurrency?.withdrawInfo?.heading}
                    </h2>
                    <div>
                      <Image
                        src={activeCurrency?.withdrawInfo?.currencyCoin}
                        alt="Coin"
                      />
                    </div>
                  </div>
                  <Icon
                    name="cross-icon"
                    onClick={() => setOpenWithdrawInfo(false)}
                    mainClassName="cursor-pointer"
                    className="w-[50px] h-[50px]"
                  />
                </div>

                <div className=" bg-dark-blue p-8 rounded-[10px]">
                  {activeCurrency?.withdrawInfo?.info.map((item, index) => (
                    <div
                      key={index}
                      className=" flex items-center text-paragraph font-Roboto text-brand-white-1 gap-3 my-10 "
                    >
                      <Image src={item.icon} alt="bullet point icon" />
                      <span className=" leading-[30px]">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="w-full flex gap-7 my-4 mt-10">
                  <button className="w-1/2 font-Roboto bg-main-gradient font-black leading-7 text-base md:text-small-heading text-brand-white-1 py-3  rounded-[10px]">
                    Download Phantom Wallet
                  </button>
                  <button className="w-1/2 font-Roboto bg-dark-blue font-black leading-7 text-base md:text-small-heading text-brand-white-1 py-3  rounded-[10px]">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div> */}
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-[20px] bg-brand-blue-dark text-left shadow-xl transition-all sm:my-8 sm:w-full max-w-[825px] px-[40px] py-6">
                <div className=" flex items-center justify-end ">
                  <Icon
                    name="cross-icon"
                    onClick={() => setOpenWithdrawInfo(false)}
                    mainClassName="cursor-pointer"
                    className="w-[50px] h-[50px]  "
                  />
                </div>

                <div className=" bg-dark-blue flex items-center justify-between p-10 rounded-[20px]">
                  <h2 className="text-[48px] font-robot font-semibold text-brand-white-1 leading-[56px]">
                    10,000 i
                  </h2>
                  <Image src={convert} alt="covert now" />
                  <Image src={solona} alt="solona" />
                </div>

                <div className=" w-3/4 flex flex-col gap-4 pl-2 my-3">
                  <div>
                    <h3 className="font-Roboto text-paragraph leading-[30.46px] font-normal opacity-[70%] text-brand-white-1 py-2">
                      Status
                    </h3>
                    <p className="font-Roboto text-paragraph leading-[30.46px] font-normal text-brand-white-1">
                      Confirmed
                    </p>
                  </div>
                  <div>
                    <h3 className="font-Roboto text-paragraph leading-[30.46px] font-normal opacity-[70%] text-brand-white-1 py-2">
                      Date
                    </h3>
                    <p className="font-Roboto text-paragraph leading-[30.46px] font-normal  text-brand-white-1">
                      December 22, 2021, 10:53 PM
                    </p>
                  </div>
                  <div>
                    <h3 className="font-Roboto text-paragraph leading-[30.46px] font-normal opacity-[70%] text-brand-white-1 py-2">
                      Message ID
                    </h3>
                    <p className="font-Roboto text-paragraph leading-[30.46px] font-normal text-[#398AF2]">
                      iota1qxttglnx7kezy8fv6kxhw3zns8wm08shmbds
                      rw4v5tztrtt64yn5k07dz0
                    </p>
                  </div>

                  <div>
                    <h3 className="font-Roboto text-paragraph leading-[30.46px] font-normal opacity-[70%] text-brand-white-1 py-2">
                      Receive Address
                    </h3>
                    <p className="font-Roboto text-paragraph leading-[30.46px] font-normal text-brand-white py-2 ">
                      iota1qxttglnx7kezy8fv6kxhw3zns8wm08shmbds
                      rw4v5tztrtt64yn5k07dz0
                    </p>
                  </div>

                  <div>
                    <h3 className="font-Roboto text-paragraph leading-[30.46px] font-normal opacity-[70%] text-brand-white py-2">
                      Amount
                    </h3>
                    <p className="font-Roboto text-paragraph leading-[30.46px] font-normal  text-brand-white">
                      1,000 lamport
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
