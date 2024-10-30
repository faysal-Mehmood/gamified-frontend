import Icon from "@/utils/icons";
import React from "react";
import Image from "next/image";
export const WithdraInfoModel = ({
  openWithdrawInfo,
  setOpenWithdrawInfo,
  activeCurrency,
}) => {
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
            className="fixed inset-0 backdrop-blur-[20px] transition-opacity"
            aria-hidden="true"
            onClick={() => setOpenWithdrawInfo(false)}
            style={{
              background:
                "linear-gradient(90deg, rgba(77, 137, 240, 0.2) 0%, rgba(145, 132, 234, 0.2) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
            }}
          ></div>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-[20px] bg-brand-blue-dark text-left shadow-xl transition-all sm:my-8 sm:w-full max-w-[825px] p-5 md:p-[30px]">
                <div className="w-full flex justify-between mb-3 ">
                  <div className="flex items-center justify-center gap-3">
                    <h2 className="font-Roboto text-brand-blue-dark-1 text-base md:text-small-heading lg:text-[46px] font-black ">
                      {activeCurrency?.withdrawInfo?.heading}
                    </h2>
                    <div>
                      <Image
                        src={activeCurrency?.withdrawInfo?.currencyCoin}
                        alt="Coin"
                        className="w-14 h-14 md:w-auto md:h-auto"
                      />
                    </div>
                  </div>
                  <Icon
                    name="cross-icon"
                    onClick={() => setOpenWithdrawInfo(false)}
                    mainClassName="cursor-pointer"
                    className="w-[26px] h-[26px]"
                  />
                </div>

                <div className=" bg-dark-blue p-4 md:p-9 rounded-[10px] flex flex-col gap-20 py-12">
                  {activeCurrency?.withdrawInfo?.info.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Image src={item.icon} alt="bullet point icon" />
                      <span className="text-base  md:text-paragraph font-Roboto text-brand-white-1  leading-[30px] font-black">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="w-full flex flex-col md:flex-row  gap-7 my-4 mt-10">
                  <button className="w-full md:w-1/2 font-Roboto bg-main-gradient font-black leading-7 text-base md:text-small-heading text-brand-white-1 py-3  rounded-[10px]">
                    Download Phantom Wallet
                  </button>
                  <button className="w-full md:w-1/2 font-Roboto bg-dark-blue font-black leading-7 text-base md:text-small-heading text-brand-white-1 py-3  rounded-[10px]">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
