import Icon from "@/utils/icons";
import React from "react";

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
            className="fixed inset-0 bg-transparent bg-opacity-75 transition-opacity"
            aria-hidden="true"
            onClick={() => setOpenWithdrawInfo(false)} // Close modal when clicking outside
          ></div>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidd en rounded-[20px] bg-brand-blue-dark text-left shadow-xl transition-all sm:my-8 sm:w-full max-w-[825px] p-[30px]">
                <div className="w-full flex justify-between mb-3">
                  <div className="flex">
                    <h2 className="font-Roboto text-brand-blue-dark-1 text-base md:text-[26px] font-black leading-7">
                      {activeCurrency?.withdrawInfo?.heading}
                    </h2>
                    <div>icon</div>
                  </div>
                  <Icon
                    name="cross-icon"
                    onClick={() => setOpenWithdrawInfo(false)}
                    mainClassName="cursor-pointer"
                  />
                </div>
                <h2>withdraw info model content here</h2>
                <div className="w-full flex gap-7">
                  <button className="w-1/2 font-Roboto bg-main-gradient font-black leading-7 text-base md:text-small-heading text-brand-white-1 py-5  rounded-2xl">
                    Download Phantom Wallet
                  </button>
                  <button className="w-1/2 font-Roboto bg-main-gradient font-black leading-7 text-base md:text-small-heading text-brand-white-1 py-5  rounded-2xl">
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
